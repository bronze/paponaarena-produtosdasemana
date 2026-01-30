

## Plano: Adicionar Episódio 21 (As previsões que ninguém pediu sobre A.I. e Produto em 2024)

### Visão Geral
Adicionar o episódio 21 com 2 menções de produtos. Este será o novo episódio mais antigo do dataset (antes do episódio 22).

---

### Análise de Dados

**Produtos existentes:**
| ID | Nome | Categoria |
|----|------|-----------|
| `audible` | Audible | Education |
| `splitwise` | Splitwise | Business |

**Produtos a criar:** Nenhum

**Pessoas existentes:**
| ID | Nome |
|----|------|
| `arthur` | Arthur |
| `aiquis` | Aíquis |

**Pessoas a criar:** Nenhuma

---

### Arquivo a Modificar
`src/data/mentions.ts`

---

### Detalhes Técnicos

**Passo 1 - Adicionar episódio** (inserir antes do episódio 22, início da lista):
```typescript
  {
    id: 21,
    title: "As previsões que ninguém pediu sobre A.I. e Produto em 2024",
    date: "2024-01-19",
    description: "Discussão sobre previsões para inteligência artificial e produto em 2024.",
  },
```

**Passo 2 - Adicionar menções** (inserir antes do Episode 22):
```typescript
  // Episode 21
  { id: "m21-1", episodeId: 21, personId: "arthur", productId: "audible" },
  { id: "m21-2", episodeId: 21, personId: "aiquis", productId: "splitwise" },
```

---

### Resumo de Alterações

| Item | Quantidade |
|------|------------|
| Episódio | 1 |
| Pessoas novas | 0 |
| Produtos novos | 0 |
| Menções | 2 |

### Notas
- Audible e Splitwise já existem no dataset e serão reutilizados
- Arthur e Aíquis são participantes existentes
- O episódio 21 tem a mesma data do episódio 22 (2024-01-19), o que indica que podem ter sido gravados/publicados no mesmo dia

