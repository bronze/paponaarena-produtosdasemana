

## Plano: Adicionar Episódio 33 (O direito de se desconectar e quando microgerenciamento não é ruim)

### Visão Geral
Adicionar o episódio 33 com 14 menções de produtos. Este será o novo episódio mais antigo do dataset.

---

### Análise de Dados

**Produtos existentes:**
| ID | Nome | Categoria |
|----|------|-----------|
| `max` | MAX | Entertainment |
| `raindrop` | Raindrop | Productivity |
| `garmin-connect` | Garmin Connect | Fitness |
| `capcut` | CapCut | Tech |
| `yazio` | Yazio | Fitness |
| `whatsapp` | WhatsApp | Business |
| `nike` | Nike | Retail |

**Produtos a criar:**
| ID | Nome | Categoria | URL | Observação |
|----|------|-----------|-----|------------|
| `nike-alphafly` | Nike Alphafly | Fitness | - | Tênis de corrida, variante da Nike |
| `delta-emulador` | Delta | Entertainment | - | Emulador Nintendo no iOS |
| `chromecast` | Chromecast | Hardware | - | Dispositivo de streaming Google |
| `asana` | Asana | Productivity | https://asana.com | Ferramenta de gestão de projetos |
| `msc-for-me` | MSC for Me | Travel | - | App da MSC Cruzeiros |
| `google-scholar` | Google Scholar | Education | https://scholar.google.com | Buscador acadêmico |
| `maya` | Maya | Lifestyle | - | App de ciclo hormonal |

**Pessoas existentes:**
| ID | Nome |
|----|------|
| `arthur` | Arthur |
| `aiquis` | Aíquis |
| `andrezao` | Andrezão |
| `paulo` | Paulo |
| `miriam` | Miriam |
| `karina` | Karina |
| `danilera` | Danilera |
| `nina` | Nina |
| `caue` | Cauê |
| `beicola` | Beiçola |
| `lucas` | Lucas |
| `pilon` | Pilon |

**Pessoas a criar:**
| ID | Nome | Observação |
|----|------|------------|
| `teles` | Teles | Novo participante |
| `edu` | Edu | Diferente de eduardo, eduardo-odon, eduardo-augusto |

---

### Novos Dados a Adicionar

**1 Episódio:**
| ID | Título | Data |
|----|--------|------|
| 33 | O direito de se desconectar e quando microgerenciamento não é ruim | 2024-04-24 |

**2 Novas Pessoas:**
| ID | Nome |
|----|------|
| `teles` | Teles |
| `edu` | Edu |

**7 Novos Produtos:**
| ID | Nome | Categoria | URL |
|----|------|-----------|-----|
| `nike-alphafly` | Nike Alphafly | Fitness | - |
| `delta-emulador` | Delta | Entertainment | - |
| `chromecast` | Chromecast | Hardware | - |
| `asana` | Asana | Productivity | https://asana.com |
| `msc-for-me` | MSC for Me | Travel | - |
| `google-scholar` | Google Scholar | Education | https://scholar.google.com |
| `maya` | Maya | Lifestyle | - |

**14 Menções:**
| Pessoa | Produto |
|--------|---------|
| Arthur | Nike Alphafly |
| Aíquis | MAX |
| Andrezão | Delta (emulador) |
| Paulo | Raindrop |
| Miriam | Chromecast |
| Karina | Asana |
| Danilera | Garmin Connect |
| Teles | Garmin Connect |
| Edu | MSC for Me |
| Nina | WhatsApp |
| Cauê | CapCut |
| Beiçola | Yazio |
| Lucas | Google Scholar |
| Pilon | Maya |

---

### Arquivo a Modificar
`src/data/mentions.ts`

---

### Detalhes Técnicos

**Passo 1 - Adicionar episódio** (inserir antes do episódio 34, início da lista):
```typescript
  {
    id: 33,
    title: "O direito de se desconectar e quando microgerenciamento não é ruim",
    date: "2024-04-24",
    description: "Discussão sobre o direito de se desconectar do trabalho e quando o microgerenciamento pode ser benéfico.",
  },
```

**Passo 2 - Adicionar produtos novos:**

Fitness (variante da Nike):
```typescript
  { id: "nike-alphafly", name: "Nike Alphafly", category: "Fitness", parentId: "nike" },
```

Entertainment:
```typescript
  { id: "delta-emulador", name: "Delta", category: "Entertainment" },
```

Hardware:
```typescript
  { id: "chromecast", name: "Chromecast", category: "Hardware" },
```

Productivity:
```typescript
  { id: "asana", name: "Asana", category: "Productivity", url: "https://asana.com" },
```

Travel:
```typescript
  { id: "msc-for-me", name: "MSC for Me", category: "Travel" },
```

Education:
```typescript
  { id: "google-scholar", name: "Google Scholar", category: "Education", url: "https://scholar.google.com" },
```

Lifestyle:
```typescript
  { id: "maya", name: "Maya", category: "Lifestyle" },
```

**Passo 3 - Adicionar pessoas:**
```typescript
  // Episode 33 contributors
  { id: "teles", name: "Teles" },
  { id: "edu", name: "Edu" },
```

**Passo 4 - Adicionar menções** (inserir antes do Episode 34):
```typescript
  // Episode 33
  { id: "m33-1", episodeId: 33, personId: "arthur", productId: "nike-alphafly" },
  { id: "m33-2", episodeId: 33, personId: "aiquis", productId: "max" },
  { id: "m33-3", episodeId: 33, personId: "andrezao", productId: "delta-emulador" },
  { id: "m33-4", episodeId: 33, personId: "paulo", productId: "raindrop" },
  { id: "m33-5", episodeId: 33, personId: "miriam", productId: "chromecast" },
  { id: "m33-6", episodeId: 33, personId: "karina", productId: "asana" },
  { id: "m33-7", episodeId: 33, personId: "danilera", productId: "garmin-connect" },
  { id: "m33-8", episodeId: 33, personId: "teles", productId: "garmin-connect" },
  { id: "m33-9", episodeId: 33, personId: "edu", productId: "msc-for-me" },
  { id: "m33-10", episodeId: 33, personId: "nina", productId: "whatsapp" },
  { id: "m33-11", episodeId: 33, personId: "caue", productId: "capcut" },
  { id: "m33-12", episodeId: 33, personId: "beicola", productId: "yazio" },
  { id: "m33-13", episodeId: 33, personId: "lucas", productId: "google-scholar" },
  { id: "m33-14", episodeId: 33, personId: "pilon", productId: "maya" },
```

---

### Resumo de Alterações

| Item | Quantidade |
|------|------------|
| Episódio | 1 |
| Pessoas novas | 2 |
| Produtos novos | 7 |
| Menções | 14 |

### Notas
- MAX, Raindrop, Garmin Connect, CapCut, Yazio e WhatsApp já existem e serão reutilizados
- Nike Alphafly é uma variante da Nike (tênis de corrida), então terá `parentId: "nike"`
- Delta é o emulador de Nintendo lançado para iOS, diferente de outras referências a "Delta"
- Garmin Connect recebe 2 menções neste episódio (Danilera e Teles)
- Edu é diferente de Eduardo (ep. 41), Eduardo Odon e Eduardo Augusto (ep. 34)
- Maya é um app de ciclo hormonal, similar ao Clue já existente no sistema

