

## Plano: Agrupar Produtos por Pessoa na Página do Episódio

### Problema Atual

Quando uma pessoa menciona múltiplos produtos no mesmo episódio, cada produto aparece em uma linha separada:

```
Amanda Couto → ChatGPT
Amanda Couto → Gemini
Rodrigo Frumento → ChatGPT
Rodrigo Frumento → Jira
Rodrigo Frumento → ChatPRD
```

### Resultado Desejado

Cada pessoa aparece apenas uma vez, com todos os seus produtos na mesma linha:

```
Amanda Couto → ChatGPT, Gemini
Rodrigo Frumento → ChatGPT, Jira, ChatPRD
```

---

### Arquivo a Modificar

`src/pages/EpisodeDetail.tsx`

---

### Implementação

#### 1. Usar o agrupamento `mentionsByPerson` já existente

O código já cria um Map agrupando menções por pessoa (linhas 64-69), mas não o utiliza. Vamos aproveitar essa estrutura.

#### 2. Refatorar a renderização (linhas 144-180)

**Antes:**
```tsx
{mentions
  .slice()
  .sort((a, b) => { ... })
  .map((mention) => {
    // Uma linha por menção
    return (
      <div key={mention.id}>
        <Link to={`/people/${person.id}`}>{person.name}</Link>
        <Badge>{product.name}</Badge>
      </div>
    );
  })}
```

**Depois:**
```tsx
{Array.from(mentionsByPerson.entries())
  .sort(([personIdA], [personIdB]) => {
    const aName = getPersonById(personIdA)?.name || "";
    const bName = getPersonById(personIdB)?.name || "";
    return aName.localeCompare(bName);
  })
  .map(([personId, personMentions]) => {
    const person = getPersonById(personId);
    if (!person) return null;

    return (
      <div key={personId} className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
        <div className="flex items-center gap-3 flex-wrap">
          <Link
            to={`/people/${personId}`}
            className="font-medium text-foreground hover:text-primary transition-colors"
          >
            {person.name}
          </Link>
          <div className="flex items-center gap-2 flex-wrap">
            {personMentions.map((mention) => {
              const product = getProductById(mention.productId);
              if (!product) return null;
              return (
                <Link key={mention.id} to={`/products/${mention.productId}`}>
                  <Badge
                    variant="secondary"
                    className="hover:bg-primary hover:text-primary-foreground transition-colors cursor-pointer text-xs"
                  >
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

### Resultado Visual

| Pessoa | Produtos |
|--------|----------|
| Amanda Couto | `ChatGPT` `Gemini` |
| Amilker | `Google Script` `NotebookLM` |
| Carlos Bronze | `Cursor` `Lovable` |
| Marcos Roman | `Isla` `Lovable` |
| Nelson de Moura | `Cursor` `Antigravity` |
| Rodrigo Frumento | `ChatGPT` `Jira` `ChatPRD` |
| Thiago Valinho | `Gemini` `GChat` `Canvas` |
| Vanessa Silva | `ChatGPT` `Copilot` |

Cada pessoa aparece apenas 1 vez, com todos os seus produtos como badges na mesma linha.

