

## Plano: Atualizar Dashboard com Lógica Consistente

### Problema Atual

O componente **RecentMentions** no dashboard:
1. Mostra uma lista flat de menções (uma linha por menção)
2. Não agrupa menções por pessoa (mesma pessoa aparece múltiplas vezes)
3. Não trata combos com links individuais

### Resultado Desejado

Aplicar a mesma lógica da página EpisodeDetail:
- Agrupar menções por pessoa (cada pessoa aparece 1 vez)
- Mostrar todos os produtos de cada pessoa na mesma linha
- Tratar combos com links individuais + badge "combo"

---

### Arquivos a Modificar

| Arquivo | Mudança |
|---------|---------|
| `src/components/dashboard/RecentMentions.tsx` | Agrupar por pessoa + tratamento de combos |

---

### Implementação

#### Refatorar `RecentMentions.tsx`

**Antes (lógica atual):**
```tsx
const recentMentions = mentions
  .filter((m) => m.episodeId === latestEpisodeId)
  .slice(0, 8);

// Renderiza uma linha por menção
{recentMentions.map((mention) => (
  <div>
    {person.name} → {product.name}
  </div>
))}
```

**Depois (agrupado por pessoa):**
```tsx
import { getProductById } from "@/data/mentions";

// Get all mentions from latest episode
const latestMentions = mentions.filter((m) => m.episodeId === latestEpisodeId);

// Group by person
const mentionsByPerson = new Map();
latestMentions.forEach((m) => {
  const existing = mentionsByPerson.get(m.personId) || [];
  mentionsByPerson.set(m.personId, [...existing, m]);
});

// Render grouped by person (show first 8 people)
{Array.from(mentionsByPerson.entries())
  .slice(0, 8)
  .map(([personId, personMentions]) => {
    const person = getPersonById(personId);
    return (
      <div key={personId} className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
        <div className="flex items-center gap-3 flex-wrap">
          <Link to={`/people/${personId}`}>{person.name}</Link>
          <div className="flex items-center gap-2 flex-wrap">
            {personMentions.map((mention) => {
              const product = getProductById(mention.productId);
              
              // Combo: show individual links + combo badge
              if (product.alsoCredits) {
                return (
                  <div key={mention.id} className="flex items-center gap-1">
                    {product.alsoCredits.map((creditedId, idx) => (
                      <span key={creditedId} className="flex items-center gap-1">
                        {idx > 0 && <span className="text-muted-foreground text-xs">+</span>}
                        <Link to={`/products/${creditedId}`}>
                          <Badge variant="secondary" className="text-xs">
                            {getProductById(creditedId).name}
                          </Badge>
                        </Link>
                      </span>
                    ))}
                    <Badge variant="outline" className="text-xs">combo</Badge>
                  </div>
                );
              }
              
              // Regular product
              return (
                <Link key={mention.id} to={`/products/${mention.productId}`}>
                  <Badge variant="secondary" className="text-xs">
                    {product.name}
                  </Badge>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    );
  })}
```

---

### Resultado Visual (Episódio 103)

| Antes | Depois |
|-------|--------|
| Aíquis → Duo Gourmet | Aíquis: `Duo Gourmet` |
| Arthur → Massageador Pescoço | Arthur: `Massageador Pescoço` |
| Caiman → Manus AI | Caiman: `Manus AI` |
| Thiago Valinho → Gemini | Thiago Valinho: `Gemini` `GChat` `Canvas` |
| Thiago Valinho → GChat | Vanessa Silva: `ChatGPT` `Copilot 365` |
| Thiago Valinho → Canvas | Amanda Couto: `ChatGPT` `Gemini` |
| ... (8 linhas de menções) | ... (8 pessoas com seus produtos) |

Cada pessoa aparece apenas 1 vez, com todos os seus produtos como badges.

---

### Componente LatestEpisodeCard

Este componente já está funcionando corretamente - mostra o episódio 103 como o mais recente. Nenhuma alteração necessária.

