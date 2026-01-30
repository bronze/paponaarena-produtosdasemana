

## Plano: Adicionar Episódio 39 (Opiniões fortes, convição e hype)

### Visao Geral
Adicionar o episodio 39 com 13 mencoes de produtos. Este sera o episodio mais antigo do dataset.

---

### Analise de Dados

**Produtos existentes:**
| ID | Nome |
|----|------|
| `spotify` | Spotify |
| `waze` | Waze |
| `youtube-premium` | Youtube Premium |
| `netflix` | Netflix |
| `nespresso` | Nespresso |
| `power-automate` | Power Automate |
| `dasa` | Dasa |

**Pessoas existentes:**
| ID | Nome |
|----|------|
| `aiquis` | Aiquis |
| `arthur` | Arthur |
| `danilera` | Danilera |
| `lucao` | Lucao |
| `neuri` | Neuri |
| `miriam` | Miriam |
| `karina` | Karina |
| `caue` | Caue |
| `glauco` | Glauco |
| `welington-souza` | Welington Souza |
| `boss` | Boss |
| `luquita` | Luquita |
| `andrezinho` | Andrezinho |

---

### Novos Dados a Adicionar

**1 Episodio:**
| ID | Titulo | Data |
|----|--------|------|
| 39 | Opinioes fortes, convicao e hype na construcao de produtos | 2024-06-04 |

**7 Novos Produtos:**
| ID | Nome | Categoria | URL | Observacao |
|----|------|-----------|-----|------------|
| `stoop-inbox` | Stoop Inbox | Productivity | - | App de newsletters |
| `sauna-portatil-lifepro` | Sauna Portatil Lifepro | Hardware | - | Equipamento de sauna portatil |
| `mobills` | Mobills | Finance | https://mobills.com.br | App de financas pessoais |
| `nav-dasa` | Nav Dasa | Wellness | - | Variante da Dasa com parentId |
| `webdiet` | WebDiet | Lifestyle | - | App de dieta |
| `netflix-skip-intro` | Netflix Skip Intro | Entertainment | - | Variante do Netflix com parentId |
| `youtube-download-inteligente` | Download inteligente do Youtube Premium | Entertainment | - | Variante do Youtube Premium com parentId |
| `pocket` | Pocket | Productivity | https://getpocket.com | App de leitura |
| `capacities` | Capacities | Productivity | https://capacities.io | App de notas |

**13 Mencoes:**
| Pessoa | Produto |
|--------|---------|
| Aiquis | Stoop Inbox |
| Arthur | Sauna Portatil Lifepro |
| Danilera | Mobills |
| Lucao | Nav Dasa |
| Neuri | WebDiet |
| Miriam | Netflix Skip Intro |
| Karina | Waze |
| Caue | Download inteligente do Youtube Premium |
| Glauco | Nespresso |
| Welington | Pocket |
| Boss | Capacities |
| Luquita | Power Automate |
| Andrezinho | Spotify |

**Nota sobre Welington:** Ja existe `welington-souza` no sistema. Verificar se e a mesma pessoa (provavelmente sim).

---

### Arquivo a Modificar
`src/data/mentions.ts`

---

### Detalhes Tecnicos

**Passo 1 - Adicionar episodio** (inserir antes do episodio 41, inicio da lista de episodios 2024):
```typescript
  {
    id: 39,
    title: "Opinioes fortes, conviccao e hype na construcao de produtos",
    date: "2024-06-04",
    description: "Discussao sobre opinioes fortes, conviccao e hype no processo de construcao de produtos.",
  },
```

**Passo 2 - Adicionar produtos novos:**

Productivity:
```typescript
  { id: "stoop-inbox", name: "Stoop Inbox", category: "Productivity" },
  { id: "pocket", name: "Pocket", category: "Productivity", url: "https://getpocket.com" },
  { id: "capacities", name: "Capacities", category: "Productivity", url: "https://capacities.io" },
```

Hardware:
```typescript
  { id: "sauna-portatil-lifepro", name: "Sauna Portatil Lifepro", category: "Hardware" },
```

Finance:
```typescript
  { id: "mobills", name: "Mobills", category: "Finance", url: "https://mobills.com.br" },
```

Wellness (variante da Dasa):
```typescript
  { id: "nav-dasa", name: "Nav Dasa", category: "Wellness", parentId: "dasa" },
```

Lifestyle:
```typescript
  { id: "webdiet", name: "WebDiet", category: "Lifestyle" },
```

Entertainment (variantes):
```typescript
  { id: "netflix-skip-intro", name: "Netflix Skip Intro", category: "Entertainment", parentId: "netflix" },
  { id: "youtube-download-inteligente", name: "Download inteligente do Youtube Premium", category: "Entertainment", parentId: "youtube-premium" },
```

**Passo 3 - Adicionar mencoes** (inserir antes do Episode 41):
```typescript
  // Episode 39
  { id: "m39-1", episodeId: 39, personId: "aiquis", productId: "stoop-inbox" },
  { id: "m39-2", episodeId: 39, personId: "arthur", productId: "sauna-portatil-lifepro" },
  { id: "m39-3", episodeId: 39, personId: "danilera", productId: "mobills" },
  { id: "m39-4", episodeId: 39, personId: "lucao", productId: "nav-dasa" },
  { id: "m39-5", episodeId: 39, personId: "neuri", productId: "webdiet" },
  { id: "m39-6", episodeId: 39, personId: "miriam", productId: "netflix-skip-intro" },
  { id: "m39-7", episodeId: 39, personId: "karina", productId: "waze" },
  { id: "m39-8", episodeId: 39, personId: "caue", productId: "youtube-download-inteligente" },
  { id: "m39-9", episodeId: 39, personId: "glauco", productId: "nespresso" },
  { id: "m39-10", episodeId: 39, personId: "welington-souza", productId: "pocket" },
  { id: "m39-11", episodeId: 39, personId: "boss", productId: "capacities" },
  { id: "m39-12", episodeId: 39, personId: "luquita", productId: "power-automate" },
  { id: "m39-13", episodeId: 39, personId: "andrezinho", productId: "spotify" },
```

---

### Resumo de Alteracoes

| Item | Quantidade |
|------|------------|
| Episodio | 1 |
| Pessoas novas | 0 |
| Produtos novos | 9 |
| Mencoes | 13 |

### Notas
- Todas as pessoas ja existem no sistema
- "Welington" mapeado para `welington-souza` existente
- Nav Dasa e uma variante da Dasa com `parentId: "dasa"`
- Netflix Skip Intro e uma variante com `parentId: "netflix"`
- Download inteligente do Youtube Premium e uma variante com `parentId: "youtube-premium"`
- Nespresso, Waze, Power Automate e Spotify ja existem no sistema e serao reutilizados

