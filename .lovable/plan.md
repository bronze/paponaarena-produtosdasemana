

## Plano: Adicionar Episódio 22 (Como a galera tá usando o ChatGPT no dia a dia?)

### Visão Geral
Adicionar o episódio 22 com 5 menções de produtos. Este será o novo episódio mais antigo do dataset (antes do episódio 23).

---

### Análise de Dados

**Produtos existentes:**
| ID | Nome | Categoria |
|----|------|-----------|
| `training-peaks` | Training Peaks | Fitness |
| `notion` | Notion | Productivity |
| `wise` | Wise | Finance |

**Produtos a criar:**
| ID | Nome | Categoria | URL | Observação |
|----|------|-----------|-----|------------|
| `star-plus` | Star+ | Entertainment | - | Streaming (incorporado ao Disney+ em 2024) |
| `oceanic-plus` | Oceanic Plus | Fitness | - | App de mergulho para Apple Watch Ultra |

**Pessoas existentes:**
| ID | Nome |
|----|------|
| `arthur` | Arthur |
| `aiquis` | Aíquis |
| `anonimo` | Anônimo |

**Pessoas a criar:** Nenhuma

---

### Arquivo a Modificar
`src/data/mentions.ts`

---

### Detalhes Técnicos

**Passo 1 - Adicionar episódio** (inserir antes do episódio 23, início da lista):
```typescript
  {
    id: 22,
    title: "Como a galera tá usando o ChatGPT no dia a dia?",
    date: "2024-01-19",
    description: "Discussão sobre os usos práticos do ChatGPT no cotidiano das pessoas.",
  },
```

**Passo 2 - Adicionar produtos novos:**

Entertainment:
```typescript
  { id: "star-plus", name: "Star+", category: "Entertainment" },
```

Fitness:
```typescript
  { id: "oceanic-plus", name: "Oceanic Plus", category: "Fitness" },
```

**Passo 3 - Adicionar menções** (inserir antes do Episode 23):
```typescript
  // Episode 22
  { id: "m22-1", episodeId: 22, personId: "arthur", productId: "training-peaks" },
  { id: "m22-2", episodeId: 22, personId: "aiquis", productId: "star-plus" },
  { id: "m22-3", episodeId: 22, personId: "anonimo", productId: "notion" },
  { id: "m22-4", episodeId: 22, personId: "anonimo", productId: "wise" },
  { id: "m22-5", episodeId: 22, personId: "anonimo", productId: "oceanic-plus" },
```

---

### Resumo de Alterações

| Item | Quantidade |
|------|------------|
| Episódio | 1 |
| Pessoas novas | 0 |
| Produtos novos | 2 (Star+, Oceanic Plus) |
| Menções | 5 |

### Notas
- Training Peaks, Notion e Wise já existem e serão reutilizados
- Star+ era o serviço de streaming de esportes e conteúdo adulto da Disney (incorporado ao Disney+ em 2024)
- Oceanic Plus é o app de mergulho para Apple Watch Ultra (categoria Fitness, junto com outros apps esportivos)
- Há 3 menções do participante "Anônimo" neste episódio (Notion, Wise e Oceanic Plus)
- A URL do Training Peaks no dataset já existe como `https://trainingpeaks.com`, mas o usuário forneceu `https://www.trainingpeaks.com/` - vou manter a existente

