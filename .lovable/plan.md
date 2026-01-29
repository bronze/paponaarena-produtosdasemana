

## Plano: Adicionar Episódio 41 (Estratégias de A.I.)

### Visão Geral
Adicionar o episódio 41 com 11 menções de produtos. Este episódio é anterior ao 42 e será o mais antigo do dataset.

---

### Análise de Dados

**Produtos existentes:**
| ID | Nome |
|----|------|
| `canva` | Canva |
| `ifood` | iFood |
| `garmin-connect` | Garmin Connect |
| `spotify` | Spotify |
| `max` | Max |

**Pessoas existentes:**
| ID | Nome |
|----|------|
| `arthur` | Arthur |
| `aiquis` | Aíquis |
| `cloves` | Cloves |
| `nana` | Nana |
| `karina` | Karina |
| `bob` | Bob |
| `glauco` | Glauco |
| `lucas` | Lucas |

---

### Novos Dados a Adicionar

**1 Episódio:**
| ID | Título | Data |
|----|--------|------|
| 41 | Estratégias de A.I.: integrações, modelos e custos | 2024-06-26 |

**6 Novas Pessoas:**
| ID | Nome |
|----|------|
| `miriam` | Miriam |
| `eduardo` | Eduardo |

---

**9 Novos Produtos:**
| ID | Nome | Categoria | URL | Observação |
|----|------|-----------|-----|------------|
| `gravidez-plus` | Gravidez+ | Lifestyle | - | App de acompanhamento de gravidez |
| `ray-ban-meta` | Ray-Ban Meta | Hardware | - | Já existe! |
| `zoom-loja` | Zoom | Retail | https://www.zoom.com.br/ | Comparador de preços (diferente do Zoom videoconferência) |
| `buscape` | Buscapé | Retail | https://www.buscape.com.br/ | - |
| `buscape-zoom` | Buscapé + Zoom | Retail | - | Combo: alsoCredits: ["buscape", "zoom-loja"] |
| `invisibility-ai` | Invisibility AI | AI Tools | https://github.com/InvisibilityInc/Invisibility | - |
| `ifood-lista-mercado` | iFood (mostrar a lista do mercado) | Delivery | - | Variante do iFood com parentId |
| `rstudio` | R-Studio | Development | - | IDE para R |
| `bipa` | Bipa | Finance | https://bipa.app/ | - |

**Nota sobre Ray-Ban Meta:** Já existe no sistema com id `ray-ban-meta`.

**Nota sobre Zoom:** O Zoom.com.br (comparador de preços) é diferente do Zoom.us (videoconferência). Criando `zoom-loja` para evitar conflito com o `zoom` existente.

**11 Menções:**
| Pessoa | Produto |
|--------|---------|
| Arthur | Gravidez+ |
| Arthur | Ray-Ban Meta |
| Aíquis | Buscapé + Zoom (combo) |
| Cloves | Invisibility AI |
| Nana | Canva |
| Miriam | iFood (mostrar a lista do mercado) |
| Karina | Garmin Connect |
| Eduardo | R-Studio |
| Bob | Spotify |
| Glauco | MAX |
| Lucas | Bipa |

---

### Arquivo a Modificar
`src/data/mentions.ts`

---

### Detalhes Técnicos

**Passo 1 - Adicionar episódio** (inserir antes do episódio 42, início da lista de episódios 2024):
```typescript
  {
    id: 41,
    title: "Estratégias de A.I.: integrações, modelos e custos",
    date: "2024-06-26",
    description: "Discussão sobre estratégias de inteligência artificial: integrações, modelos e custos.",
  },
```

**Passo 2 - Adicionar produtos novos:**

Lifestyle:
```typescript
  { id: "gravidez-plus", name: "Gravidez+", category: "Lifestyle" },
```

Retail (junto com Amazon, StockX):
```typescript
  { id: "zoom-loja", name: "Zoom", category: "Retail", url: "https://www.zoom.com.br/" },
  { id: "buscape", name: "Buscapé", category: "Retail", url: "https://www.buscape.com.br/" },
  { id: "buscape-zoom", name: "Buscapé + Zoom", category: "Retail", alsoCredits: ["buscape", "zoom-loja"] },
```

AI Tools:
```typescript
  { id: "invisibility-ai", name: "Invisibility AI", category: "AI Tools", url: "https://github.com/InvisibilityInc/Invisibility" },
```

Delivery (variante do iFood):
```typescript
  { id: "ifood-lista-mercado", name: "iFood (mostrar a lista do mercado)", category: "Delivery", parentId: "ifood" },
```

Development:
```typescript
  { id: "rstudio", name: "R-Studio", category: "Development" },
```

Finance:
```typescript
  { id: "bipa", name: "Bipa", category: "Finance", url: "https://bipa.app/" },
```

**Passo 3 - Adicionar pessoas:**
```typescript
  { id: "miriam", name: "Miriam" },
  { id: "eduardo", name: "Eduardo" },
```

**Passo 4 - Adicionar menções** (inserir antes do Episode 42):
```typescript
  // Episode 41
  { id: "m41-1", episodeId: 41, personId: "arthur", productId: "gravidez-plus" },
  { id: "m41-2", episodeId: 41, personId: "arthur", productId: "ray-ban-meta" },
  { id: "m41-3", episodeId: 41, personId: "aiquis", productId: "buscape-zoom" },
  { id: "m41-4", episodeId: 41, personId: "cloves", productId: "invisibility-ai" },
  { id: "m41-5", episodeId: 41, personId: "nana", productId: "canva" },
  { id: "m41-6", episodeId: 41, personId: "miriam", productId: "ifood-lista-mercado" },
  { id: "m41-7", episodeId: 41, personId: "karina", productId: "garmin-connect" },
  { id: "m41-8", episodeId: 41, personId: "eduardo", productId: "rstudio" },
  { id: "m41-9", episodeId: 41, personId: "bob", productId: "spotify" },
  { id: "m41-10", episodeId: 41, personId: "glauco", productId: "max" },
  { id: "m41-11", episodeId: 41, personId: "lucas", productId: "bipa" },
```

---

### Resumo de Alterações

| Item | Quantidade |
|------|------------|
| Episódio | 1 |
| Pessoas novas | 2 |
| Produtos novos | 8 |
| Menções | 11 |

### Notas
- O Zoom.com.br (comparador de preços) é diferente do Zoom.us (videoconferência) - criando `zoom-loja` para evitar conflito
- O combo "Buscapé + Zoom" usa `alsoCredits` para creditar ambos os produtos
- iFood (mostrar a lista do mercado) é uma variante com `parentId: "ifood"`
- Ray-Ban Meta já existe no sistema, será reutilizado
- Arthur menciona 2 produtos neste episódio

