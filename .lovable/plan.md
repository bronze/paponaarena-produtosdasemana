
## Plano: Adicionar Episódio 58 e Menções

### Resumo

Adicionar o episódio 58 de 2024 (Nov 6) com o tema "Como foi o Lenny & Friends Summit?" e suas 10 menções ao arquivo `src/data/mentions.ts`.

---

### Arquivo a Modificar

`src/data/mentions.ts`

---

### 1. Novo Episódio

| ID | Título | Data |
|----|--------|------|
| 58 | Como foi o Lenny & Friends Summit? Com Fernanda Faria-Product Director @ ABInBev | 2024-11-06 |

---

### 2. Novos Produtos (7)

| ID | Nome | Categoria | Observação |
|----|------|-----------|------------|
| rapid-api | Rapid API | Development | Novo |
| smiles | Smiles | Travel | Novo |
| instagram | Instagram | Social | Novo (produto pai) |
| instagram-detox | Instagram (detox) | Social | Novo (variante de Instagram) |
| quinto-andar | Quinto Andar | Business | Novo |
| clash-pass | Clash Pass | Entertainment | Novo |
| classapp | ClassApp | Education | Novo |
| eventos-whatsapp | Eventos do WhatsApp | Business | Novo (variante de WhatsApp) |

**Produtos já existentes (reutilizar):**
- `pokemon-tcg`
- `duolingo`
- `skoob`
- `buyticket`
- `kindle`
- `whatsapp` (produto pai para variante)

---

### 3. Pessoas

**Todas as pessoas já existem no banco de dados:**
- `arthur`, `aiquis`, `lucas`, `pilon`, `cloves`, `nery`, `karina`, `andrezinho`, `glauco`, `lucao`

---

### 4. Novas Menções (10)

| Pessoa | Produto |
|--------|---------|
| Arthur | Rapid API |
| Aíquis | Pokémon TCG |
| Lucas | Smiles |
| Pilon | Instagram (detox) |
| Cloves | Quinto Andar |
| Nery | Clash Pass |
| Karina | 99 |
| Andrézinho | Duolingo |
| Glauco | ClassApp |
| Lukão | Eventos do WhatsApp |

---

### Seção Técnica

**Episódio (inserir antes do episódio 60):**
```typescript
{
  id: 58,
  title: "Como foi o Lenny & Friends Summit? Com Fernanda Faria-Product Director @ ABInBev",
  date: "2024-11-06",
  description: "Discussão sobre o Lenny & Friends Summit com Fernanda Faria.",
},
```

**Produtos novos (inserir nas categorias apropriadas):**
```typescript
// Development
{ id: "rapid-api", name: "Rapid API", category: "Development", url: "https://rapidapi.com" },

// Travel
{ id: "smiles", name: "Smiles", category: "Travel", url: "https://smiles.com.br" },

// Social (Instagram pai + variante)
{ id: "instagram", name: "Instagram", category: "Social", url: "https://instagram.com" },
{ id: "instagram-detox", name: "Instagram (detox)", category: "Social", parentId: "instagram" },

// Business
{ id: "quinto-andar", name: "Quinto Andar", category: "Business", url: "https://quintoandar.com.br" },
{ id: "eventos-whatsapp", name: "Eventos do WhatsApp", category: "Business", parentId: "whatsapp" },

// Entertainment
{ id: "clash-pass", name: "Clash Pass", category: "Entertainment" },

// Education
{ id: "classapp", name: "ClassApp", category: "Education" },
```

**Menções:**
```typescript
// Episode 58
{ id: "m58-1", episodeId: 58, personId: "arthur", productId: "rapid-api" },
{ id: "m58-2", episodeId: 58, personId: "aiquis", productId: "pokemon-tcg" },
{ id: "m58-3", episodeId: 58, personId: "lucas", productId: "smiles" },
{ id: "m58-4", episodeId: 58, personId: "pilon", productId: "instagram-detox" },
{ id: "m58-5", episodeId: 58, personId: "cloves", productId: "quinto-andar" },
{ id: "m58-6", episodeId: 58, personId: "nery", productId: "clash-pass" },
{ id: "m58-7", episodeId: 58, personId: "karina", productId: "99" },
{ id: "m58-8", episodeId: 58, personId: "andrezinho", productId: "duolingo" },
{ id: "m58-9", episodeId: 58, personId: "glauco", productId: "classapp" },
{ id: "m58-10", episodeId: 58, personId: "lucao", productId: "eventos-whatsapp" },
```

---

### Resumo de Alterações

| Seção | Adições |
|-------|---------|
| Episodes | +1 (58) |
| Products | +8 novos (incluindo 2 variantes) |
| People | 0 (todos já existem) |
| Mentions | +10 |
