

## Plano: Adicionar Episódio 59 e Menções

### Resumo

Adicionar o episódio 59 de 2024 (Nov 12) com o tema "O que chefões da OpenAI, Anthropic e Perplexity pensam sobre AI como produto" e suas 15 menções ao arquivo `src/data/mentions.ts`.

---

### Arquivo a Modificar

`src/data/mentions.ts`

---

### 1. Novo Episódio

| ID | Título | Data |
|----|--------|------|
| 59 | O que chefões da OpenAI, Anthropic e Perplexity pensam sobre AI como produto | 2024-11-12 |

---

### 2. Novos Produtos (9)

| ID | Nome | Categoria |
|----|------|-----------|
| airops | AirOps | AI Tools |
| crew-ai | Crew AI | AI Tools |
| mapify | Mapify | AI Tools |
| quickbase | Quickbase | Business |
| foodtosave | FoodtoSave | Lifestyle |
| zepp | Zepp | Fitness |
| e-titulo | E-título | Transportation |
| swapfiets | Swapfiets | Transportation |
| land-builder | Land Builder | Entertainment |

**Produtos já existentes (reutilizar):**
- `prime-video`
- `perplexity`
- `tldv`
- `supabase`
- `wellhub`
- `pokemon-tcg`

---

### 3. Novas Pessoas (3)

| ID | Nome |
|----|------|
| gi | Gi |
| tiago-santi | Tiago Santi |
| ana-romeu | Ana Romeu |

**Pessoas já existentes (reutilizar):**
- `aiquis`, `arthur`, `portinho`, `jessica-luz`, `boss`, `nana`, `marina-fernandes`, `brian`, `pilon`, `andrezao`, `danilera`

---

### 4. Novas Menções (15)

| Pessoa | Produto |
|--------|---------|
| Aíquis | Prime Video |
| Aíquis | Crew AI |
| Arthur | AirOps |
| Portinho | Mapify |
| Gi | Perplexity |
| Jéssica Luz | TL;dv |
| Boss | Supabase |
| Tiago Santi | Quickbase |
| Nana | FoodtoSave |
| Marina Fernandes | Wellhub |
| Brian | Zepp |
| Pilon | E-título |
| Ana Romeu | Swapfiets |
| Andrezão | Pokémon TCG |
| Danilera | Land Builder |

---

### Seção Técnica

**Episódio (inserir entre 58 e 60):**
```typescript
{
  id: 59,
  title: "O que chefões da OpenAI, Anthropic e Perplexity pensam sobre AI como produto",
  date: "2024-11-12",
  description: "Discussão sobre visões de AI como produto por líderes da OpenAI, Anthropic e Perplexity.",
},
```

**Produtos novos:**
```typescript
// AI Tools
{ id: "airops", name: "AirOps", category: "AI Tools", url: "https://www.airops.com" },
{ id: "crew-ai", name: "Crew AI", category: "AI Tools", url: "https://www.crewai.com" },
{ id: "mapify", name: "Mapify", category: "AI Tools" },

// Business
{ id: "quickbase", name: "Quickbase", category: "Business", url: "https://www.quickbase.com" },

// Lifestyle
{ id: "foodtosave", name: "FoodtoSave", category: "Lifestyle" },

// Fitness
{ id: "zepp", name: "Zepp", category: "Fitness" },

// Transportation
{ id: "e-titulo", name: "E-título", category: "Transportation" },
{ id: "swapfiets", name: "Swapfiets", category: "Transportation", url: "https://swapfiets.com" },

// Entertainment
{ id: "land-builder", name: "Land Builder", category: "Entertainment" },
```

**Pessoas novas:**
```typescript
{ id: "gi", name: "Gi" },
{ id: "tiago-santi", name: "Tiago Santi" },
{ id: "ana-romeu", name: "Ana Romeu" },
```

**Menções:**
```typescript
// Episode 59
{ id: "m59-1", episodeId: 59, personId: "aiquis", productId: "prime-video" },
{ id: "m59-2", episodeId: 59, personId: "aiquis", productId: "crew-ai" },
{ id: "m59-3", episodeId: 59, personId: "arthur", productId: "airops" },
{ id: "m59-4", episodeId: 59, personId: "portinho", productId: "mapify" },
{ id: "m59-5", episodeId: 59, personId: "gi", productId: "perplexity" },
{ id: "m59-6", episodeId: 59, personId: "jessica-luz", productId: "tldv" },
{ id: "m59-7", episodeId: 59, personId: "boss", productId: "supabase" },
{ id: "m59-8", episodeId: 59, personId: "tiago-santi", productId: "quickbase" },
{ id: "m59-9", episodeId: 59, personId: "nana", productId: "foodtosave" },
{ id: "m59-10", episodeId: 59, personId: "marina-fernandes", productId: "wellhub" },
{ id: "m59-11", episodeId: 59, personId: "brian", productId: "zepp" },
{ id: "m59-12", episodeId: 59, personId: "pilon", productId: "e-titulo" },
{ id: "m59-13", episodeId: 59, personId: "ana-romeu", productId: "swapfiets" },
{ id: "m59-14", episodeId: 59, personId: "andrezao", productId: "pokemon-tcg" },
{ id: "m59-15", episodeId: 59, personId: "danilera", productId: "land-builder" },
```

---

### Resumo de Alterações

| Seção | Adições |
|-------|---------|
| Episodes | +1 (59) |
| Products | +9 novos |
| People | +3 novos |
| Mentions | +15 |

