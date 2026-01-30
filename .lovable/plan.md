

## Plano: Adicionar Episódio 30 (A.I. e Futebol dá jogo? Como se tornar um PM mais técnico)

### Visão Geral
Adicionar o episódio 30 com 8 menções de produtos. Este será o novo episódio mais antigo do dataset (antes do episódio 31).

---

### Análise de Dados

**Produtos existentes:**
| ID | Nome | Categoria |
|----|------|-----------|
| `pocket` | Pocket | Productivity |
| `splitwise` | Splitwise | Business |
| `quinto-andar` | Quinto Andar | Business |
| `mfit-personal` | MFIT Personal | Fitness |

**Produtos a criar:**
| ID | Nome | Categoria | URL | Observação |
|----|------|-----------|-----|------------|
| `twitch` | Twitch | Entertainment | https://twitch.tv | Plataforma de streaming de jogos |
| `b4waste` | B4waste | Lifestyle | https://b4waste.com.br/ | App anti-desperdício de comida |
| `zillow` | Zillow | Business | https://zillow.com | Mercado imobiliário EUA |
| `yoosee` | Yoosee | Hardware | - | App para câmeras IP |

**Pessoas existentes:**
| ID | Nome |
|----|------|
| `aiquis` | Aíquis |
| `arthur` | Arthur |
| `nana` | Nana |
| `mateus` | Mateus |
| `pilon` | Pilon |
| `glauco` | Glauco |
| `fabio-beico` | Fábio Beiço |
| `dezao` | Dezão |

**Pessoas a criar:**
Nenhuma — todas já existem no sistema.

---

### Novos Dados a Adicionar

**1 Episódio:**
| ID | Título | Data |
|----|--------|------|
| 30 | A.I. e Futebol dá jogo? Como se tornar um PM mais técnico | 2024-04-05 |

**4 Novos Produtos:**
| ID | Nome | Categoria | URL |
|----|------|-----------|-----|
| `twitch` | Twitch | Entertainment | https://twitch.tv |
| `b4waste` | B4waste | Lifestyle | https://b4waste.com.br/ |
| `zillow` | Zillow | Business | https://zillow.com |
| `yoosee` | Yoosee | Hardware | - |

**8 Menções:**
| Pessoa | Produto |
|--------|---------|
| Aíquis | Twitch |
| Arthur | Pocket |
| Dezão | B4waste |
| Nana | Splitwise |
| Mateus | Zillow |
| Pilon | Quinto Andar |
| Glauco | MFIT Personal |
| Fábio Beiço | Yoosee |

---

### Arquivo a Modificar
`src/data/mentions.ts`

---

### Detalhes Técnicos

**Passo 1 - Adicionar episódio** (inserir antes do episódio 31, início da lista):
```typescript
  {
    id: 30,
    title: "A.I. e Futebol dá jogo? Como se tornar um PM mais técnico",
    date: "2024-04-05",
    description: "Discussão sobre inteligência artificial no futebol e como se tornar um product manager mais técnico.",
  },
```

**Passo 2 - Adicionar produtos novos:**

Entertainment:
```typescript
  { id: "twitch", name: "Twitch", category: "Entertainment", url: "https://twitch.tv" },
```

Lifestyle:
```typescript
  { id: "b4waste", name: "B4waste", category: "Lifestyle", url: "https://b4waste.com.br/" },
```

Business:
```typescript
  { id: "zillow", name: "Zillow", category: "Business", url: "https://zillow.com" },
```

Hardware:
```typescript
  { id: "yoosee", name: "Yoosee", category: "Hardware" },
```

**Passo 3 - Adicionar menções** (inserir antes do Episode 31):
```typescript
  // Episode 30
  { id: "m30-1", episodeId: 30, personId: "aiquis", productId: "twitch" },
  { id: "m30-2", episodeId: 30, personId: "arthur", productId: "pocket" },
  { id: "m30-3", episodeId: 30, personId: "dezao", productId: "b4waste" },
  { id: "m30-4", episodeId: 30, personId: "nana", productId: "splitwise" },
  { id: "m30-5", episodeId: 30, personId: "mateus", productId: "zillow" },
  { id: "m30-6", episodeId: 30, personId: "pilon", productId: "quinto-andar" },
  { id: "m30-7", episodeId: 30, personId: "glauco", productId: "mfit-personal" },
  { id: "m30-8", episodeId: 30, personId: "fabio-beico", productId: "yoosee" },
```

---

### Resumo de Alterações

| Item | Quantidade |
|------|------------|
| Episódio | 1 |
| Pessoas novas | 0 |
| Produtos novos | 4 |
| Menções | 8 |

### Notas
- Pocket, Splitwise, Quinto Andar e MFIT Personal já existem e serão reutilizados
- Todas as 8 pessoas já existem no sistema
- Twitch é a plataforma de streaming de jogos da Amazon
- B4waste é um app brasileiro anti-desperdício similar ao FoodtoSave
- Zillow é o maior marketplace imobiliário dos EUA
- Yoosee é um app para controle de câmeras IP de segurança

