

## Plano: Adicionar Episódio 53 e Menções

### Resumo

Adicionar o episódio 53 de outubro/2024 com o tema "Highlights do Product Leader Summit 2024" e suas 14 menções ao arquivo `src/data/mentions.ts`.

---

### Arquivo a Modificar

`src/data/mentions.ts`

---

### 1. Novo Episódio

| ID | Título | Data |
|----|--------|------|
| 53 | Highlights do Product Leader Summit 2024 | 2024-10-02 |

---

### 2. Novos Produtos (7)

| ID | Nome | Categoria | Observação |
|----|------|-----------|------------|
| seats-aero | Seats.aero | Travel | Busca de passagens com milhas |
| banana-mercado | Banana Mercado | Finance | App financeiro |
| cifra-club | Cifra Club | Entertainment | Site de cifras/tablatura |
| tesla | Tesla | Transportation | Carro elétrico |
| garmin-connect | Garmin Connect | Fitness | App do Garmin |
| room-planner | Room planner | Productivity | App de planejamento de ambientes |
| quebra-cabeca | Quebra-cabeça | Entertainment | Genérico |

**Produtos já existentes (reutilizar):**
- `duo-gourmet` (Lifestyle)
- `whoop` (Fitness)
- `moises-ai` (AI Tools)
- `classapp` (Education)
- `sprout` (Lifestyle)
- `whatsapp` (Communication)

---

### 3. Novas Pessoas (2)

| ID | Nome |
|----|------|
| matias | Matias |
| dudu-magalhaes | Dudu Magalhães |

**Pessoas já existentes (reutilizar):**
- `aiquis`, `arthur`, `andrezao`, `brian`, `maria`, `lucas`, `glauco`, `mat`, `nana`, `cloves`, `karina`

---

### 4. Novas Menções (14)

| Pessoa | Produto |
|--------|---------|
| Aíquis | Duo Gourmet |
| Arthur | Whoop |
| Andrezão | Duo Gourmet |
| Matias | Seats.aero |
| Brian | Moises.AI |
| Maria | Banana Mercado |
| Lucas | Cifra Club |
| Dudu Magalhães | Tesla |
| Glauco | ClassApp |
| Mat | Sprout |
| Nana | Garmin Connect |
| Lucas | Room planner |
| Cloves | WhatsApp |
| Karina | Quebra-cabeça |

**Nota:** Lucas tem 2 menções neste episódio (Cifra Club e Room planner).

---

### Seção Técnica

**Episódio (inserir antes do episódio 55, no início do array):**

```typescript
{
  id: 53,
  title: "Highlights do Product Leader Summit 2024",
  date: "2024-10-02",
  description: "Destaques e aprendizados do Product Leader Summit 2024.",
},
```

**Produtos novos:**

```typescript
// Travel
{ id: "seats-aero", name: "Seats.aero", category: "Travel", url: "https://seats.aero" },

// Finance
{ id: "banana-mercado", name: "Banana Mercado", category: "Finance" },

// Entertainment
{ id: "cifra-club", name: "Cifra Club", category: "Entertainment", url: "https://cifraclub.com.br" },
{ id: "quebra-cabeca", name: "Quebra-cabeça", category: "Entertainment" },

// Transportation
{ id: "tesla", name: "Tesla", category: "Transportation", url: "https://tesla.com" },

// Fitness
{ id: "garmin-connect", name: "Garmin Connect", category: "Fitness", url: "https://connect.garmin.com" },

// Productivity
{ id: "room-planner", name: "Room planner", category: "Productivity" },
```

**Pessoas novas:**

```typescript
{ id: "matias", name: "Matias" },
{ id: "dudu-magalhaes", name: "Dudu Magalhães" },
```

**Menções:**

```typescript
// Episode 53
{ id: "m53-1", episodeId: 53, personId: "aiquis", productId: "duo-gourmet" },
{ id: "m53-2", episodeId: 53, personId: "arthur", productId: "whoop" },
{ id: "m53-3", episodeId: 53, personId: "andrezao", productId: "duo-gourmet" },
{ id: "m53-4", episodeId: 53, personId: "matias", productId: "seats-aero" },
{ id: "m53-5", episodeId: 53, personId: "brian", productId: "moises-ai" },
{ id: "m53-6", episodeId: 53, personId: "maria", productId: "banana-mercado" },
{ id: "m53-7", episodeId: 53, personId: "lucas", productId: "cifra-club" },
{ id: "m53-8", episodeId: 53, personId: "dudu-magalhaes", productId: "tesla" },
{ id: "m53-9", episodeId: 53, personId: "glauco", productId: "classapp" },
{ id: "m53-10", episodeId: 53, personId: "mat", productId: "sprout" },
{ id: "m53-11", episodeId: 53, personId: "nana", productId: "garmin-connect" },
{ id: "m53-12", episodeId: 53, personId: "lucas", productId: "room-planner" },
{ id: "m53-13", episodeId: 53, personId: "cloves", productId: "whatsapp" },
{ id: "m53-14", episodeId: 53, personId: "karina", productId: "quebra-cabeca" },
```

---

### Resumo de Alterações

| Seção | Adições |
|-------|---------|
| Episodes | +1 (53) |
| Products | +7 novos |
| People | +2 novos |
| Mentions | +14 |

