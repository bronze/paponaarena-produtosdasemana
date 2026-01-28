

## Plano: Adicionar Episódio 60 e Menções

### Resumo

Adicionar o episódio 60 de 2024 (Nov 19) e suas 8 menções ao arquivo `src/data/mentions.ts`.

---

### Arquivo a Modificar

`src/data/mentions.ts`

---

### 1. Novo Episódio

| ID | Título | Data |
|----|--------|------|
| 60 | Quem cria a visão de Produto? | 2024-11-19 |

---

### 2. Novos Produtos (4)

| ID | Nome | Categoria |
|----|------|-----------|
| flutterflow | FlutterFlow | Development |
| samsung-smart-switch | Samsung Smart Switch | Productivity |
| bionic-go | Bionic Go | Fitness |
| oneschema | OneSchema | Development |

**Produtos já existentes (reutilizar):**
- `n8n`
- `kindle`
- `skoob`
- `buyticket`

---

### 3. Nova Pessoa (1)

| ID | Nome |
|----|------|
| thiago | Thiago |

**Pessoas já existentes (reutilizar):**
- `arthur`, `aiquis`, `danilo-penteado`, `lucao`, `lucas`, `pilon`, `boss`

---

### 4. Novas Menções (8)

| Pessoa | Produto |
|--------|---------|
| Arthur | FlutterFlow |
| Aíquis | Samsung Smart Switch |
| Danilo | Skoob |
| Lukão | BuyTicket |
| Lucas | n8n |
| Pilon | Kindle |
| Thiago | Bionic Go |
| Boss | OneSchema |

---

### Seção Técnica

**Episódio (inserir antes do episódio 61):**
```typescript
{
  id: 60,
  title: "Quem cria a visão de Produto?",
  date: "2024-11-19",
  description: "Discussão sobre quem é responsável por criar a visão de produto.",
},
```

**Produtos:**
```typescript
{ id: "flutterflow", name: "FlutterFlow", category: "Development", url: "https://flutterflow.io" },
{ id: "samsung-smart-switch", name: "Samsung Smart Switch", category: "Productivity" },
{ id: "bionic-go", name: "Bionic Go", category: "Fitness" },
{ id: "oneschema", name: "OneSchema", category: "Development", url: "https://www.oneschema.co" },
```

**Pessoa:**
```typescript
{ id: "thiago", name: "Thiago" },
```

**Menções:**
```typescript
// Episode 60
{ id: "m60-1", episodeId: 60, personId: "arthur", productId: "flutterflow" },
{ id: "m60-2", episodeId: 60, personId: "aiquis", productId: "samsung-smart-switch" },
{ id: "m60-3", episodeId: 60, personId: "danilo-penteado", productId: "skoob" },
{ id: "m60-4", episodeId: 60, personId: "lucao", productId: "buyticket" },
{ id: "m60-5", episodeId: 60, personId: "lucas", productId: "n8n" },
{ id: "m60-6", episodeId: 60, personId: "pilon", productId: "kindle" },
{ id: "m60-7", episodeId: 60, personId: "thiago", productId: "bionic-go" },
{ id: "m60-8", episodeId: 60, personId: "boss", productId: "oneschema" },
```

---

### Resumo de Alterações

| Seção | Adições |
|-------|---------|
| Episodes | +1 (60) |
| Products | +4 novos |
| People | +1 novo |
| Mentions | +8 |

