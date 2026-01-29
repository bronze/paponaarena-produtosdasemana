

## Plano: Adicionar Episódio 51 e Menções

### Resumo

Adicionar o episódio 51 de setembro/2024 com o tema "Velocidade vs. Qualidade e as táticas de growth que [não] funcionam" e suas 9 menções ao arquivo `src/data/mentions.ts`.

---

### Arquivo a Modificar

`src/data/mentions.ts`

---

### 1. Novo Episódio

| ID | Título | Data |
|----|--------|------|
| 51 | Velocidade vs. Qualidade e as táticas de growth que [não] funcionam | 2024-09-18 |

---

### 2. Novos Produtos (7)

| ID | Nome | Categoria | URL |
|----|------|-----------|-----|
| kabum-smart-700 | Kabum! Smart 700 | Hardware | - |
| monument-valley | Monument Valley | Entertainment | - |
| sports-alerts | Sports Alerts | Entertainment | - |
| tripadvisor | TripAdvisor | Travel | https://tripadvisor.com |
| inalador | Inalador | Hardware | - |
| rock-in-rio | Rock in Rio | Entertainment | - |
| alexa | Alexa | Hardware | - |

**Produtos já existentes (reutilizar):**
- `notebooklm` (AI Tools)
- `filebrowser-go` (Productivity)

---

### 3. Pessoas Já Existentes (reutilizar)

| ID | Nome |
|----|------|
| arthur | Arthur |
| aiquis | Aíquis |
| karina | Karina |
| alexandre-pereira | Alexandre Pereira |
| andrezinho | Andrézinho |
| fabinho | Fabinho |
| lucao | Lucão |
| nery | Nery |
| danilera | Danilera |

**Nota:** "Lukão" se refere ao participante `lucao` (Lucão) já existente.

---

### 4. Novas Menções (9)

| Pessoa | Produto |
|--------|---------|
| Arthur | NotebookLM |
| Aíquis | Kabum! Smart 700 |
| Karina | Monument Valley |
| Alexandre Pereira | Sports Alerts |
| Andrézinho | TripAdvisor |
| Fabinho | Inalador |
| Lucão | Rock in Rio |
| Nery | FileBrowser Go |
| Danilera | Alexa |

---

### Seção Técnica

**Episódio (inserir antes do episódio 52):**

```typescript
{
  id: 51,
  title: "Velocidade vs. Qualidade e as táticas de growth que [não] funcionam",
  date: "2024-09-18",
  description: "Discussão sobre o equilíbrio entre velocidade e qualidade e táticas de growth.",
},
```

**Produtos novos:**

```typescript
// Hardware
{ id: "kabum-smart-700", name: "Kabum! Smart 700", category: "Hardware" },
{ id: "inalador", name: "Inalador", category: "Hardware" },
{ id: "alexa", name: "Alexa", category: "Hardware" },

// Entertainment
{ id: "monument-valley", name: "Monument Valley", category: "Entertainment" },
{ id: "sports-alerts", name: "Sports Alerts", category: "Entertainment" },
{ id: "rock-in-rio", name: "Rock in Rio", category: "Entertainment" },

// Travel
{ id: "tripadvisor", name: "TripAdvisor", category: "Travel", url: "https://tripadvisor.com" },
```

**Menções:**

```typescript
// Episode 51
{ id: "m51-1", episodeId: 51, personId: "arthur", productId: "notebooklm" },
{ id: "m51-2", episodeId: 51, personId: "aiquis", productId: "kabum-smart-700" },
{ id: "m51-3", episodeId: 51, personId: "karina", productId: "monument-valley" },
{ id: "m51-4", episodeId: 51, personId: "alexandre-pereira", productId: "sports-alerts" },
{ id: "m51-5", episodeId: 51, personId: "andrezinho", productId: "tripadvisor" },
{ id: "m51-6", episodeId: 51, personId: "fabinho", productId: "inalador" },
{ id: "m51-7", episodeId: 51, personId: "lucao", productId: "rock-in-rio" },
{ id: "m51-8", episodeId: 51, personId: "nery", productId: "filebrowser-go" },
{ id: "m51-9", episodeId: 51, personId: "danilera", productId: "alexa" },
```

---

### Resumo de Alterações

| Seção | Adições |
|-------|---------|
| Episodes | +1 (51) |
| Products | +7 novos |
| People | 0 (todos já existem) |
| Mentions | +9 |

