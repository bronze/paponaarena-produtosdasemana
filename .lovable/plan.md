

## Plano: Adicionar Episódio 34 (Comunicação em poucas palavras e como desenvolver PMs sem bullsh**agem)

### Visão Geral
Adicionar o episódio 34 com 11 menções de produtos. Este será o episódio mais antigo do dataset.

---

### Análise de Dados

**Produtos existentes:**
| ID | Nome | Categoria |
|----|------|-----------|
| `instagram` | Instagram | Social |
| `booking` | Booking.com | Travel |
| `kindle` | Kindle | Reading |
| `brilliant` | Brilliant | Education |
| `dasa` | Dasa | Wellness |

**Produtos a criar:**
| ID | Nome | Categoria | URL | Observação |
|----|------|-----------|-----|------------|
| `overleaf` | Overleaf | Productivity | https://www.overleaf.com/ | Editor LaTeX online |
| `omio` | Omio | Travel | https://www.omio.com.br/ | Comparador de viagens |
| `excel` | Excel | Productivity | - | Microsoft Excel |
| `gamepass` | GamePass | Entertainment | - | Xbox Game Pass |
| `united-airlines` | United Airlines | Travel | - | Companhia aérea |
| `tinder` | Tinder | Social | - | App de relacionamentos |

**Pessoas existentes:**
| ID | Nome |
|----|------|
| `arthur` | Arthur |
| `aiquis` | Aíquis |
| `lucas` | Lucas |
| `glauco` | Glauco |
| `andrezao` | Andrezão |
| `mateus` | Mateus |

**Pessoas a criar:**
| ID | Nome | Observação |
|----|------|------------|
| `eduardo-augusto` | Eduardo Augusto | Diferente de eduardo e eduardo-odon |
| `ana-ep34` | Ana | ID único para ep. 34 |
| `danilo-ep34` | Danilo | Diferente de danilo-penteado |
| `sagradinho` | Sagradinho | Novo participante |
| `anonimo` | Anônimo | Menção anônima |

---

### Novos Dados a Adicionar

**1 Episódio:**
| ID | Título | Data |
|----|--------|------|
| 34 | Comunicação em poucas palavras e como desenvolver PMs sem bullsh**agem | 2024-05-01 |

**5 Novas Pessoas:**
| ID | Nome |
|----|------|
| `eduardo-augusto` | Eduardo Augusto |
| `ana-ep34` | Ana |
| `danilo-ep34` | Danilo |
| `sagradinho` | Sagradinho |
| `anonimo` | Anônimo |

**6 Novos Produtos:**
| ID | Nome | Categoria | URL |
|----|------|-----------|-----|
| `overleaf` | Overleaf | Productivity | https://www.overleaf.com/ |
| `omio` | Omio | Travel | https://www.omio.com.br/ |
| `excel` | Excel | Productivity | - |
| `gamepass` | GamePass | Entertainment | - |
| `united-airlines` | United Airlines | Travel | - |
| `tinder` | Tinder | Social | - |

**11 Menções:**
| Pessoa | Produto |
|--------|---------|
| Arthur | Instagram |
| Aíquis | Booking.com |
| Eduardo Augusto | Overleaf |
| Lucas | Brilliant |
| Ana | Omio |
| Danilo | Kindle |
| Sagradinho | Excel |
| Andrezão | GamePass |
| Glauco | Dasa |
| Mateus | United Airlines |
| Anônimo | Tinder |

---

### Arquivo a Modificar
`src/data/mentions.ts`

---

### Detalhes Técnicos

**Passo 1 - Adicionar episódio** (inserir antes do episódio 35):
```typescript
  {
    id: 34,
    title: "Comunicação em poucas palavras e como desenvolver PMs sem bullsh**agem",
    date: "2024-05-01",
    description: "Discussão sobre comunicação assertiva e desenvolvimento de product managers.",
  },
```

**Passo 2 - Adicionar produtos novos:**

Productivity:
```typescript
  { id: "overleaf", name: "Overleaf", category: "Productivity", url: "https://www.overleaf.com/" },
  { id: "excel", name: "Excel", category: "Productivity" },
```

Travel:
```typescript
  { id: "omio", name: "Omio", category: "Travel", url: "https://www.omio.com.br/" },
  { id: "united-airlines", name: "United Airlines", category: "Travel" },
```

Entertainment:
```typescript
  { id: "gamepass", name: "GamePass", category: "Entertainment" },
```

Social:
```typescript
  { id: "tinder", name: "Tinder", category: "Social" },
```

**Passo 3 - Adicionar pessoas:**
```typescript
  // Episode 34 contributors
  { id: "eduardo-augusto", name: "Eduardo Augusto" },
  { id: "ana-ep34", name: "Ana" },
  { id: "danilo-ep34", name: "Danilo" },
  { id: "sagradinho", name: "Sagradinho" },
  { id: "anonimo", name: "Anônimo" },
```

**Passo 4 - Adicionar menções** (inserir antes do Episode 35):
```typescript
  // Episode 34
  { id: "m34-1", episodeId: 34, personId: "arthur", productId: "instagram" },
  { id: "m34-2", episodeId: 34, personId: "aiquis", productId: "booking" },
  { id: "m34-3", episodeId: 34, personId: "eduardo-augusto", productId: "overleaf" },
  { id: "m34-4", episodeId: 34, personId: "lucas", productId: "brilliant" },
  { id: "m34-5", episodeId: 34, personId: "ana-ep34", productId: "omio" },
  { id: "m34-6", episodeId: 34, personId: "danilo-ep34", productId: "kindle" },
  { id: "m34-7", episodeId: 34, personId: "sagradinho", productId: "excel" },
  { id: "m34-8", episodeId: 34, personId: "andrezao", productId: "gamepass" },
  { id: "m34-9", episodeId: 34, personId: "glauco", productId: "dasa" },
  { id: "m34-10", episodeId: 34, personId: "mateus", productId: "united-airlines" },
  { id: "m34-11", episodeId: 34, personId: "anonimo", productId: "tinder" },
```

---

### Resumo de Alterações

| Item | Quantidade |
|------|------------|
| Episódio | 1 |
| Pessoas novas | 5 |
| Produtos novos | 6 |
| Menções | 11 |

### Notas
- Instagram, Booking.com, Kindle, Brilliant e Dasa já existem e serão reutilizados
- Eduardo Augusto é diferente de Eduardo (ep. 41) e Eduardo Odon
- Ana recebe ID `ana-ep34` pois há outras pessoas com nomes similares (ana-romeu, etc.)
- Danilo recebe ID `danilo-ep34` pois há Danilo Penteado já existente
- Overleaf é um editor LaTeX online popular na academia
- GamePass é o serviço de assinatura de jogos da Xbox/Microsoft
- Omio é um comparador/agregador de viagens europeu

