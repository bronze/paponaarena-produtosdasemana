

## Plano: Adicionar Episódio 49 e Menções

### Resumo

Adicionar o episódio 49 de setembro/2024 com o tema "Redesign problemático, roadmap público e queda das ações: O caso da Sonos" e suas 20 menções ao arquivo `src/data/mentions.ts`.

---

### Arquivo a Modificar

`src/data/mentions.ts`

---

### 1. Novo Episódio

| ID | Título | Data |
|----|--------|------|
| 49 | Redesign problemático, roadmap público e queda das ações: O caso da Sonos | 2024-09-04 |

---

### 2. Novos Produtos (12)

| ID | Nome | Categoria | URL |
|----|------|-----------|-----|
| threads | Threads | Social | https://www.threads.com/ |
| max-hbo | MAX | Entertainment | https://www.hbomax.com/ |
| aiqfome | Aiqfome | Delivery | https://www.aiqfome.com/ |
| apple-watch | Apple Watch | Hardware | - |
| adidas-running | Adidas Running | Fitness | - |
| deezer | Deezer | Entertainment | https://www.deezer.com/ |
| sketchbook | Sketchbook | Productivity | https://www.sketchbook.com/ |
| bioritmo | Bioritmo | Fitness | https://www.bioritmo.com.br/ |
| broadlink | Broadlink | Hardware | - |
| nordvpn | NordVPN | Productivity | https://nordvpn.com/ |
| stickerly | Sticker.ly | Entertainment | https://sticker.ly/ |
| offramp | Offramp | Finance | https://www.offramp.xyz/ |

**Produtos já existentes (reutilizar):**
- `twitter` (Social) - "X (Twitter)"
- `linkedin` (Social)
- `pinterest` (Social)
- `livelo` (Finance)
- `ifood` (Delivery)
- `liti` (Fitness)

**Nota:** O produto "MAX" será cadastrado como `max-hbo` para evitar conflito com o `max` existente (Entertainment).

---

### 3. Novas Pessoas (8)

| ID | Nome |
|----|------|
| agata-cristina | Ágata Cristina (já existe!) |
| gabriel | Gabriel |
| alice-portugal | Alice Portugal |
| bob | Bob (já existe!) |
| caue | Cauê (já existe!) |
| alexandre-magno | Alexandre Magno |
| eru | Eru |

**Correção:** Após análise, `agata-cristina`, `bob`, e `caue` já existem. As pessoas novas são apenas:

| ID | Nome |
|----|------|
| gabriel | Gabriel |
| alice-portugal | Alice Portugal |
| alexandre-magno | Alexandre Magno |
| eru | Eru |

**Pessoas já existentes (reutilizar):**
- `arthur`, `aiquis`, `agata-cristina`, `karina`, `glauco`, `nana`, `pilon`, `portinho`, `mateus`, `thiago`, `danilera`, `nery`, `fabio`, `bob`, `caue`, `pri-chagas`

---

### 4. Novas Menções (20)

| Pessoa | Produto |
|--------|---------|
| Arthur | X (Twitter) |
| Aíquis | Threads |
| Ágata Cristina | MAX |
| Gabriel | Aiqfome |
| Alice Portugal | Apple Watch |
| Pri Chagas | Adidas Running |
| Bob | Deezer |
| Cauê | Sketchbook |
| Karina | LinkedIn |
| Glauco | Bioritmo |
| Alexandre Magno | Broadlink |
| Nana | Livelo |
| Pilon | Pinterest |
| Portinho | iFood |
| Mateus | NordVPN |
| Thiago | NordVPN |
| Danilera | Sticker.ly |
| Nery | Offramp |
| Eru | Liti |
| Fabio | Liti |

**Nota:** Mateus e Thiago mencionam o mesmo produto (NordVPN). Eru e Fabio mencionam o mesmo produto (Liti).

---

### Seção Técnica

**Episódio (inserir antes do episódio 51):**

