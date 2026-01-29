

## Plano: Adicionar Episódio 47 (Nossas técnicas de produtividade)

### Visão Geral
Adicionar o episódio 47 com 14 menções de produtos.

---

### Novos Dados a Adicionar

**1 Episódio:**
| ID | Título | Data |
|----|--------|------|
| 47 | Nossas técnicas de produtividade (sem ligação com AI) | 2024-08-21 |

**3 Novas Pessoas:**
| ID | Nome |
|----|------|
| `andressa-carbone` | Andressa Carbone |
| `pedro-moreno` | Pedro Moreno |
| `dani` | Dani |

**11 Novos Produtos:**
| ID | Nome | Categoria | URL |
|----|------|-----------|-----|
| `joker-card` | Joker Card | Entertainment | https://apps.apple.com/br/app/joker-card/id6480343238 |
| `ring` | Ring | Hardware | https://ring.com |
| `shopee` | Shopee | Retail | https://shopee.com.br |
| `cabana-burger` | Cabana Burger | Delivery | https://cabanaburger.com.br/ |
| `child-growth` | Child Growth | Lifestyle | - |
| `microsoft-teams` | Microsoft Teams | Productivity | https://teams.microsoft.com |
| `khan-academy` | Khan Academy | Education | https://khanacademy.org |
| `cafu` | Cafu | Delivery | https://www.cafu.com/ |
| `desrotulando` | Desrotulando | Lifestyle | https://desrotulando.com |
| `wechat` | WeChat | Social | https://www.wechat.com |
| `powerbeats-pro` | PowerBeats Pro | Hardware | - |

**14 Novas Menções:**
| Pessoa | Produto |
|--------|---------|
| Aíquis | Joker Card |
| Arthur | Ring |
| Karina | Shopee |
| Maria | Cabana Burger |
| Andressa Carbone | Mercado Livre |
| Marcos Lavin | Child Growth |
| Pedro Moreno | Microsoft Teams |
| Alana | Khan Academy |
| Thiago Oliveira | Cafu |
| Pri Chagas | TL;DV |
| Dani | Desrotulando |
| Glauco | WeChat |
| Marina Fernandes | PowerBeats Pro |
| Carol Cardoso | WhatsApp |

---

### Arquivo a Modificar
`src/data/mentions.ts`

---

### Detalhes Técnicos

**Passo 1 - Adicionar episódio** (inserir antes do episódio 48, ~linha 38):
```typescript
  {
    id: 47,
    title: "Nossas técnicas de produtividade (sem ligação com AI)",
    date: "2024-08-21",
    description: "Discussão sobre técnicas de produtividade sem o uso de inteligência artificial.",
  },
```

**Passo 2 - Adicionar produtos** (nas seções apropriadas):

Entertainment (~linha 646):
```typescript
  { id: "joker-card", name: "Joker Card", category: "Entertainment", url: "https://apps.apple.com/br/app/joker-card/id6480343238" },
```

Hardware (~linha 760):
```typescript
  { id: "ring", name: "Ring", category: "Hardware", url: "https://ring.com" },
  { id: "powerbeats-pro", name: "PowerBeats Pro", category: "Hardware" },
```

Retail (~linha 785):
```typescript
  { id: "shopee", name: "Shopee", category: "Retail", url: "https://shopee.com.br" },
```

Delivery (~linha 775):
```typescript
  { id: "cabana-burger", name: "Cabana Burger", category: "Delivery", url: "https://cabanaburger.com.br/" },
  { id: "cafu", name: "Cafu", category: "Delivery", url: "https://www.cafu.com/" },
```

Lifestyle (~linha 750):
```typescript
  { id: "child-growth", name: "Child Growth", category: "Lifestyle" },
  { id: "desrotulando", name: "Desrotulando", category: "Lifestyle", url: "https://desrotulando.com" },
```

Productivity (~linha 600):
```typescript
  { id: "microsoft-teams", name: "Microsoft Teams", category: "Productivity", url: "https://teams.microsoft.com" },
```

Education (~linha 640):
```typescript
  { id: "khan-academy", name: "Khan Academy", category: "Education", url: "https://khanacademy.org" },
```

Social (~linha 574):
```typescript
  { id: "wechat", name: "WeChat", category: "Social", url: "https://www.wechat.com" },
```

**Passo 3 - Adicionar pessoas** (~linha 1072):
```typescript
  { id: "andressa-carbone", name: "Andressa Carbone" },
  { id: "pedro-moreno", name: "Pedro Moreno" },
  { id: "dani", name: "Dani" },
```

**Passo 4 - Adicionar menções** (inserir antes do Episode 48, ~linha 1077):
```typescript
  // Episode 47
  { id: "m47-1", episodeId: 47, personId: "aiquis", productId: "joker-card" },
  { id: "m47-2", episodeId: 47, personId: "arthur", productId: "ring" },
  { id: "m47-3", episodeId: 47, personId: "karina", productId: "shopee" },
  { id: "m47-4", episodeId: 47, personId: "maria", productId: "cabana-burger" },
  { id: "m47-5", episodeId: 47, personId: "andressa-carbone", productId: "mercado-livre" },
  { id: "m47-6", episodeId: 47, personId: "marcos-lavin", productId: "child-growth" },
  { id: "m47-7", episodeId: 47, personId: "pedro-moreno", productId: "microsoft-teams" },
  { id: "m47-8", episodeId: 47, personId: "alana", productId: "khan-academy" },
  { id: "m47-9", episodeId: 47, personId: "thiago-oliveira", productId: "cafu" },
  { id: "m47-10", episodeId: 47, personId: "pri-chagas", productId: "tldv" },
  { id: "m47-11", episodeId: 47, personId: "dani", productId: "desrotulando" },
  { id: "m47-12", episodeId: 47, personId: "glauco", productId: "wechat" },
  { id: "m47-13", episodeId: 47, personId: "marina-fernandes", productId: "powerbeats-pro" },
  { id: "m47-14", episodeId: 47, personId: "carol-cardoso", productId: "whatsapp" },
```

---

### Resumo de Alterações

| Item | Quantidade |
|------|------------|
| Episódio | 1 |
| Pessoas novas | 3 |
| Produtos novos | 11 |
| Menções | 14 |

