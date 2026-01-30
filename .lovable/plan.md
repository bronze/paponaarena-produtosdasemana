

## Plano: Adicionar Episódio 35 (Cultura, silos, aquisições e politicagem)

### Visão Geral
Adicionar o episódio 35 com 5 menções de produtos. Este será o episódio mais antigo do dataset.

---

### Análise de Dados

**Produtos existentes:**
| ID | Nome | Categoria |
|----|------|-----------|
| `whatsapp` | WhatsApp | Business |
| `livelo` | Livelo | Finance |
| `gov-br` | gov.br | Productivity |

**Produtos a criar:**
| ID | Nome | Categoria | Observação |
|----|------|-----------|------------|
| `slack` | Slack | Productivity | Ferramenta de comunicação |
| `zona-azul` | Zona Azul | Productivity | App de estacionamento |

**Pessoas existentes:**
| ID | Nome |
|----|------|
| `arthur` | Arthur |
| `aiquis` | Aíquis |
| `paulo` | Paulo |
| `glauco` | Glauco |

**Pessoa a criar:**
| ID | Nome |
|----|------|
| `cesar` | César |

---

### Novos Dados a Adicionar

**1 Episódio:**
| ID | Título | Data |
|----|--------|------|
| 35 | Cultura, silos, aquisições e politicagem | 2024-05-07 |

**1 Nova Pessoa:**
| ID | Nome |
|----|------|
| `cesar` | César |

**2 Novos Produtos:**
| ID | Nome | Categoria | URL |
|----|------|-----------|-----|
| `slack` | Slack | Productivity | https://slack.com |
| `zona-azul` | Zona Azul | Productivity | - |

**5 Menções:**
| Pessoa | Produto |
|--------|---------|
| Arthur | WhatsApp |
| Aíquis | Livelo |
| César | Slack |
| Paulo | gov.br |
| Glauco | Zona Azul |

---

### Arquivo a Modificar
`src/data/mentions.ts`

---

### Detalhes Técnicos

**Passo 1 - Adicionar episódio** (inserir antes do episódio 36):
```typescript
  {
    id: 35,
    title: "Cultura, silos, aquisições e politicagem",
    date: "2024-05-07",
    description: "Discussão sobre cultura organizacional, silos, aquisições e politicagem no mundo de produto.",
  },
```

**Passo 2 - Adicionar produtos novos:**

Productivity:
```typescript
  { id: "slack", name: "Slack", category: "Productivity", url: "https://slack.com" },
  { id: "zona-azul", name: "Zona Azul", category: "Productivity" },
```

**Passo 3 - Adicionar pessoa:**
```typescript
  { id: "cesar", name: "César" },
```

**Passo 4 - Adicionar menções** (inserir antes do Episode 36):
```typescript
  // Episode 35
  { id: "m35-1", episodeId: 35, personId: "arthur", productId: "whatsapp" },
  { id: "m35-2", episodeId: 35, personId: "aiquis", productId: "livelo" },
  { id: "m35-3", episodeId: 35, personId: "cesar", productId: "slack" },
  { id: "m35-4", episodeId: 35, personId: "paulo", productId: "gov-br" },
  { id: "m35-5", episodeId: 35, personId: "glauco", productId: "zona-azul" },
```

---

### Resumo de Alterações

| Item | Quantidade |
|------|------------|
| Episódio | 1 |
| Pessoas novas | 1 |
| Produtos novos | 2 |
| Menções | 5 |

### Notas
- WhatsApp, Livelo e gov.br já existem e serão reutilizados
- Slack é uma ferramenta de comunicação empresarial da Salesforce
- Zona Azul é o app de estacionamento rotativo digital
- César é um novo participante do podcast

