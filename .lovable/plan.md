

## Plano: Adicionar Episódio 27 (Ideia boa é ideia na rua; um podcast feito por AI)

### Visão Geral
Adicionar o episódio 27 com 10 menções de produtos. Este será o novo episódio mais antigo do dataset (antes do episódio 28).

---

### Análise de Dados

**Produtos existentes:**
| ID | Nome | Categoria |
|----|------|-----------|
| `speechify` | Speechify | Business |
| `youtube-premium` | Youtube Premium | Entertainment |
| `cifra-club` | Cifra Club | Entertainment |
| `99` | 99 | Transportation |
| `turbi` | Turbi | Transportation |
| `abastece-ai` | Abastece Aí | Finance |
| `alexa` | Alexa | Hardware |
| `gymrats` | GymRats | Fitness |

**Produtos a criar:**
| ID | Nome | Categoria | URL | Observação |
|----|------|-----------|-----|------------|
| `sumone` | SumOne | Social | - | App para relacionamentos |
| `sites-aluguel-apartamento` | Sites de aluguel de apartamento | Business | - | Categoria genérica de sites de aluguel |

**Pessoas existentes:**
| ID | Nome |
|----|------|
| `arthur` | Arthur |
| `aiquis` | Aíquis |
| `boss` | Boss |
| `glauco` | Glauco |
| `andrezao` | Andrezão |
| `lucas` | Lucas |
| `paulo` | Paulo |
| `pilon` | Pilon |
| `nana` | Nana |

**Pessoas a criar:**
| ID | Nome | Observação |
|----|------|------------|
| `rodrigo-tavares` | Rodrigo Tavares | Novo participante |

---

### Novos Dados a Adicionar

**1 Episódio:**
| ID | Título | Data |
|----|--------|------|
| 27 | Ideia boa é ideia na rua; um podcast feito por AI | 2024-02-28 |

**1 Nova Pessoa:**
| ID | Nome |
|----|------|
| `rodrigo-tavares` | Rodrigo Tavares |

**2 Novos Produtos:**
| ID | Nome | Categoria | URL |
|----|------|-----------|-----|
| `sumone` | SumOne | Social | - |
| `sites-aluguel-apartamento` | Sites de aluguel de apartamento | Business | - |

**10 Menções:**
| Pessoa | Produto |
|--------|---------|
| Arthur | SumOne |
| Aíquis | Sites de aluguel de apartamento |
| Boss | Speechify |
| Glauco | Youtube Premium |
| Andrezão | Cifra Club |
| Lucas | 99 |
| Rodrigo Tavares | Turbi |
| Paulo | Abastece Aí |
| Pilon | Alexa |
| Nana | GymRats |

---

### Arquivo a Modificar
`src/data/mentions.ts`

---

### Detalhes Técnicos

**Passo 1 - Adicionar episódio** (inserir antes do episódio 28, início da lista):
```typescript
  {
    id: 27,
    title: "Ideia boa é ideia na rua; um podcast feito por AI",
    date: "2024-02-28",
    description: "Discussão sobre a importância de colocar ideias em prática e a criação de podcasts com inteligência artificial.",
  },
```

**Passo 2 - Adicionar produtos novos:**

Social:
```typescript
  { id: "sumone", name: "SumOne", category: "Social" },
```

Business:
```typescript
  { id: "sites-aluguel-apartamento", name: "Sites de aluguel de apartamento", category: "Business" },
```

**Passo 3 - Adicionar pessoa:**
```typescript
  // Episode 27 contributor
  { id: "rodrigo-tavares", name: "Rodrigo Tavares" },
```

**Passo 4 - Adicionar menções** (inserir antes do Episode 28):
```typescript
  // Episode 27
  { id: "m27-1", episodeId: 27, personId: "arthur", productId: "sumone" },
  { id: "m27-2", episodeId: 27, personId: "aiquis", productId: "sites-aluguel-apartamento" },
  { id: "m27-3", episodeId: 27, personId: "boss", productId: "speechify" },
  { id: "m27-4", episodeId: 27, personId: "glauco", productId: "youtube-premium" },
  { id: "m27-5", episodeId: 27, personId: "andrezao", productId: "cifra-club" },
  { id: "m27-6", episodeId: 27, personId: "lucas", productId: "99" },
  { id: "m27-7", episodeId: 27, personId: "rodrigo-tavares", productId: "turbi" },
  { id: "m27-8", episodeId: 27, personId: "paulo", productId: "abastece-ai" },
  { id: "m27-9", episodeId: 27, personId: "pilon", productId: "alexa" },
  { id: "m27-10", episodeId: 27, personId: "nana", productId: "gymrats" },
```

---

### Resumo de Alterações

| Item | Quantidade |
|------|------------|
| Episódio | 1 |
| Pessoas novas | 1 |
| Produtos novos | 2 |
| Menções | 10 |

### Notas
- Speechify, Youtube Premium, Cifra Club, 99, Turbi, Abastece Aí, Alexa e GymRats já existem e serão reutilizados
- "abstece aí" foi mapeado para `abastece-ai` que já existe no sistema (Finance)
- SumOne é um app para relacionamentos, classificado como Social
- "Sites de aluguel de apartamento" é uma categoria genérica mencionada, não um produto específico
- "Rodrigo Tavares" é um novo participante
- "Andrezão" usa o ID `andrezao` existente

