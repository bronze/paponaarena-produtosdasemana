

## Plano: Adicionar Episodio 38 (E quando "falta tempo" para consumir conteudo?)

### Visao Geral
Adicionar o episodio 38 com 8 mencoes de produtos. Este sera o episodio mais antigo do dataset.

---

### Analise de Dados

**Produtos existentes:**
| ID | Nome |
|----|------|
| `magie` | Magie |
| `duolingo` | Duolingo |
| `quinto-andar` | Quinto Andar |
| `splitwise` | Splitwise |
| `chatgpt` | ChatGPT |

**Pessoas existentes:**
| ID | Nome |
|----|------|
| `arthur` | Arthur |
| `aiquis` | Aiquis |
| `miriam` | Miriam |
| `karina` | Karina |
| `caue` | Caue |
| `neuri` | Neuri |
| `lucas` | Lucas |

---

### Novos Dados a Adicionar

**1 Episodio:**
| ID | Titulo | Data |
|----|--------|------|
| 38 | E quando "falta tempo" para consumir conteudo? Um giro de noticias no mundo de A.I. | 2024-05-28 |

**1 Nova Pessoa:**
| ID | Nome |
|----|------|
| `nat` | Nat |

**3 Novos Produtos:**
| ID | Nome | Categoria | URL | Observacao |
|----|------|-----------|-----|------------|
| `moxtopper` | MoxTopper | Entertainment | - | App para Magic: The Gathering |
| `tecnofitbox` | TecnofitBox | Fitness | - | App/servico de fitness |
| `swiftkey` | SwiftKey | Productivity | - | Teclado virtual da Microsoft |

**8 Mencoes:**
| Pessoa | Produto |
|--------|---------|
| Arthur | Magie |
| Aiquis | Duolingo |
| Miriam | Quinto Andar |
| Karina | Splitwise |
| Caue | MoxTopper |
| Neuri | ChatGPT |
| Nat | TecnofitBox |
| Lucas | SwiftKey |

---

### Arquivo a Modificar
`src/data/mentions.ts`

---

### Detalhes Tecnicos

**Passo 1 - Adicionar episodio** (inserir antes do episodio 39, inicio da lista de episodios 2024):
```typescript
  {
    id: 38,
    title: "E quando \"falta tempo\" para consumir conteúdo? Um giro de notícias no mundo de A.I.",
    date: "2024-05-28",
    description: "Discussão sobre consumo de conteúdo e um giro de notícias no mundo de inteligência artificial.",
  },
```

**Passo 2 - Adicionar produtos novos:**

Entertainment:
```typescript
  { id: "moxtopper", name: "MoxTopper", category: "Entertainment" },
```

Fitness:
```typescript
  { id: "tecnofitbox", name: "TecnofitBox", category: "Fitness" },
```

Productivity:
```typescript
  { id: "swiftkey", name: "SwiftKey", category: "Productivity" },
```

**Passo 3 - Adicionar pessoa:**
```typescript
  { id: "nat", name: "Nat" },
```

**Passo 4 - Adicionar mencoes** (inserir antes do Episode 39):
```typescript
  // Episode 38
  { id: "m38-1", episodeId: 38, personId: "arthur", productId: "magie" },
  { id: "m38-2", episodeId: 38, personId: "aiquis", productId: "duolingo" },
  { id: "m38-3", episodeId: 38, personId: "miriam", productId: "quinto-andar" },
  { id: "m38-4", episodeId: 38, personId: "karina", productId: "splitwise" },
  { id: "m38-5", episodeId: 38, personId: "caue", productId: "moxtopper" },
  { id: "m38-6", episodeId: 38, personId: "neuri", productId: "chatgpt" },
  { id: "m38-7", episodeId: 38, personId: "nat", productId: "tecnofitbox" },
  { id: "m38-8", episodeId: 38, personId: "lucas", productId: "swiftkey" },
```

---

### Resumo de Alteracoes

| Item | Quantidade |
|------|------------|
| Episodio | 1 |
| Pessoas novas | 1 |
| Produtos novos | 3 |
| Mencoes | 8 |

### Notas
- Magie, Duolingo, Quinto Andar, Splitwise e ChatGPT ja existem no sistema e serao reutilizados
- Nat e uma nova pessoa (diferente de Natascha que ja existe)
- MoxTopper e um app para Magic: The Gathering, categorizado como Entertainment
- TecnofitBox categorizado como Fitness
- SwiftKey e o teclado virtual da Microsoft, categorizado como Productivity

