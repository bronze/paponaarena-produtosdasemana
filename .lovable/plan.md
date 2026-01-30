
## Plano: Adicionar Episódio 25 (Apple Vision Pro: será que chegou a "the next big thing?")

### Visão Geral
Adicionar o episódio 25 com 8 menções de produtos. Este será o novo episódio mais antigo do dataset (antes do episódio 27).

---

### Análise de Dados

**Produtos existentes:**
| ID | Nome | Categoria |
|----|------|-----------|
| `fitness-plus` | Fitness+ | Fitness |
| `samsung-smart-switch` | Samsung Smart Switch | Productivity |
| `garmin-connect` | Garmin Connect | Fitness |
| `elementor` | Elementor | Tech |
| `canva` | Canva | Productivity |

**Produtos a criar:**
| ID | Nome | Categoria | URL | Observação |
|----|------|-----------|-----|------------|
| `starlink` | Starlink | Utilities | https://www.starlink.com/ | Internet via satélite |
| `refood` | Refood | Delivery | - | Serviço de reaproveitamento de comida |
| `blocos-carnaval-rua` | Blocos de Carnaval de Rua | Entertainment | - | Eventos de carnaval de rua |

**Pessoas existentes:**
| ID | Nome |
|----|------|
| `arthur` | Arthur |
| `aiquis` | Aíquis |
| `fabio-beico` | Fábio Beiço |
| `boss` | Boss |
| `henrique` | Henrique |
| `lucas` | Lucas |

**Pessoas a criar:**
| ID | Nome |
|----|------|
| `lara-parodi` | Lara Parodi |
| `reis` | Reis |

---

### Arquivo a Modificar
`src/data/mentions.ts`

---

### Detalhes Técnicos

**Passo 1 - Adicionar episódio** (inserir antes do episódio 27, início da lista):
```typescript
  {
    id: 25,
    title: "Apple Vision Pro: será que chegou a \"the next big thing?\"",
    date: "2024-02-07",
    description: "Discussão sobre o lançamento do Apple Vision Pro e se ele representa a próxima grande revolução tecnológica.",
  },
```

**Passo 2 - Adicionar produtos novos:**

Utilities:
```typescript
  { id: "starlink", name: "Starlink", category: "Utilities", url: "https://www.starlink.com/" },
```

Delivery:
```typescript
  { id: "refood", name: "Refood", category: "Delivery" },
```

Entertainment:
```typescript
  { id: "blocos-carnaval-rua", name: "Blocos de Carnaval de Rua", category: "Entertainment" },
```

**Passo 3 - Adicionar pessoas:**
```typescript
  { id: "lara-parodi", name: "Lara Parodi" },
  { id: "reis", name: "Reis" },
```

**Passo 4 - Adicionar menções** (inserir antes do Episode 27):
```typescript
  // Episode 25
  { id: "m25-1", episodeId: 25, personId: "arthur", productId: "fitness-plus" },
  { id: "m25-2", episodeId: 25, personId: "aiquis", productId: "samsung-smart-switch" },
  { id: "m25-3", episodeId: 25, personId: "lara-parodi", productId: "garmin-connect" },
  { id: "m25-4", episodeId: 25, personId: "reis", productId: "blocos-carnaval-rua" },
  { id: "m25-5", episodeId: 25, personId: "fabio-beico", productId: "starlink" },
  { id: "m25-6", episodeId: 25, personId: "boss", productId: "elementor" },
  { id: "m25-7", episodeId: 25, personId: "henrique", productId: "canva" },
  { id: "m25-8", episodeId: 25, personId: "lucas", productId: "refood" },
```

---

### Resumo de Alterações

| Item | Quantidade |
|------|------------|
| Episódio | 1 |
| Pessoas novas | 2 |
| Produtos novos | 3 |
| Menções | 8 |

### Notas
- Fitness+, Samsung Smart Switch, Garmin Connect, Elementor e Canva já existem e serão reutilizados
- Starlink é o serviço de internet via satélite da SpaceX, categorizado como Utilities
- Refood é um serviço relacionado a comida/reaproveitamento, categorizado como Delivery
- "Blocos de Carnaval de Rua" é um evento/experiência, categorizado como Entertainment
- Lara Parodi e Reis são novos participantes
