

## Plano: Adicionar Episódio 52 e Menções

### Resumo

Adicionar o episódio 52 de setembro/2024 com o tema "Panorama do Mercado de Produto do Brasil" e suas 12 menções ao arquivo `src/data/mentions.ts`.

---

### Arquivo a Modificar

`src/data/mentions.ts`

---

### 1. Novo Episódio

| ID | Título | Data |
|----|--------|------|
| 52 | Panorama do Mercado de Produto do Brasil | 2024-09-25 |

---

### 2. Novos Produtos (6)

| ID | Nome | Categoria | URL |
|----|------|-----------|-----|
| sleeper-fantasy-football | Sleeper Fantasy Football | Entertainment | https://sleeper.com/ |
| luma | Luma | Business | https://luma.com/ |
| miro | Miro | Productivity | https://miro.com |
| github | Github | Development | https://github.com |
| apple-passwords | Passwords da Apple | Productivity | - |
| cadeira-balanco-bebe | Cadeira de balanço pra bebê | Hardware | - |

**Produtos já existentes (reutilizar):**
- `pagaleve` (Finance)
- `substack` (Tech)
- `perplexity` (AI Tools)
- `polycam` (Productivity - renomear para "Polycam" apenas)
- `wellhub` (Fitness)
- `seats-aero` (Travel)

---

### 3. Nova Pessoa (1)

| ID | Nome |
|----|------|
| fabinho | Fabinho |

**Pessoas já existentes (reutilizar):**
- `aiquis`, `arthur`, `nina`, `karina`, `brian`, `nana`, `mat`, `lucas`, `glauco`, `nery`, `danilera`

---

### 4. Novas Menções (12)

| Pessoa | Produto |
|--------|---------|
| Aíquis | Sleeper Fantasy Football |
| Arthur | Luma |
| Nina | Pagaleve |
| Karina | Miro |
| Brian | Substack |
| Nana | Perplexity |
| Mat | Polycam |
| Fabinho | Github |
| Lucas | Wellhub |
| Glauco | Passwords da Apple |
| Nery | Seats.aero |
| Danilera | Cadeira de balanço pra bebê |

---

### Seção Técnica

**Episódio (inserir antes do episódio 53):**

```typescript
{
  id: 52,
  title: "Panorama do Mercado de Produto do Brasil",
  date: "2024-09-25",
  description: "Análise do panorama atual do mercado de produto no Brasil.",
},
```

**Produtos novos:**

```typescript
// Entertainment
{ id: "sleeper-fantasy-football", name: "Sleeper Fantasy Football", category: "Entertainment", url: "https://sleeper.com/" },

// Business
{ id: "luma", name: "Luma", category: "Business", url: "https://luma.com/" },

// Productivity
{ id: "miro", name: "Miro", category: "Productivity", url: "https://miro.com" },
{ id: "apple-passwords", name: "Passwords da Apple", category: "Productivity" },

// Development
{ id: "github", name: "Github", category: "Development", url: "https://github.com" },

// Hardware
{ id: "cadeira-balanco-bebe", name: "Cadeira de balanço pra bebê", category: "Hardware" },
```

**Pessoa nova:**

```typescript
{ id: "fabinho", name: "Fabinho" },
```

**Menções:**

```typescript
// Episode 52
{ id: "m52-1", episodeId: 52, personId: "aiquis", productId: "sleeper-fantasy-football" },
{ id: "m52-2", episodeId: 52, personId: "arthur", productId: "luma" },
{ id: "m52-3", episodeId: 52, personId: "nina", productId: "pagaleve" },
{ id: "m52-4", episodeId: 52, personId: "karina", productId: "miro" },
{ id: "m52-5", episodeId: 52, personId: "brian", productId: "substack" },
{ id: "m52-6", episodeId: 52, personId: "nana", productId: "perplexity" },
{ id: "m52-7", episodeId: 52, personId: "mat", productId: "polycam" },
{ id: "m52-8", episodeId: 52, personId: "fabinho", productId: "github" },
{ id: "m52-9", episodeId: 52, personId: "lucas", productId: "wellhub" },
{ id: "m52-10", episodeId: 52, personId: "glauco", productId: "apple-passwords" },
{ id: "m52-11", episodeId: 52, personId: "nery", productId: "seats-aero" },
{ id: "m52-12", episodeId: 52, personId: "danilera", productId: "cadeira-balanco-bebe" },
```

---

### Resumo de Alterações

| Seção | Adições |
|-------|---------|
| Episodes | +1 (52) |
| Products | +6 novos |
| People | +1 novo |
| Mentions | +12 |

