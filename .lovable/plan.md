
## Plano: Adicionar Episódio 46 (O presente e o futuro dos produtos de AI)

### Visão Geral
Adicionar o episódio 46 com 12 menções de produtos.

---

### Novos Dados a Adicionar

**1 Episódio:**
| ID | Título | Data |
|----|--------|------|
| 46 | O presente e o futuro dos produtos de AI e Existe um mundo além das squads? | 2024-08-14 |

**2 Novas Pessoas:**
| ID | Nome | Observação |
|----|------|------------|
| `lucas-ep46` | Lucas (outro) | Distinguir do Lucas já existente |
| `neuri` | Neuri | Nova pessoa |

**9 Novos Produtos:**
| ID | Nome | Categoria | URL | Observação |
|----|------|-----------|-----|------------|
| `wine` | Wine | Retail | https://www.wine.com.br/ | Clube de vinhos |
| `figma-slides` | Figma Slides | Productivity | - | Variante do Figma (parentId: figma) |
| `nespresso` | Nespresso | Hardware | https://www.nespresso.com/br/ | Máquinas de café |
| `nok-nox` | Nok Nox | Entertainment | https://noknox.com | - |
| `youtube-premium` | Youtube Premium | Entertainment | - | Variante do Youtube (parentId: youtube) |
| `abastece-ai` | Abastece Aí | Finance | - | App de combustível |
| `kling-ai` | KlingAI | AI Tools | https://klingai.com | Ferramenta de AI para vídeos |
| `ingresso-com` | Ingresso.com | Entertainment | https://www.ingresso.com/ | - |
| `porto-seguro` | Porto Seguro | Insurance | https://www.portoseguro.com.br/ | Renomear produto existente |

**Nota sobre Porto Seguro:** O produto existente é `porto-seguro` com nome "Porto Seguro Chatbot". Precisamos renomear para "Porto Seguro" para ficar genérico, pois a menção do ep 46 é sobre a empresa em geral.

**12 Novas Menções:**
| Pessoa | Produto |
|--------|---------|
| Arthur | Liti |
| Aíquis | Wine |
| Cloves | Figma Slides |
| Danilera | Porto Seguro |
| Glauco | Nespresso |
| Karina | Nok Nox |
| Brian | Youtube Premium |
| Lucas | Abastece Aí |
| Lucas (outro) | KlingAI |
| Cauê | Ingresso.com |
| Pilon | Strava |
| Neuri | Strava |

---

### Arquivo a Modificar
`src/data/mentions.ts`

---

### Detalhes Técnicos

**Passo 1 - Adicionar episódio** (inserir antes do episódio 47, ~linha 38):
```typescript
  {
    id: 46,
    title: "O presente e o futuro dos produtos de AI e Existe um mundo além das squads?",
    date: "2024-08-14",
    description: "Discussão sobre o presente e futuro dos produtos de inteligência artificial e reflexões sobre estruturas organizacionais.",
  },
```

**Passo 2 - Renomear produto existente** (~linha 808):
```typescript
// ANTES
{ id: "porto-seguro", name: "Porto Seguro Chatbot", category: "Insurance" },

// DEPOIS
{ id: "porto-seguro", name: "Porto Seguro", category: "Insurance", url: "https://www.portoseguro.com.br/" },
```

**Passo 3 - Adicionar produtos novos** (nas seções apropriadas):

Productivity (~linha 617, após figma-make):
```typescript
  { id: "figma-slides", name: "Figma Slides", category: "Productivity", parentId: "figma" },
```

Entertainment (~linha 672, após youtube):
```typescript
  { id: "youtube-premium", name: "Youtube Premium", category: "Entertainment", parentId: "youtube" },
  { id: "nok-nox", name: "Nok Nox", category: "Entertainment", url: "https://noknox.com" },
  { id: "ingresso-com", name: "Ingresso.com", category: "Entertainment", url: "https://www.ingresso.com/" },
```

AI Tools (~linha 400):
```typescript
  { id: "kling-ai", name: "KlingAI", category: "AI Tools", url: "https://klingai.com" },
```

Hardware (~linha 780):
```typescript
  { id: "nespresso", name: "Nespresso", category: "Hardware", url: "https://www.nespresso.com/br/" },
```

Retail (~linha 790):
```typescript
  { id: "wine", name: "Wine", category: "Retail", url: "https://www.wine.com.br/" },
```

Finance (~linha 545):
```typescript
  { id: "abastece-ai", name: "Abastece Aí", category: "Finance" },
```

**Passo 4 - Adicionar pessoas** (~linha 1055):
```typescript
  { id: "lucas-ep46", name: "Lucas (outro)" },
  { id: "neuri", name: "Neuri" },
```

**Passo 5 - Adicionar menções** (inserir antes do Episode 47):
```typescript
  // Episode 46
  { id: "m46-1", episodeId: 46, personId: "arthur", productId: "liti" },
  { id: "m46-2", episodeId: 46, personId: "aiquis", productId: "wine" },
  { id: "m46-3", episodeId: 46, personId: "cloves", productId: "figma-slides" },
  { id: "m46-4", episodeId: 46, personId: "danilera", productId: "porto-seguro" },
  { id: "m46-5", episodeId: 46, personId: "glauco", productId: "nespresso" },
  { id: "m46-6", episodeId: 46, personId: "karina", productId: "nok-nox" },
  { id: "m46-7", episodeId: 46, personId: "brian", productId: "youtube-premium" },
  { id: "m46-8", episodeId: 46, personId: "lucas", productId: "abastece-ai" },
  { id: "m46-9", episodeId: 46, personId: "lucas-ep46", productId: "kling-ai" },
  { id: "m46-10", episodeId: 46, personId: "caue", productId: "ingresso-com" },
  { id: "m46-11", episodeId: 46, personId: "pilon", productId: "strava" },
  { id: "m46-12", episodeId: 46, personId: "neuri", productId: "strava" },
```

---

### Resumo de Alterações

| Item | Quantidade |
|------|------------|
| Episódio | 1 |
| Pessoas novas | 2 |
| Produtos novos | 8 |
| Produto renomeado | 1 |
| Menções | 12 |
