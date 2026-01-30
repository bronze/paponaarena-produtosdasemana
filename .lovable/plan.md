

## Plano: Adicionar links do YouTube e Spotify aos episódios

### Problema
Voce adicionou `youtubeLink` e `spotifyLink` aos dados dos episódios, mas a interface TypeScript `Episode` nao inclui essas propriedades, causando erros de compilacao.

### Solucao
1. Atualizar a interface `Episode` para incluir os novos campos
2. Exibir os links na pagina de detalhe do episodio
3. Exibir os links nos cards da lista de episodios

---

### Arquivos a Modificar

**1. `src/data/mentions.ts`** - Atualizar interface Episode

Adicionar as novas propriedades opcionais:
```typescript
export interface Episode {
  id: number;
  title: string;
  date: string;
  description: string;
  youtubeLink?: string;
  spotifyLink?: string;
}
```

**2. `src/pages/EpisodeDetail.tsx`** - Adicionar botoes de link

Adicionar botoes ao lado das informacoes do episodio (data e mencoes):
- Botao YouTube (vermelho) com icone
- Botao Spotify (verde) com icone
- Ambos abrem em nova aba

**3. `src/pages/Episodes.tsx`** - Adicionar icones nos cards

Adicionar pequenos icones clicaveis no card de cada episodio:
- Icone YouTube
- Icone Spotify
- Posicionados no canto do card ou junto a data

---

### Design Visual

**Pagina de Detalhe (EpisodeDetail):**
- Botoes ao lado da data e contagem de mencoes
- Estilo: `variant="outline"` com cores tematicas
- Icones: YouTube e Spotify do Lucide (ou icones SVG customizados)

**Cards na Lista (Episodes):**
- Icones pequenos e discretos
- Ao clicar, abre o link (com `e.stopPropagation()` para nao navegar para o detalhe)
- Posicao: proximo a data do episodio

---

### Notas Tecnicas
- Usar `target="_blank"` e `rel="noopener noreferrer"` nos links externos
- Links sao opcionais (`?`), entao verificar existencia antes de renderizar
- Lucide nao tem icones oficiais do YouTube/Spotify, usaremos icones alternativos como `Youtube` e `Music` ou icones SVG inline

