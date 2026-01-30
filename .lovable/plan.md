

## Plano: Adicionar Episódio 32 (O flop do AI Pin e a relação do Poker com Produto)

### Visão Geral
Adicionar o episódio 32 com 15 menções de produtos (incluindo Miriam com 2 produtos). Este será o novo episódio mais antigo do dataset.

---

### Análise de Dados

**Produtos existentes:**
| ID | Nome | Categoria |
|----|------|-----------|
| `google-docs` | Google Docs | Productivity |
| `canva` | Canva | Productivity |
| `google-maps` | Google Maps | Productivity |
| `total-pass` | Total Pass | Fitness |
| `strava` | Strava | Fitness |
| `splitwise` | Splitwise | Business |
| `mercado-livre` | Mercado Livre | Business |
| `trela` | Trela | Business |

**Produtos a criar:**
| ID | Nome | Categoria | URL | Observação |
|----|------|-----------|-----|------------|
| `contracoes` | Contrações | Lifestyle | - | App para acompanhar contrações na gravidez |
| `todoist` | Todoist | Productivity | https://todoist.com | Gerenciador de tarefas |
| `skyview` | SkyView | Entertainment | - | App de astronomia |
| `steto` | Steto | Health | https://stetoapp.com/ | Prescrições e documentos médicos |
| `1password` | 1Password | Productivity | https://1password.com | Gerenciador de senhas |
| `zenchef` | Zenchef | Business | https://zenchef.com | Software para restaurantes |

**Pessoas existentes:**
| ID | Nome |
|----|------|
| `aiquis` | Aíquis |
| `arthur` | Arthur |
| `boss` | Boss |
| `nana` | Nana |
| `pri-chagas` | Pri Chagas |
| `wilson-moraes` | Wilson Moraes |
| `miriam` | Miriam |
| `paulo` | Paulo |
| `andrezao` | Andrezão |
| `lucas-mattos` | Lucas Mattos |
| `pilon` | Pilon |
| `ana-romeu` | Ana Romeu |

**Pessoas a criar:**
| ID | Nome | Observação |
|----|------|------------|
| `sala` | Sala | Novo participante |
| `marmerola` | Marmerola | Novo participante |

---

### Novos Dados a Adicionar

**1 Episódio:**
| ID | Título | Data |
|----|--------|------|
| 32 | O flop do AI Pin e a relação do Poker com Produto | 2024-04-17 |

**2 Novas Pessoas:**
| ID | Nome |
|----|------|
| `sala` | Sala |
| `marmerola` | Marmerola |

**6 Novos Produtos:**
| ID | Nome | Categoria | URL |
|----|------|-----------|-----|
| `contracoes` | Contrações | Lifestyle | - |
| `todoist` | Todoist | Productivity | https://todoist.com |
| `skyview` | SkyView | Entertainment | - |
| `steto` | Steto | Health | https://stetoapp.com/ |
| `1password` | 1Password | Productivity | https://1password.com |
| `zenchef` | Zenchef | Business | https://zenchef.com |

**15 Menções:**
| Pessoa | Produto |
|--------|---------|
| Aíquis | Google Docs |
| Arthur | Canva |
| Boss | Contrações |
| Nana | Maps (Google Maps) |
| Pri Chagas | Todoist |
| Wilson de Moraes | Total Pass |
| Miriam | Strava |
| Paulo | Splitwise |
| Andrezão | SkyView |
| Lucas Mattos | Steto |
| Pilon | Mercado Livre |
| Sala | 1Password |
| Miriam | Steto |
| Marmerola | Trela |
| Ana Romeu | Zenchef |

---

### Arquivo a Modificar
`src/data/mentions.ts`

---

### Detalhes Técnicos

**Passo 1 - Adicionar episódio** (inserir antes do episódio 33):
```typescript
  {
    id: 32,
    title: "O flop do AI Pin e a relação do Poker com Produto",
    date: "2024-04-17",
    description: "Discussão sobre o fracasso do AI Pin da Humane e a relação entre estratégias de poker e produto.",
  },
```

**Passo 2 - Adicionar produtos novos:**

Lifestyle:
```typescript
  { id: "contracoes", name: "Contrações", category: "Lifestyle" },
```

Productivity:
```typescript
  { id: "todoist", name: "Todoist", category: "Productivity", url: "https://todoist.com" },
  { id: "1password", name: "1Password", category: "Productivity", url: "https://1password.com" },
```

Entertainment:
```typescript
  { id: "skyview", name: "SkyView", category: "Entertainment" },
```

Health:
```typescript
  { id: "steto", name: "Steto", category: "Health", url: "https://stetoapp.com/" },
```

Business:
```typescript
  { id: "zenchef", name: "Zenchef", category: "Business", url: "https://zenchef.com" },
```

**Passo 3 - Adicionar pessoas:**
```typescript
  // Episode 32 contributors
  { id: "sala", name: "Sala" },
  { id: "marmerola", name: "Marmerola" },
```

**Passo 4 - Adicionar menções** (inserir antes do Episode 33):
```typescript
  // Episode 32
  { id: "m32-1", episodeId: 32, personId: "aiquis", productId: "google-docs" },
  { id: "m32-2", episodeId: 32, personId: "arthur", productId: "canva" },
  { id: "m32-3", episodeId: 32, personId: "boss", productId: "contracoes" },
  { id: "m32-4", episodeId: 32, personId: "nana", productId: "google-maps" },
  { id: "m32-5", episodeId: 32, personId: "pri-chagas", productId: "todoist" },
  { id: "m32-6", episodeId: 32, personId: "wilson-moraes", productId: "total-pass" },
  { id: "m32-7", episodeId: 32, personId: "miriam", productId: "strava" },
  { id: "m32-8", episodeId: 32, personId: "paulo", productId: "splitwise" },
  { id: "m32-9", episodeId: 32, personId: "andrezao", productId: "skyview" },
  { id: "m32-10", episodeId: 32, personId: "lucas-mattos", productId: "steto" },
  { id: "m32-11", episodeId: 32, personId: "pilon", productId: "mercado-livre" },
  { id: "m32-12", episodeId: 32, personId: "sala", productId: "1password" },
  { id: "m32-13", episodeId: 32, personId: "miriam", productId: "steto" },
  { id: "m32-14", episodeId: 32, personId: "marmerola", productId: "trela" },
  { id: "m32-15", episodeId: 32, personId: "ana-romeu", productId: "zenchef" },
```

---

### Resumo de Alterações

| Item | Quantidade |
|------|------------|
| Episódio | 1 |
| Pessoas novas | 2 |
| Produtos novos | 6 |
| Menções | 15 |

### Notas
- Google Docs, Canva, Google Maps, Total Pass, Strava, Splitwise, Mercado Livre e Trela já existem e serão reutilizados
- Miriam aparece 2 vezes neste episódio (Strava e Steto)
- "Maps" no input refere-se ao Google Maps existente
- "Wilson de Moraes" corresponde ao ID `wilson-moraes` já existente
- Steto é um app de saúde para prescrições médicas digitais
- SkyView é um app de astronomia para identificar estrelas e constelações
- 1Password é um gerenciador de senhas
- Zenchef é um software de gestão para restaurantes

