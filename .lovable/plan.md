

## Plano: Adicionar Episódio 57 e Menções

### Resumo

Adicionar o episódio 57 de 2024 (Oct 30) com o tema "Reflexões sobre fazer o básico bem feito" e suas 11 menções ao arquivo `src/data/mentions.ts`.

---

### Arquivo a Modificar

`src/data/mentions.ts`

---

### 1. Novo Episódio

| ID | Título | Data |
|----|--------|------|
| 57 | Reflexões sobre fazer o básico bem feito | 2024-10-30 |

---

### 2. Novos Produtos (6)

| ID | Nome | Categoria | Observação |
|----|------|-----------|------------|
| google-suite | Google Suite | Productivity | Novo |
| apple-intelligence | Apple Intelligence | AI Tools | Novo |
| retool | Retool | Development | Novo |
| rocket-money | Rocket Money | Finance | Novo |
| google-lens | Google Lens | AI Tools | Novo |
| toqan | Toqan | AI Tools | AI do iFood |
| bike | Bike | Transportation | Novo (genérico) |

**Produtos já existentes (reutilizar):**
- `linkedin` (Social)
- `chatgpt` (AI Tools)
- `netflix` (Entertainment)

---

### 3. Novas Pessoas (1)

| ID | Nome |
|----|------|
| bruna-ep57 | Bruna |

Nota: Existe um `bruna` duplicado no arquivo, então usarei um ID único para este episódio.

**Pessoas já existentes (reutilizar):**
- `aiquis`, `arthur`, `boss`, `mat`, `karina`, `lucas`, `brian`, `pilon`, `nana`

---

### 4. Novas Menções (11)

| Pessoa | Produto |
|--------|---------|
| Aíquis | Google Suite |
| Arthur | Apple Intelligence |
| Boss | Retool |
| Mat | Rocket Money |
| Karina | Bike |
| Lucas | LinkedIn |
| Brian | LinkedIn |
| Pilon | ChatGPT |
| Pilon | Google Lens |
| Nana | Netflix |
| Bruna | Toqan |

---

### Seção Técnica

**Episódio (inserir antes do episódio 58):**
```typescript
{
  id: 57,
  title: "Reflexões sobre fazer o básico bem feito",
  date: "2024-10-30",
  description: "Discussão sobre a importância de executar bem o básico.",
},
```

**Produtos novos:**
```typescript
// Productivity
{ id: "google-suite", name: "Google Suite", category: "Productivity", url: "https://workspace.google.com" },

// AI Tools
{ id: "apple-intelligence", name: "Apple Intelligence", category: "AI Tools" },
{ id: "google-lens", name: "Google Lens", category: "AI Tools", url: "https://lens.google" },
{ id: "toqan", name: "Toqan", category: "AI Tools", url: "https://toqan.ai" },

// Development
{ id: "retool", name: "Retool", category: "Development", url: "https://retool.com" },

// Finance
{ id: "rocket-money", name: "Rocket Money", category: "Finance", url: "https://rocketmoney.com" },

// Transportation
{ id: "bike", name: "Bike", category: "Transportation" },
```

**Pessoa nova:**
```typescript
{ id: "bruna-ep57", name: "Bruna" },
```

**Menções:**
```typescript
// Episode 57
{ id: "m57-1", episodeId: 57, personId: "aiquis", productId: "google-suite" },
{ id: "m57-2", episodeId: 57, personId: "arthur", productId: "apple-intelligence" },
{ id: "m57-3", episodeId: 57, personId: "boss", productId: "retool" },
{ id: "m57-4", episodeId: 57, personId: "mat", productId: "rocket-money" },
{ id: "m57-5", episodeId: 57, personId: "karina", productId: "bike" },
{ id: "m57-6", episodeId: 57, personId: "lucas", productId: "linkedin" },
{ id: "m57-7", episodeId: 57, personId: "brian", productId: "linkedin" },
{ id: "m57-8", episodeId: 57, personId: "pilon", productId: "chatgpt" },
{ id: "m57-9", episodeId: 57, personId: "pilon", productId: "google-lens" },
{ id: "m57-10", episodeId: 57, personId: "nana", productId: "netflix" },
{ id: "m57-11", episodeId: 57, personId: "bruna-ep57", productId: "toqan" },
```

---

### Resumo de Alterações

| Seção | Adições |
|-------|---------|
| Episodes | +1 (57) |
| Products | +7 novos |
| People | +1 novo |
| Mentions | +11 |

