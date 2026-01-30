

## Plano: Adicionar Episódio 28 (A métrica de sucesso para Product Leaders e já imaginou a internet sem ads?)

### Visão Geral
Adicionar o episódio 28 com 6 menções de produtos. Este será o novo episódio mais antigo do dataset (antes do episódio 29).

---

### Análise de Dados

**Produtos existentes:**
Nenhum dos produtos listados existe no sistema.

**Produtos a criar:**
| ID | Nome | Categoria | URL | Observação |
|----|------|-----------|-----|------------|
| `corsair-hs80-wireless` | Corsair HS80 Wireless | Hardware | - | Headset gamer wireless |
| `daylio` | Daylio | Health | https://daylio.net/ | App de diário de humor e bem-estar |
| `swingvision` | SwingVision | Fitness | https://swing.vision/ | App de análise de tênis/esportes de raquete |
| `expo-go` | ExpoGo | Development | https://expo.dev/go | App para desenvolvimento React Native |
| `feedly` | Feedly | Productivity | https://feedly.com/ | Agregador de notícias/RSS |
| `wolfram` | Wolfram | AI Tools | https://www.wolframalpha.com/ | Motor de conhecimento computacional |

**Pessoas existentes:**
| ID | Nome |
|----|------|
| `aiquis` | Aíquis |
| `arthur` | Arthur |
| `eduardo-augusto` | Eduardo Augusto |
| `alice` | Alice |
| `glauco` | Glauco |

**Pessoas a criar:**
| ID | Nome | Observação |
|----|------|------------|
| `lucas-matos` | Lucas Matos | Diferente de "lucas" existente |

---

### Novos Dados a Adicionar

**1 Episódio:**
| ID | Título | Data |
|----|--------|------|
| 28 | A métrica de sucesso para Product Leaders e já imaginou a internet sem ads? | 2024-03-07 |

**1 Nova Pessoa:**
| ID | Nome |
|----|------|
| `lucas-matos` | Lucas Matos |

**6 Novos Produtos:**
| ID | Nome | Categoria | URL |
|----|------|-----------|-----|
| `corsair-hs80-wireless` | Corsair HS80 Wireless | Hardware | - |
| `daylio` | Daylio | Health | https://daylio.net/ |
| `swingvision` | SwingVision | Fitness | https://swing.vision/ |
| `expo-go` | ExpoGo | Development | https://expo.dev/go |
| `feedly` | Feedly | Productivity | https://feedly.com/ |
| `wolfram` | Wolfram | AI Tools | https://www.wolframalpha.com/ |

**6 Menções:**
| Pessoa | Produto |
|--------|---------|
| Aíquis | Corsair HS80 Wireless |
| Arthur | Daylio |
| Lucas Matos | SwingVision |
| Eduardo Augusto | ExpoGo |
| Alice | Feedly |
| Glauco | Wolfram |

---

### Arquivo a Modificar
`src/data/mentions.ts`

---

### Detalhes Técnicos

**Passo 1 - Adicionar episódio** (inserir antes do episódio 29, início da lista):
```typescript
  {
    id: 28,
    title: "A métrica de sucesso para Product Leaders e já imaginou a internet sem ads?",
    date: "2024-03-07",
    description: "Discussão sobre métricas de sucesso para líderes de produto e uma reflexão sobre uma internet sem anúncios.",
  },
```

**Passo 2 - Adicionar produtos novos:**

Hardware:
```typescript
  { id: "corsair-hs80-wireless", name: "Corsair HS80 Wireless", category: "Hardware" },
```

Health:
```typescript
  { id: "daylio", name: "Daylio", category: "Health", url: "https://daylio.net/" },
```

Fitness:
```typescript
  { id: "swingvision", name: "SwingVision", category: "Fitness", url: "https://swing.vision/" },
```

Development:
```typescript
  { id: "expo-go", name: "ExpoGo", category: "Development", url: "https://expo.dev/go" },
```

Productivity:
```typescript
  { id: "feedly", name: "Feedly", category: "Productivity", url: "https://feedly.com/" },
```

AI Tools:
```typescript
  { id: "wolfram", name: "Wolfram", category: "AI Tools", url: "https://www.wolframalpha.com/" },
```

**Passo 3 - Adicionar pessoa:**
```typescript
  // Episode 28 contributor
  { id: "lucas-matos", name: "Lucas Matos" },
```

**Passo 4 - Adicionar menções** (inserir antes do Episode 29):
```typescript
  // Episode 28
  { id: "m28-1", episodeId: 28, personId: "aiquis", productId: "corsair-hs80-wireless" },
  { id: "m28-2", episodeId: 28, personId: "arthur", productId: "daylio" },
  { id: "m28-3", episodeId: 28, personId: "lucas-matos", productId: "swingvision" },
  { id: "m28-4", episodeId: 28, personId: "eduardo-augusto", productId: "expo-go" },
  { id: "m28-5", episodeId: 28, personId: "alice", productId: "feedly" },
  { id: "m28-6", episodeId: 28, personId: "glauco", productId: "wolfram" },
```

---

### Resumo de Alterações

| Item | Quantidade |
|------|------------|
| Episódio | 1 |
| Pessoas novas | 1 |
| Produtos novos | 6 |
| Menções | 6 |

### Notas
- Corsair HS80 Wireless é um headset gamer wireless premium
- Daylio é um app de micro-diário para rastrear humor e hábitos
- SwingVision usa IA para analisar jogadas de tênis e padel
- ExpoGo é o app companion para desenvolvimento com Expo/React Native
- Feedly é um agregador de feeds RSS popular entre profissionais de produto
- Wolfram Alpha é um motor de conhecimento computacional, classificado como AI Tools
- "Lucas Matos" será criado com ID `lucas-matos` para distinguir do "lucas" genérico existente
- "Alice" reutiliza o ID `alice` existente (ep 64)
- "Eduardo Augusto" reutiliza o ID `eduardo-augusto` existente (ep 34)