```typescript
{
  id: 49,
  title: "Redesign problemático, roadmap público e queda das ações: O caso da Sonos",
  date: "2024-09-04",
  description: "Análise do caso Sonos: redesign, roadmap público e impacto nas ações.",
},
```

**Produtos novos:**

```typescript
// Social
{ id: "threads", name: "Threads", category: "Social", url: "https://www.threads.com/" },

// Entertainment
{ id: "max-hbo", name: "MAX", category: "Entertainment", url: "https://www.hbomax.com/" },
{ id: "deezer", name: "Deezer", category: "Entertainment", url: "https://www.deezer.com/" },
{ id: "stickerly", name: "Sticker.ly", category: "Entertainment", url: "https://sticker.ly/" },

// Delivery
{ id: "aiqfome", name: "Aiqfome", category: "Delivery", url: "https://www.aiqfome.com/" },

// Hardware
{ id: "apple-watch", name: "Apple Watch", category: "Hardware" },
{ id: "broadlink", name: "Broadlink", category: "Hardware" },

// Fitness
{ id: "adidas-running", name: "Adidas Running", category: "Fitness" },
{ id: "bioritmo", name: "Bioritmo", category: "Fitness", url: "https://www.bioritmo.com.br/" },

// Productivity
{ id: "sketchbook", name: "Sketchbook", category: "Productivity", url: "https://www.sketchbook.com/" },
{ id: "nordvpn", name: "NordVPN", category: "Productivity", url: "https://nordvpn.com/" },

// Finance
{ id: "offramp", name: "Offramp", category: "Finance", url: "https://www.offramp.xyz/" },
```

**Pessoas novas:**

```typescript
{ id: "gabriel", name: "Gabriel" },
{ id: "alice-portugal", name: "Alice Portugal" },
{ id: "alexandre-magno", name: "Alexandre Magno" },
{ id: "eru", name: "Eru" },
```

**Menções:**

```typescript
// Episode 49
{ id: "m49-1", episodeId: 49, personId: "arthur", productId: "twitter" },
{ id: "m49-2", episodeId: 49, personId: "aiquis", productId: "threads" },
{ id: "m49-3", episodeId: 49, personId: "agata-cristina", productId: "max-hbo" },
{ id: "m49-4", episodeId: 49, personId: "gabriel", productId: "aiqfome" },
{ id: "m49-5", episodeId: 49, personId: "alice-portugal", productId: "apple-watch" },
{ id: "m49-6", episodeId: 49, personId: "pri-chagas", productId: "adidas-running" },
{ id: "m49-7", episodeId: 49, personId: "bob", productId: "deezer" },
{ id: "m49-8", episodeId: 49, personId: "caue", productId: "sketchbook" },
{ id: "m49-9", episodeId: 49, personId: "karina", productId: "linkedin" },
{ id: "m49-10", episodeId: 49, personId: "glauco", productId: "bioritmo" },
{ id: "m49-11", episodeId: 49, personId: "alexandre-magno", productId: "broadlink" },
{ id: "m49-12", episodeId: 49, personId: "nana", productId: "livelo" },
{ id: "m49-13", episodeId: 49, personId: "pilon", productId: "pinterest" },
{ id: "m49-14", episodeId: 49, personId: "portinho", productId: "ifood" },
{ id: "m49-15", episodeId: 49, personId: "mateus", productId: "nordvpn" },
{ id: "m49-16", episodeId: 49, personId: "thiago", productId: "nordvpn" },
{ id: "m49-17", episodeId: 49, personId: "danilera", productId: "stickerly" },
{ id: "m49-18", episodeId: 49, personId: "nery", productId: "offramp" },
{ id: "m49-19", episodeId: 49, personId: "eru", productId: "liti" },
{ id: "m49-20", episodeId: 49, personId: "fabio", productId: "liti" },
```

---

### Resumo de Alterações

| Seção | Adições |
|-------|---------|
| Episodes | +1 (49) |
| Products | +12 novos |
| People | +4 novos |
| Mentions | +20 |

