

## Plano: Adicionar Episódio 31 (Ninguém liga para o seu processo)

### Visão Geral
Adicionar o episódio 31 com 7 menções de produtos. Este será o novo episódio mais antigo do dataset (antes do episódio 32).

---

### Análise de Dados

**Produtos existentes:**
| ID | Nome | Categoria |
|----|------|-----------|
| `suno-ai` | Suno AI | AI Tools |
| `waze` | Waze | Transportation |
| `gymrats` | GymRats | Fitness |
| `duolingo` | Duolingo | Education |
| `rappi` | Rappi | Delivery |
| `foodtosave` | FoodtoSave | Lifestyle |

**Produtos a criar:**
| ID | Nome | Categoria | URL | Observação |
|----|------|-----------|-----|------------|
| `airalo` | Airalo | Travel | https://www.airalo.com/ | eSIM para viajantes internacionais |

**Pessoas existentes:**
| ID | Nome |
|----|------|
| `aiquis` | Aíquis |
| `arthur` | Arthur |
| `nana` | Nana |
| `pilon` | Pilon |
| `luquita` | Luquita |
| `andrezinho` | Andrézinho |

**Pessoas a criar:**
| ID | Nome | Observação |
|----|------|------------|
| `renato` | Renato | Novo participante |

---

### Novos Dados a Adicionar

**1 Episódio:**
| ID | Título | Data |
|----|--------|------|
| 31 | Ninguém liga para o seu processo | 2024-04-09 |

**1 Nova Pessoa:**
| ID | Nome |
|----|------|
| `renato` | Renato |

**1 Novo Produto:**
| ID | Nome | Categoria | URL |
|----|------|-----------|-----|
| `airalo` | Airalo | Travel | https://www.airalo.com/ |

**7 Menções:**
| Pessoa | Produto |
|--------|---------|
| Aíquis | Suno AI |
| Arthur | Waze |
| Renato | FoodtoSave |
| Nana | GymRats |
| Pilon | Duolingo |
| Luquita | Rappi |
| Andrezinho | Airalo |

---

### Arquivo a Modificar
`src/data/mentions.ts`

---

### Detalhes Técnicos

**Passo 1 - Adicionar episódio** (inserir antes do episódio 32, início da lista):
```typescript
  {
    id: 31,
    title: "Ninguém liga para o seu processo",
    date: "2024-04-09",
    description: "Discussão sobre processos e como eles impactam (ou não) a percepção do usuário final.",
  },
```

**Passo 2 - Adicionar produto novo:**

Travel:
```typescript
  { id: "airalo", name: "Airalo", category: "Travel", url: "https://www.airalo.com/" },
```

**Passo 3 - Adicionar pessoa:**
```typescript
  // Episode 31 contributor
  { id: "renato", name: "Renato" },
```

**Passo 4 - Adicionar menções** (inserir antes do Episode 32):
```typescript
  // Episode 31
  { id: "m31-1", episodeId: 31, personId: "aiquis", productId: "suno-ai" },
  { id: "m31-2", episodeId: 31, personId: "arthur", productId: "waze" },
  { id: "m31-3", episodeId: 31, personId: "renato", productId: "foodtosave" },
  { id: "m31-4", episodeId: 31, personId: "nana", productId: "gymrats" },
  { id: "m31-5", episodeId: 31, personId: "pilon", productId: "duolingo" },
  { id: "m31-6", episodeId: 31, personId: "luquita", productId: "rappi" },
  { id: "m31-7", episodeId: 31, personId: "andrezinho", productId: "airalo" },
```

---

### Resumo de Alterações

| Item | Quantidade |
|------|------------|
| Episódio | 1 |
| Pessoas novas | 1 |
| Produtos novos | 1 |
| Menções | 7 |

### Notas
- Suno AI, Waze, GymRats, Duolingo, Rappi e FoodtoSave já existem e serão reutilizados
- Airalo é um serviço de eSIM para viajantes internacionais
- "Andrezinho" corresponde ao ID `andrezinho` já existente (diferente de `andrezao`/Andrezão)
- Este será o episódio mais antigo do dataset (abril de 2024)

