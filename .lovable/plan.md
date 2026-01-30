

## Plano: Adicionar Episódio 37 (Aprendendo sobre pensamento crítico e analítico)

### Visão Geral
Adicionar o episódio 37 com 6 menções de produtos. Este será o episódio mais antigo do dataset.

---

### Análise de Dados

**Produtos existentes:**
| ID | Nome |
|----|------|
| `google-slides` | Google Slides |

**Pessoas existentes:**
| ID | Nome |
|----|------|
| `aiquis` | Aíquis |
| `arthur` | Arthur |
| `pilon` | Pilon |
| `natascha` | Natascha |
| `danilera` | Danilera |
| `beicola` | Beiçola |

**Nota:** Natasha no episódio 37 provavelmente é a mesma pessoa que `natascha` já cadastrada.

---

### Novos Dados a Adicionar

**1 Episódio:**
| ID | Título | Data |
|----|--------|------|
| 37 | Aprendendo sobre pensamento crítico e analítico | 2024-05-21 |

**5 Novos Produtos:**
| ID | Nome | Categoria | URL | Observação |
|----|------|-----------|-----|------------|
| `google-sheets` | Google Sheets | Productivity | - | Planilhas do Google |
| `drink-water` | Drink Water | Lifestyle | - | App de lembrete de hidratação |
| `lady-driver` | Lady Driver | Transportation | https://www.ladydriver.com.br/ | Transporte por app para mulheres |
| `brawl-stars` | Brawl Stars | Entertainment | - | Jogo mobile |
| `classpass` | ClassPass | Fitness | https://classpass.com | App de fitness |

**6 Menções:**
| Pessoa | Produto |
|--------|---------|
| Aíquis | Google Sheets |
| Arthur | Google Slides |
| Pilon | Drink Water |
| Natasha | Lady Driver |
| Danilera | Brawl Stars |
| Beiçola | ClassPass |

---

### Arquivo a Modificar
`src/data/mentions.ts`

---

### Detalhes Técnicos

**Passo 1 - Adicionar episódio** (inserir antes do episódio 38, início da lista):
```typescript
  {
    id: 37,
    title: "Aprendendo sobre pensamento crítico e analítico",
    date: "2024-05-21",
    description: "Discussão sobre pensamento crítico e analítico no contexto de produto.",
  },
```

**Passo 2 - Adicionar produtos novos:**

Productivity:
```typescript
  { id: "google-sheets", name: "Google Sheets", category: "Productivity" },
```

Lifestyle:
```typescript
  { id: "drink-water", name: "Drink Water", category: "Lifestyle" },
```

Transportation:
```typescript
  { id: "lady-driver", name: "Lady Driver", category: "Transportation", url: "https://www.ladydriver.com.br/" },
```

Entertainment:
```typescript
  { id: "brawl-stars", name: "Brawl Stars", category: "Entertainment" },
```

Fitness:
```typescript
  { id: "classpass", name: "ClassPass", category: "Fitness", url: "https://classpass.com" },
```

**Passo 3 - Adicionar menções** (inserir antes do Episode 38):
```typescript
  // Episode 37
  { id: "m37-1", episodeId: 37, personId: "aiquis", productId: "google-sheets" },
  { id: "m37-2", episodeId: 37, personId: "arthur", productId: "google-slides" },
  { id: "m37-3", episodeId: 37, personId: "pilon", productId: "drink-water" },
  { id: "m37-4", episodeId: 37, personId: "natascha", productId: "lady-driver" },
  { id: "m37-5", episodeId: 37, personId: "danilera", productId: "brawl-stars" },
  { id: "m37-6", episodeId: 37, personId: "beicola", productId: "classpass" },
```

---

### Resumo de Alterações

| Item | Quantidade |
|------|------------|
| Episódio | 1 |
| Pessoas novas | 0 |
| Produtos novos | 5 |
| Menções | 6 |

### Notas
- Todas as pessoas já existem no sistema
- "Natasha" mapeada para `natascha` existente
- Google Slides já existe, será reutilizado
- Google Sheets é novo e será adicionado
- Lady Driver é um app de transporte focado em mulheres
- Brawl Stars é um jogo mobile da Supercell
- ClassPass é um app de fitness para aulas em academias

