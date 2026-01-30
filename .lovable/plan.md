

## Plano: Adicionar Episódio 29 (Cagan ON FIRE!)

### Visão Geral
Adicionar o episódio 29 com 10 menções de produtos. Este será o novo episódio mais antigo do dataset (antes do episódio 30).

---

### Análise de Dados

**Produtos existentes:**
| ID | Nome | Categoria |
|----|------|-----------|
| `chatgpt` | ChatGPT | AI Tools |
| `instagram` | Instagram | Social |
| `youtube` | Youtube | Entertainment |
| `tiktok` | TikTok | Social |

**Produtos a criar:**
| ID | Nome | Categoria | URL | Observação |
|----|------|-----------|-----|------------|
| `drive-pay-as-you-drive` | Drive | Insurance | - | App pay as you drive (seguro por km) |
| `polytopia` | Polytopia | Entertainment | https://polytopia.io/ | Jogo de estratégia |
| `awto` | Awto | Transportation | https://site.awto.com.br/ | Plataforma de carros |
| `camera` | Camera | Productivity | - | App de câmera |
| `formula-1` | Fórmula 1 | Entertainment | - | App oficial da F1 |
| `ianygo` | iAnyGo | Productivity | https://www.ianygo.net/ | App para alterar localização GPS |

**Pessoas existentes:**
| ID | Nome |
|----|------|
| `arthur` | Arthur |
| `aiquis` | Aíquis |
| `luiz` | Luiz |
| `pilon` | Pilon |
| `fabinho` | Fabinho |
| `andrezinho` | Andrézinho |
| `henrique` | Henrique |
| `luquita` | Luquita |
| `anonimo` | Anônimo |

**Pessoas a criar:**
| ID | Nome | Observação |
|----|------|------------|
| `renato-bassi` | Renato Bassi | Diferente de "renato" existente |

---

### Novos Dados a Adicionar

**1 Episódio:**
| ID | Título | Data |
|----|--------|------|
| 29 | Cagan ON FIRE! | 2024-03-12 |

**1 Nova Pessoa:**
| ID | Nome |
|----|------|
| `renato-bassi` | Renato Bassi |

**6 Novos Produtos:**
| ID | Nome | Categoria | URL |
|----|------|-----------|-----|
| `drive-pay-as-you-drive` | Drive | Insurance | - |
| `polytopia` | Polytopia | Entertainment | https://polytopia.io/ |
| `awto` | Awto | Transportation | https://site.awto.com.br/ |
| `camera` | Camera | Productivity | - |
| `formula-1` | Fórmula 1 | Entertainment | - |
| `ianygo` | iAnyGo | Productivity | https://www.ianygo.net/ |

**10 Menções:**
| Pessoa | Produto |
|--------|---------|
| Arthur | ChatGPT |
| Aíquis | Instagram |
| Luiz | Drive |
| Pilon | Polytopia |
| Renato Bassi | Awto |
| Fabinho | Camera |
| Andrezinho | Youtube |
| Henrique | TikTok |
| Luquita | Fórmula 1 |
| Anônimo | iAnyGo |

---

### Arquivo a Modificar
`src/data/mentions.ts`

---

### Detalhes Técnicos

**Passo 1 - Adicionar episódio** (inserir antes do episódio 30, início da lista):
```typescript
  {
    id: 29,
    title: "Cagan ON FIRE!",
    date: "2024-03-12",
    description: "Discussão sobre as ideias de Marty Cagan e sua aplicação no mundo de produto.",
  },
```

**Passo 2 - Adicionar produtos novos:**

Insurance:
```typescript
  { id: "drive-pay-as-you-drive", name: "Drive", category: "Insurance" },
```

Entertainment:
```typescript
  { id: "polytopia", name: "Polytopia", category: "Entertainment", url: "https://polytopia.io/" },
  { id: "formula-1", name: "Fórmula 1", category: "Entertainment" },
```

Transportation:
```typescript
  { id: "awto", name: "Awto", category: "Transportation", url: "https://site.awto.com.br/" },
```

Productivity:
```typescript
  { id: "camera", name: "Camera", category: "Productivity" },
  { id: "ianygo", name: "iAnyGo", category: "Productivity", url: "https://www.ianygo.net/" },
```

**Passo 3 - Adicionar pessoa:**
```typescript
  // Episode 29 contributor
  { id: "renato-bassi", name: "Renato Bassi" },
```

**Passo 4 - Adicionar menções** (inserir antes do Episode 30):
```typescript
  // Episode 29
  { id: "m29-1", episodeId: 29, personId: "arthur", productId: "chatgpt" },
  { id: "m29-2", episodeId: 29, personId: "aiquis", productId: "instagram" },
  { id: "m29-3", episodeId: 29, personId: "luiz", productId: "drive-pay-as-you-drive" },
  { id: "m29-4", episodeId: 29, personId: "pilon", productId: "polytopia" },
  { id: "m29-5", episodeId: 29, personId: "renato-bassi", productId: "awto" },
  { id: "m29-6", episodeId: 29, personId: "fabinho", productId: "camera" },
  { id: "m29-7", episodeId: 29, personId: "andrezinho", productId: "youtube" },
  { id: "m29-8", episodeId: 29, personId: "henrique", productId: "tiktok" },
  { id: "m29-9", episodeId: 29, personId: "luquita", productId: "formula-1" },
  { id: "m29-10", episodeId: 29, personId: "anonimo", productId: "ianygo" },
```

---

### Resumo de Alterações

| Item | Quantidade |
|------|------------|
| Episódio | 1 |
| Pessoas novas | 1 |
| Produtos novos | 6 |
| Menções | 10 |

### Notas
- ChatGPT, Instagram, Youtube e TikTok já existem e serão reutilizados
- "Drive" é um app de seguro "pay as you drive" (paga por km rodado), não Google Drive
- "Renato Bassi" é diferente do "Renato" existente (ep. 31), então será criado com ID separado
- Polytopia é um jogo de estratégia turn-based
- Awto é uma plataforma de carros compartilhados brasileira
- iAnyGo é um app para alterar localização GPS (usado para jogos como Pokémon GO)
- "Camera" refere-se ao app de câmera nativo ou genérico

