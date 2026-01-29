

## Plano: Adicionar Episódio 48 (Design Engineer - Essa moda vai pegar?)

### Visão Geral
Adicionar o episódio 48 com 14 menções de produtos.

---

### Novos Dados a Adicionar

**1 Episódio:**
| ID | Título | Data |
|----|--------|------|
| 48 | Design Engineer - Essa moda vai pegar? | 2024-08-28 |

**1 Nova Pessoa:**
| ID | Nome |
|----|------|
| `luquita` | Luquita |

**9 Novos Produtos:**
| ID | Nome | Categoria | URL |
|----|------|-----------|-----|
| `clarotv-plus` | ClaroTV+ | Entertainment | - |
| `baby-tracker` | Baby Tracker | Lifestyle | - |
| `apple-weather` | Apple Weather | Productivity | - |
| `my-baby` | My Baby | Lifestyle | - |
| `reserva-ink` | Reserva.Ink | Entertainment | https://reservaink.com.br/ |
| `revolut` | Revolut | Finance | https://www.revolut.com/ |
| `meu-dinheiro-web` | Meu Dinheiro Web | Finance | https://www.meudinheiroweb.com.br/ |
| `musixmatch` | Musixmatch | Entertainment | https://www.musixmatch.com/ |
| `bandcamp` | Bandcamp | Entertainment | https://bandcamp.com/ |

**14 Novas Menções:**
| Pessoa | Produto |
|--------|---------|
| Aíquis | ClaroTV+ |
| Arthur | Alexa |
| Mateus | Baby Tracker |
| Luquita | Liti |
| Nana | Apple Weather |
| Marcos Lavin | My Baby |
| Michelli Chagas | Trainiac |
| Andrezão | Mercado Livre |
| Karina | Mercado Livre |
| Cauê | Reserva.Ink |
| Alana | Revolut |
| Pri Chagas | Meu Dinheiro Web |
| Lucas | Musixmatch |
| Cloves | Bandcamp |

---

### Arquivo a Modificar
`src/data/mentions.ts`

---

### Detalhes Técnicos

**Passo 1 - Adicionar episódio** (inserir antes do episódio 49, ~linha 38):
```typescript
  {
    id: 48,
    title: "Design Engineer - Essa moda vai pegar?",
    date: "2024-08-28",
    description: "Discussão sobre a tendência de Design Engineers e as ferramentas da semana.",
  },
```

**Passo 2 - Adicionar produtos** (seções apropriadas):

Na seção Entertainment (~linha 373):
```typescript
  { id: "clarotv-plus", name: "ClaroTV+", category: "Entertainment" },
  { id: "reserva-ink", name: "Reserva.Ink", category: "Entertainment", url: "https://reservaink.com.br/" },
  { id: "musixmatch", name: "Musixmatch", category: "Entertainment", url: "https://www.musixmatch.com/" },
  { id: "bandcamp", name: "Bandcamp", category: "Entertainment", url: "https://bandcamp.com/" },
```

Na seção Lifestyle:
```typescript
  { id: "baby-tracker", name: "Baby Tracker", category: "Lifestyle" },
  { id: "my-baby", name: "My Baby", category: "Lifestyle" },
```

Na seção Productivity:
```typescript
  { id: "apple-weather", name: "Apple Weather", category: "Productivity" },
```

Na seção Finance:
```typescript
  { id: "revolut", name: "Revolut", category: "Finance", url: "https://www.revolut.com/" },
  { id: "meu-dinheiro-web", name: "Meu Dinheiro Web", category: "Finance", url: "https://www.meudinheiroweb.com.br/" },
```

**Passo 3 - Adicionar pessoa** (~linha 1055):
```typescript
  { id: "luquita", name: "Luquita" },
```

**Passo 4 - Adicionar menções** (inserir antes do Episode 49, ~linha 1060):
```typescript
  // Episode 48
  { id: "m48-1", episodeId: 48, personId: "aiquis", productId: "clarotv-plus" },
  { id: "m48-2", episodeId: 48, personId: "arthur", productId: "alexa" },
  { id: "m48-3", episodeId: 48, personId: "mateus", productId: "baby-tracker" },
  { id: "m48-4", episodeId: 48, personId: "luquita", productId: "liti" },
  { id: "m48-5", episodeId: 48, personId: "nana", productId: "apple-weather" },
  { id: "m48-6", episodeId: 48, personId: "marcos-lavin", productId: "my-baby" },
  { id: "m48-7", episodeId: 48, personId: "michelli-chagas", productId: "trainiac" },
  { id: "m48-8", episodeId: 48, personId: "andrezao", productId: "mercado-livre" },
  { id: "m48-9", episodeId: 48, personId: "karina", productId: "mercado-livre" },
  { id: "m48-10", episodeId: 48, personId: "caue", productId: "reserva-ink" },
  { id: "m48-11", episodeId: 48, personId: "alana", productId: "revolut" },
  { id: "m48-12", episodeId: 48, personId: "pri-chagas", productId: "meu-dinheiro-web" },
  { id: "m48-13", episodeId: 48, personId: "lucas", productId: "musixmatch" },
  { id: "m48-14", episodeId: 48, personId: "cloves", productId: "bandcamp" },
```

---

### Resumo de Alterações

| Item | Quantidade |
|------|------------|
| Episódio | 1 |
| Pessoa nova | 1 |
| Produtos novos | 9 |
| Menções | 14 |

