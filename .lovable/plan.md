

## Plano: Adicionar Episódio 43 (O novo modelo da Meta)

### Visão Geral
Adicionar o episódio 43 com 13 menções de produtos.

---

### Análise de Dados

**Produtos existentes:**
| ID | Nome |
|----|------|
| `twitter` | Twitter |
| `strava` | Strava |
| `vivino` | Vivino |
| `bblend` | BBlend |

**Pessoas existentes:**
| ID | Nome |
|----|------|
| `arthur` | Arthur |
| `aiquis` | Aíquis |
| `karina` | Karina |
| `andrezao` | Andrezão |
| `andrezinho` | Andrézinho |
| `lucas` | Lucas |
| `glauco` | Glauco |
| `nana` | Nana |
| `pilon` | Pilon |

---

### Novos Dados a Adicionar

**1 Episódio:**
| ID | Título | Data |
|----|--------|------|
| 43 | O novo modelo da Meta, Vendas do Ray-Ban bombando e os desafios da Netflix com conteúdos ao vivo | 2024-07-24 |

**3 Novas Pessoas:**
| ID | Nome |
|----|------|
| `victor` | Victor |
| `caco` | Caco |

Nota: Victor Nery já existe como `victor-nery`, mas este parece ser outro Victor. Criando novo ID.

**9 Novos Produtos:**
| ID | Nome | Categoria | URL | Observação |
|----|------|-----------|-----|------------|
| `amazon` | Amazon | Retail | https://amazon.com.br | - |
| `stockx` | StockX | Retail | https://stockx.com/ | Marketplace de sneakers |
| `telegram` | Telegram | Social | https://telegram.org | - |
| `azul-jogo` | Azul | Entertainment | - | Jogo de tabuleiro |
| `crunchyroll` | Crunchyroll | Entertainment | https://crunchyroll.com | Streaming de anime |
| `snowflake` | Snowflake | Development | https://snowflake.com | Plataforma de dados (diferente de Cereal Snowflake) |
| `squad-busters` | Squad Busters | Entertainment | - | Jogo mobile |
| `daki` | Daki | Delivery | https://daki.com.br | - |
| `net-claro-wifi` | Net-Claro Wi-Fi | Utilities | - | Serviço de internet |

**Nota sobre B.blend:** O usuário escreveu "B.blend" mas já existe produto `bblend` (BBlend). Vou usar o existente.

**13 Menções:**
| Pessoa | Produto |
|--------|---------|
| Arthur | Amazon |
| Arthur | StockX |
| Aíquis | Twitter |
| Aíquis | Telegram |
| Karina | BBlend |
| Andrezão | Azul (jogo) |
| Andrézinho | Crunchyroll |
| Lucas | Snowflake |
| Glauco | Vivino |
| Nana | Strava |
| Victor | Squad Busters |
| Caco | Daki |
| Pilon | Net-Claro Wi-Fi |

---

### Arquivo a Modificar
`src/data/mentions.ts`

---

### Detalhes Técnicos

**Passo 1 - Adicionar episódio** (inserir antes do episódio 45):
```typescript
  {
    id: 43,
    title: "O novo modelo da Meta, Vendas do Ray-Ban bombando e os desafios da Netflix com conteúdos ao vivo",
    date: "2024-07-24",
    description: "Discussão sobre o novo modelo de IA da Meta, o sucesso de vendas do Ray-Ban e os desafios da Netflix com transmissões ao vivo.",
  },
```

**Passo 2 - Adicionar produtos novos:**

Social (após twitter):
```typescript
  { id: "telegram", name: "Telegram", category: "Social", url: "https://telegram.org" },
```

Entertainment:
```typescript
  { id: "azul-jogo", name: "Azul", category: "Entertainment" },
  { id: "crunchyroll", name: "Crunchyroll", category: "Entertainment", url: "https://crunchyroll.com" },
  { id: "squad-busters", name: "Squad Busters", category: "Entertainment" },
```

Retail:
```typescript
  { id: "amazon", name: "Amazon", category: "Retail", url: "https://amazon.com.br" },
  { id: "stockx", name: "StockX", category: "Retail", url: "https://stockx.com/" },
```

Delivery:
```typescript
  { id: "daki", name: "Daki", category: "Delivery", url: "https://daki.com.br" },
```

Development:
```typescript
  { id: "snowflake", name: "Snowflake", category: "Development", url: "https://snowflake.com" },
```

Utilities (nova categoria):
```typescript
  // Utilities
  { id: "net-claro-wifi", name: "Net-Claro Wi-Fi", category: "Utilities" },
```

**Passo 3 - Adicionar pessoas:**
```typescript
  { id: "victor", name: "Victor" },
  { id: "caco", name: "Caco" },
```

**Passo 4 - Adicionar menções** (inserir antes do Episode 45):
```typescript
  // Episode 43
  { id: "m43-1", episodeId: 43, personId: "arthur", productId: "amazon" },
  { id: "m43-2", episodeId: 43, personId: "arthur", productId: "stockx" },
  { id: "m43-3", episodeId: 43, personId: "aiquis", productId: "twitter" },
  { id: "m43-4", episodeId: 43, personId: "aiquis", productId: "telegram" },
  { id: "m43-5", episodeId: 43, personId: "karina", productId: "bblend" },
  { id: "m43-6", episodeId: 43, personId: "andrezao", productId: "azul-jogo" },
  { id: "m43-7", episodeId: 43, personId: "andrezinho", productId: "crunchyroll" },
  { id: "m43-8", episodeId: 43, personId: "lucas", productId: "snowflake" },
  { id: "m43-9", episodeId: 43, personId: "glauco", productId: "vivino" },
  { id: "m43-10", episodeId: 43, personId: "nana", productId: "strava" },
  { id: "m43-11", episodeId: 43, personId: "victor", productId: "squad-busters" },
  { id: "m43-12", episodeId: 43, personId: "caco", productId: "daki" },
  { id: "m43-13", episodeId: 43, personId: "pilon", productId: "net-claro-wifi" },
```

---

### Resumo de Alterações

| Item | Quantidade |
|------|------------|
| Episódio | 1 |
| Pessoas novas | 2 |
| Produtos novos | 9 |
| Menções | 13 |

### Notas
- BBlend já existe no sistema, reutilizando o produto existente
- "Azul" é um jogo de tabuleiro, diferente da companhia aérea Azul
- Snowflake (plataforma de dados) é diferente de "Cereal Snowflake" já existente
- Arthur e Aíquis mencionam 2 produtos cada

