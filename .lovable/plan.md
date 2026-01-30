

## Plano: Adicionar Episódio 23 (PMs precisam postar na Linkedisney pra ter sucesso?)

### Visão Geral
Adicionar o episódio 23 com 12 menções de produtos. Este será o novo episódio mais antigo do dataset (antes do episódio 24).

---

### Análise de Dados

**Produtos existentes:**
| ID | Nome | Categoria |
|----|------|-----------|
| `loom` | Loom | Productivity |
| `miro` | Miro | Productivity |
| `linkedin` | LinkedIn | Social |
| `samsung-health` | Samsung Health | Fitness |

**Produtos a criar:**
| ID | Nome | Categoria | URL | Observação |
|----|------|-----------|-----|------------|
| `rise-sleep` | Rise Sleep | Health | https://www.risescience.com/ | App de sono |
| `planta` | Planta | Lifestyle | - | App de cuidados com plantas |
| `clickbus` | ClickBus | Travel | - | Passagens de ônibus |
| `google-agenda` | Google Agenda | Productivity | https://calendar.google.com | Variante do Google Docs |
| `delboni` | Delboni Auriemo | Wellness | https://delboniauriemo.com.br/ | Laboratório de exames |
| `delboni-chat` | Chat do Delboni | Wellness | https://delboniauriemo.com.br/ | Variante do Delboni |
| `grab` | Grab | Transportation | https://www.grab.com/ | Super app asiático |
| `ynab` | YNAB | Finance | https://www.ynab.com/ | App de orçamento pessoal |
| `salesforce` | Salesforce | Business | https://www.salesforce.com/ | CRM |

**Pessoas existentes:**
| ID | Nome |
|----|------|
| `aiquis` | Aíquis |
| `arthur` | Arthur |
| `agata-cristina` | Ágata Cristina |
| `pilon` | Pilon |
| `montoya` | Montoya |
| `cesar` | César |
| `bruno` | Bruno |

**Pessoas a criar:**
| ID | Nome |
|----|------|
| `regis` | Régis |
| `gabi-braga` | Gabi Braga |
| `adriana-barros` | Adriana Barros |
| `michele-morais` | Michele Morais |
| `martin` | Martin |

---

### Arquivo a Modificar
`src/data/mentions.ts`

---

### Detalhes Técnicos

**Passo 1 - Adicionar episódio** (inserir antes do episódio 24, início da lista):
```typescript
  {
    id: 23,
    title: "PMs precisam postar na Linkedisney pra ter sucesso?",
    date: "2024-01-24",
    description: "Discussão sobre a presença de Product Managers no LinkedIn e se isso é necessário para o sucesso na carreira.",
  },
```

**Passo 2 - Adicionar produtos novos:**

Health:
```typescript
  { id: "rise-sleep", name: "Rise Sleep", category: "Health", url: "https://www.risescience.com/" },
```

Lifestyle:
```typescript
  { id: "planta", name: "Planta", category: "Lifestyle" },
```

Travel:
```typescript
  { id: "clickbus", name: "ClickBus", category: "Travel" },
```

Productivity (variante do Google Docs):
```typescript
  { id: "google-agenda", name: "Google Agenda", category: "Productivity", url: "https://calendar.google.com", parentId: "google-docs" },
```

Wellness:
```typescript
  { id: "delboni", name: "Delboni Auriemo", category: "Wellness", url: "https://delboniauriemo.com.br/" },
  { id: "delboni-chat", name: "Chat do Delboni", category: "Wellness", url: "https://delboniauriemo.com.br/", parentId: "delboni" },
```

Transportation:
```typescript
  { id: "grab", name: "Grab", category: "Transportation", url: "https://www.grab.com/" },
```

Finance:
```typescript
  { id: "ynab", name: "YNAB", category: "Finance", url: "https://www.ynab.com/" },
```

Business:
```typescript
  { id: "salesforce", name: "Salesforce", category: "Business", url: "https://www.salesforce.com/" },
```

**Passo 3 - Adicionar pessoas:**
```typescript
  // Episode 23 contributors
  { id: "regis", name: "Régis" },
  { id: "gabi-braga", name: "Gabi Braga" },
  { id: "adriana-barros", name: "Adriana Barros" },
  { id: "michele-morais", name: "Michele Morais" },
  { id: "martin", name: "Martin" },
```

**Passo 4 - Adicionar menções** (inserir antes do Episode 24):
```typescript
  // Episode 23
  { id: "m23-1", episodeId: 23, personId: "aiquis", productId: "loom" },
  { id: "m23-2", episodeId: 23, personId: "arthur", productId: "rise-sleep" },
  { id: "m23-3", episodeId: 23, personId: "regis", productId: "planta" },
  { id: "m23-4", episodeId: 23, personId: "gabi-braga", productId: "clickbus" },
  { id: "m23-5", episodeId: 23, personId: "agata-cristina", productId: "google-agenda" },
  { id: "m23-6", episodeId: 23, personId: "adriana-barros", productId: "linkedin", context: "ouvir o nome da pessoa" },
  { id: "m23-7", episodeId: 23, personId: "michele-morais", productId: "miro" },
  { id: "m23-8", episodeId: 23, personId: "pilon", productId: "delboni-chat" },
  { id: "m23-9", episodeId: 23, personId: "martin", productId: "grab" },
  { id: "m23-10", episodeId: 23, personId: "bruno", productId: "ynab" },
  { id: "m23-11", episodeId: 23, personId: "montoya", productId: "samsung-health" },
  { id: "m23-12", episodeId: 23, personId: "cesar", productId: "salesforce" },
```

---

### Resumo de Alterações

| Item | Quantidade |
|------|------------|
| Episódio | 1 |
| Pessoas novas | 5 |
| Produtos novos | 9 |
| Menções | 12 |

### Notas
- Loom, Miro, LinkedIn e Samsung Health já existem e serão reutilizados
- Google Agenda é tratado como variante do Google Docs (usando `parentId`) para agregar estatísticas
- Chat do Delboni é variante do Delboni principal
- Rise Sleep é o app de sono (categoria Health)
- Grab é o super app asiático (categoria Transportation, similar ao Uber)
- YNAB (You Need A Budget) é app de finanças pessoais
- Salesforce é CRM (categoria Business)
- A menção de Adriana Barros ao LinkedIn inclui context "ouvir o nome da pessoa"

