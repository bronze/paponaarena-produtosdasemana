
## Plano: Adicionar Episódio 36 (Os lançamentos da OpenAI e do Google)

### Visão Geral
Adicionar o episódio 36 com 9 menções de produtos. Este será o episódio mais antigo do dataset.

---

### Análise de Dados

**Produtos existentes:**
| ID | Nome | Categoria |
|----|------|-----------|
| `kindle` | Kindle | Reading |
| `magie` | Magie | AI Tools |
| `google-maps` | Google Maps | Productivity |
| `zoom-loja` | Zoom | Retail |

**Pessoas existentes:**
| ID | Nome |
|----|------|
| `arthur` | Arthur |
| `aiquis` | Aíquis |
| `pilon` | Pilon |
| `cloves` | Cloves |
| `danilera` | Danilera |
| `nana` | Nana |
| `amanda` | Amanda |

---

### Novos Dados a Adicionar

**1 Episódio:**
| ID | Título | Data |
|----|--------|------|
| 36 | Os lançamentos da OpenAI e do Google | 2024-05-14 |

**2 Novas Pessoas:**
| ID | Nome |
|----|------|
| `luiz` | Luiz |
| `montoy` | Montoy |

**5 Novos Produtos:**
| ID | Nome | Categoria | URL | Observação |
|----|------|-----------|-----|------------|
| `kindle-app` | Kindle App | Reading | - | Variante do Kindle (parentId: kindle) |
| `nintendo-switch` | Nintendo Switch | Entertainment | - | Console/portátil original |
| `blinkist` | Blinkist | Reading | https://www.blinkist.com | App de resumos de livros |
| `surfview` | Surfview | Lifestyle | https://surfview.com.br/ | App/serviço de surf |
| `tunnelbear` | TunnelBear | Productivity | https://www.tunnelbear.com | VPN |
| `atlas-ti` | Atlas.ti | Productivity | https://atlasti.com/ | Software de análise qualitativa |

**Nota sobre Atlas.ti:** Já existe um produto `atlas` (Apps) no sistema, mas é diferente. O Atlas.ti é um software de análise de dados qualitativos, então será criado como um produto separado com ID `atlas-ti`.

**9 Menções:**
| Pessoa | Produto |
|--------|---------|
| Arthur | Kindle App |
| Aíquis | Nintendo Switch |
| Pilon | Magie |
| Cloves | Blinkist |
| Danilera | Surfview |
| Nana | Google Maps |
| Amanda | Zoom (loja) |
| Luiz | TunnelBear |
| Montoy | Atlas.ti |

---

### Arquivo a Modificar
`src/data/mentions.ts`

---

### Detalhes Técnicos

**Passo 1 - Adicionar episódio** (inserir antes do episódio 37, início da lista):
```typescript
  {
    id: 36,
    title: "Os lançamentos da OpenAI e do Google",
    date: "2024-05-14",
    description: "Discussão sobre os lançamentos recentes da OpenAI e do Google.",
  },
```

**Passo 2 - Adicionar produtos novos:**

Reading (variante do Kindle):
```typescript
  { id: "kindle-app", name: "Kindle App", category: "Reading", parentId: "kindle" },
```

Entertainment:
```typescript
  { id: "nintendo-switch", name: "Nintendo Switch", category: "Entertainment" },
```

Reading:
```typescript
  { id: "blinkist", name: "Blinkist", category: "Reading", url: "https://www.blinkist.com" },
```

Lifestyle:
```typescript
  { id: "surfview", name: "Surfview", category: "Lifestyle", url: "https://surfview.com.br/" },
```

Productivity:
```typescript
  { id: "tunnelbear", name: "TunnelBear", category: "Productivity", url: "https://www.tunnelbear.com" },
  { id: "atlas-ti", name: "Atlas.ti", category: "Productivity", url: "https://atlasti.com/" },
```

**Passo 3 - Adicionar pessoas:**
```typescript
  { id: "luiz", name: "Luiz" },
  { id: "montoy", name: "Montoy" },
```

**Passo 4 - Adicionar menções** (inserir antes do Episode 37):
```typescript
  // Episode 36
  { id: "m36-1", episodeId: 36, personId: "arthur", productId: "kindle-app" },
  { id: "m36-2", episodeId: 36, personId: "aiquis", productId: "nintendo-switch" },
  { id: "m36-3", episodeId: 36, personId: "pilon", productId: "magie" },
  { id: "m36-4", episodeId: 36, personId: "cloves", productId: "blinkist" },
  { id: "m36-5", episodeId: 36, personId: "danilera", productId: "surfview" },
  { id: "m36-6", episodeId: 36, personId: "nana", productId: "google-maps" },
  { id: "m36-7", episodeId: 36, personId: "amanda", productId: "zoom-loja" },
  { id: "m36-8", episodeId: 36, personId: "luiz", productId: "tunnelbear" },
  { id: "m36-9", episodeId: 36, personId: "montoy", productId: "atlas-ti" },
```

---

### Resumo de Alterações

| Item | Quantidade |
|------|------------|
| Episódio | 1 |
| Pessoas novas | 2 |
| Produtos novos | 6 |
| Menções | 9 |

### Notas
- Kindle App é variante do Kindle (parentId: kindle) - menções serão agregadas
- Nintendo Switch é diferente de Nintendo Switch 2 que já existe (ep. 84)
- Amanda mencionou o Zoom comparador de preços (zoom.com.br), não a ferramenta de videoconferência
- Atlas.ti é diferente do Atlas existente (um é software de pesquisa qualitativa, outro é app)
- TunnelBear é um serviço de VPN, categorizado como Productivity
- Magie e Google Maps já existem e serão reutilizados
