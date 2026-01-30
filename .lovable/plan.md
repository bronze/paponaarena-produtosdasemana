

## Plano: Adicionar Episódio 24 (PMs e Zona de conforto, Palworld e esportes na Netflix)

### Visão Geral
Adicionar o episódio 24 com 8 menções de produtos. Este será o novo episódio mais antigo do dataset (antes do episódio 25).

---

### Análise de Dados

**Produtos existentes:**
| ID | Nome | Categoria |
|----|------|-----------|
| `c6` | C6 | Finance |
| `foodtosave` | FoodtoSave | Lifestyle |
| `vivino` | Vivino | Business |
| `tag-sem-parar` | Tag Sem Parar | Lifestyle |

**Produtos a criar:**
| ID | Nome | Categoria | URL | Observação |
|----|------|-----------|-----|------------|
| `arc-browser` | Arc | Productivity | https://arc.net/ | Browser principal |
| `arc-windows` | Arc for Windows | Productivity | https://arc.net/ | Variante do Arc, parentId: arc-browser |
| `tv-time` | TV Time | Entertainment | - | App de tracking de séries |
| `diario-oficial-uniao` | App do Diário Oficial da União | Productivity | - | App governamental |
| `bumble` | Bumble | Social | https://bumble.com/ | App de relacionamento |

**Pessoas existentes:**
| ID | Nome |
|----|------|
| `aiquis` | Aíquis |
| `arthur` | Arthur |
| `danilera` | Danilera |
| `agata-cristina` | Ágata Cristina |
| `reis` | Reis |
| `pilon` | Pilon |
| `anonimo` | Anônimo |

**Pessoas a criar:**
| ID | Nome |
|----|------|
| `eduardo-ep24` | Eduardo |

---

### Arquivo a Modificar
`src/data/mentions.ts`

---

### Detalhes Técnicos

**Passo 1 - Adicionar episódio** (inserir antes do episódio 25, início da lista):
```typescript
  {
    id: 24,
    title: "PMs e Zona de conforto, Palworld e esportes na Netflix",
    date: "2024-01-31",
    description: "Discussão sobre Product Managers e zona de conforto, o fenômeno Palworld e a entrada da Netflix no esporte.",
  },
```

**Passo 2 - Adicionar produtos novos:**

Productivity (browser Arc e variante):
```typescript
  { id: "arc-browser", name: "Arc", category: "Productivity", url: "https://arc.net/" },
  { id: "arc-windows", name: "Arc for Windows", category: "Productivity", url: "https://arc.net/", parentId: "arc-browser" },
  { id: "diario-oficial-uniao", name: "App do Diário Oficial da União", category: "Productivity" },
```

Entertainment:
```typescript
  { id: "tv-time", name: "TV Time", category: "Entertainment" },
```

Social:
```typescript
  { id: "bumble", name: "Bumble", category: "Social", url: "https://bumble.com/" },
```

**Passo 3 - Adicionar pessoa:**
```typescript
  // Episode 24 contributors
  { id: "eduardo-ep24", name: "Eduardo" },
```

**Passo 4 - Adicionar menções** (inserir antes do Episode 25):
```typescript
  // Episode 24
  { id: "m24-1", episodeId: 24, personId: "aiquis", productId: "arc-windows" },
  { id: "m24-2", episodeId: 24, personId: "arthur", productId: "tv-time" },
  { id: "m24-3", episodeId: 24, personId: "danilera", productId: "c6" },
  { id: "m24-4", episodeId: 24, personId: "agata-cristina", productId: "foodtosave" },
  { id: "m24-5", episodeId: 24, personId: "reis", productId: "vivino" },
  { id: "m24-6", episodeId: 24, personId: "eduardo-ep24", productId: "diario-oficial-uniao" },
  { id: "m24-7", episodeId: 24, personId: "pilon", productId: "tag-sem-parar" },
  { id: "m24-8", episodeId: 24, personId: "anonimo", productId: "bumble" },
```

---

### Resumo de Alterações

| Item | Quantidade |
|------|------------|
| Episódio | 1 |
| Pessoas novas | 1 |
| Produtos novos | 5 (Arc, Arc for Windows, TV Time, App Diário Oficial, Bumble) |
| Menções | 8 |

### Notas
- Arc for Windows é uma variante do Arc browser, usando `parentId` para agregar estatísticas ao produto pai
- O Eduardo do ep 24 é diferente do Eduardo do ep 41, por isso usa ID `eduardo-ep24`
- C6, FoodtoSave, Vivino e Tag Sem Parar já existem e serão reutilizados
- Bumble é um app de relacionamento, categorizado como Social (junto com Tinder)
- O App do Diário Oficial da União é um app governamental, categorizado como Productivity

