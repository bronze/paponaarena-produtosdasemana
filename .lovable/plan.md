

## Plano: Adicionar Episódio 41 (Conferência do Figma)

### Visão Geral
Adicionar o episódio 41 com 9 menções de produtos. Este é o episódio mais antigo do dataset até agora.

---

### Análise de Dados

**Produtos existentes:**
| ID | Nome |
|----|------|
| `shopee` | Shopee |
| `disney-plus` | Disney+ |
| `spotify` | Spotify |
| `capcut` | CapCut |
| `audible` | Audible |

**Pessoas existentes:**
| ID | Nome |
|----|------|
| `arthur` | Arthur |
| `aiquis` | Aíquis |
| `lucao` | Lucão |
| `glauco` | Glauco |
| `cloves` | Cloves |
| `pilon` | Pilon |
| `nana` | Nana |
| `danilera` | Danilera |
| `caue` | Cauê |

---

### Novos Dados a Adicionar

**1 Episódio:**
| ID | Título | Data |
|----|--------|------|
| 41 | A conferência do Figma e as comunidades de design e produto | 2024-07-02 |

**2 Novos Produtos:**
| ID | Nome | Categoria | URL | Observação |
|----|------|-----------|-----|------------|
| `zoom` | Zoom | Productivity | https://zoom.us | Videoconferência |
| `gov-br` | gov.br | Productivity | https://www.gov.br | Portal do governo brasileiro |
| `samsung-health` | Samsung Health | Fitness | - | App de saúde Samsung |

**9 Menções:**
| Pessoa | Produto | Contexto |
|--------|---------|----------|
| Arthur | Zoom | - |
| Aíquis | Shopee | - |
| Lucão | Disney+ | - |
| Glauco | Spotify | - |
| Cloves | Spotify | - |
| Pilon | gov.br | - |
| Nana | CapCut | - |
| Danilera | Audible | - |
| Cauê | Samsung Health | "Projeto Fitness" |

---

### Arquivo a Modificar
`src/data/mentions.ts`

---

### Detalhes Técnicos

**Passo 1 - Adicionar episódio** (inserir antes do episódio 43):
```typescript
  {
    id: 41,
    title: "A conferência do Figma e as comunidades de design e produto",
    date: "2024-07-02",
    description: "Discussão sobre a conferência do Figma e o ecossistema das comunidades de design e produto.",
  },
```

**Passo 2 - Adicionar produtos novos:**

Productivity (junto com Notion, Obsidian, etc):
```typescript
  { id: "zoom", name: "Zoom", category: "Productivity", url: "https://zoom.us" },
  { id: "gov-br", name: "gov.br", category: "Productivity", url: "https://www.gov.br" },
```

Fitness (junto com outros apps fitness):
```typescript
  { id: "samsung-health", name: "Samsung Health", category: "Fitness" },
```

**Passo 3 - Adicionar menções** (inserir antes do Episode 43):
```typescript
  // Episode 41
  { id: "m41-1", episodeId: 41, personId: "arthur", productId: "zoom" },
  { id: "m41-2", episodeId: 41, personId: "aiquis", productId: "shopee" },
  { id: "m41-3", episodeId: 41, personId: "lucao", productId: "disney-plus" },
  { id: "m41-4", episodeId: 41, personId: "glauco", productId: "spotify" },
  { id: "m41-5", episodeId: 41, personId: "cloves", productId: "spotify" },
  { id: "m41-6", episodeId: 41, personId: "pilon", productId: "gov-br" },
  { id: "m41-7", episodeId: 41, personId: "nana", productId: "capcut" },
  { id: "m41-8", episodeId: 41, personId: "danilera", productId: "audible" },
  { id: "m41-9", episodeId: 41, personId: "caue", productId: "samsung-health", context: "Projeto Fitness" },
```

---

### Resumo de Alterações

| Item | Quantidade |
|------|------------|
| Episódio | 1 |
| Pessoas novas | 0 |
| Produtos novos | 3 |
| Menções | 9 |

### Notas
- Todas as pessoas já existem no sistema
- Glauco e Cloves mencionaram o mesmo produto (Spotify) neste episódio
- Cauê mencionou Samsung Health com o contexto "Projeto Fitness"

