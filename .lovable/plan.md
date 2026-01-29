
## Plano: Adicionar Episódio 45 (Claude no Brasil, saídas da Open AI e a Nvidia pega no flagra pirateando)

### Visão Geral
Adicionar o episódio 45 com 13 menções de produtos. Este episódio tem algumas particularidades interessantes:
- Menções combo (Arthur + Aíquis mencionaram o mesmo produto "Mosaico do Youtube na CazéTV")
- Variantes com contexto (Globo Esporte com diferentes contextos)

---

### Análise de Produtos

**Produtos existentes:**
| ID | Nome |
|----|------|
| `youtube` | Youtube |
| `cazetv` | CazéTV |
| `wise` | Wise |
| `nordvpn` | NordVPN |
| `liti` | Liti |

**Pessoas existentes:**
| ID | Nome |
|----|------|
| `nana` | Nana |
| `andrezao` | Andrezão |
| `mateus` | Mateus |
| `marina` | Marina |
| `bruno` | Bruno |

---

### Novos Dados a Adicionar

**1 Episódio:**
| ID | Título | Data |
|----|--------|------|
| 45 | Claude no Brasil, saídas da Open AI e a Nvidia pega no flagra pirateando | 2024-08-07 |

**7 Novos Produtos:**
| ID | Nome | Categoria | URL | Observação |
|----|------|-----------|-----|------------|
| `mosaico-youtube-cazetv` | Mosaico do Youtube na CazéTV | Entertainment | - | Combo: alsoCredits: ["youtube", "cazetv"] |
| `globo-esporte` | Globo Esporte | Entertainment | https://ge.globo.com | - |
| `app-olimpiadas` | App das Olimpíadas | Entertainment | - | - |
| `nomad` | Nomad | Finance | https://www.nomadglobal.com/ | Conta digital para brasileiros |
| `potion-explosion` | Potion Explosion | Entertainment | - | Jogo de tabuleiro |
| `bradesco-saude` | Bradesco Saúde | Health | https://www.bradescoseguros.com.br/ | Plano de saúde (diferente de Bradesco Seguros) |
| `selina` | Selina | Travel | https://www.selinahotels.com/ | - |

**13 Menções:**
| Pessoa | Produto | Observação |
|--------|---------|------------|
| Arthur | Mosaico do Youtube na CazéTV | combo youtube+cazetv |
| Arthur | Globo Esporte | context: "Push Notification" |
| Aíquis | Mosaico do Youtube na CazéTV | combo youtube+cazetv |
| Aíquis | App das Olimpíadas | - |
| Nana | CazéTV | produto existente |
| Danilera | Globo Esporte | context: "Olimpíadas" |
| Bruno | Youtube | produto existente |
| Marina | Wise | produto existente |
| Marina | Nomad | - |
| Andrezão | Potion Explosion | - |
| Glauco | Bradesco Saúde | - |
| Lucas | Selina | - |
| Mateus | NordVPN | produto existente |

---

### Arquivo a Modificar
`src/data/mentions.ts`

---

### Detalhes Técnicos

**Passo 1 - Adicionar episódio** (inserir antes do episódio 46, ~linha 38):
```typescript
  {
    id: 45,
    title: "Claude no Brasil, saídas da Open AI e a Nvidia pega no flagra pirateando",
    date: "2024-08-07",
    description: "Discussão sobre Claude chegando ao Brasil, movimentações na OpenAI e controvérsia envolvendo Nvidia.",
  },
```

**Passo 2 - Adicionar categoria Health** (se não existir, após Insurance):
```typescript
  // Health
  { id: "bradesco-saude", name: "Bradesco Saúde", category: "Health", url: "https://www.bradescoseguros.com.br/" },
```

**Passo 3 - Adicionar produtos** (nas seções apropriadas):

Entertainment (~linha 699, após cazetv):
```typescript
  { id: "mosaico-youtube-cazetv", name: "Mosaico do Youtube na CazéTV", category: "Entertainment", alsoCredits: ["youtube", "cazetv"] },
  { id: "globo-esporte", name: "Globo Esporte", category: "Entertainment", url: "https://ge.globo.com" },
  { id: "app-olimpiadas", name: "App das Olimpíadas", category: "Entertainment" },
  { id: "potion-explosion", name: "Potion Explosion", category: "Entertainment" },
```

Finance (~linha 720):
```typescript
  { id: "nomad", name: "Nomad", category: "Finance", url: "https://www.nomadglobal.com/" },
```

Travel (~linha 810):
```typescript
  { id: "selina", name: "Selina", category: "Travel", url: "https://www.selinahotels.com/" },
```

**Passo 4 - Adicionar menções** (inserir antes do Episode 46, ~linha 1115):
```typescript
  // Episode 45
  { id: "m45-1", episodeId: 45, personId: "arthur", productId: "mosaico-youtube-cazetv" },
  { id: "m45-2", episodeId: 45, personId: "arthur", productId: "globo-esporte", context: "Push Notification" },
  { id: "m45-3", episodeId: 45, personId: "aiquis", productId: "mosaico-youtube-cazetv" },
  { id: "m45-4", episodeId: 45, personId: "aiquis", productId: "app-olimpiadas" },
  { id: "m45-5", episodeId: 45, personId: "nana", productId: "cazetv" },
  { id: "m45-6", episodeId: 45, personId: "danilera", productId: "globo-esporte", context: "Olimpíadas" },
  { id: "m45-7", episodeId: 45, personId: "bruno", productId: "youtube" },
  { id: "m45-8", episodeId: 45, personId: "marina", productId: "wise" },
  { id: "m45-9", episodeId: 45, personId: "marina", productId: "nomad" },
  { id: "m45-10", episodeId: 45, personId: "andrezao", productId: "potion-explosion" },
  { id: "m45-11", episodeId: 45, personId: "glauco", productId: "bradesco-saude" },
  { id: "m45-12", episodeId: 45, personId: "lucas", productId: "selina" },
  { id: "m45-13", episodeId: 45, personId: "mateus", productId: "nordvpn" },
```

---

### Resumo de Alterações

| Item | Quantidade |
|------|------------|
| Episódio | 1 |
| Pessoas novas | 0 |
| Produtos novos | 7 |
| Menções | 13 |

### Notas
- O produto "Mosaico do Youtube na CazéTV" usa `alsoCredits` para creditar tanto Youtube quanto CazéTV
- Globo Esporte tem duas menções com contextos diferentes: "Push Notification" (Arthur) e "Olimpíadas" (Danilera)
- Marina menciona 2 produtos (Wise e Nomad)
- Bradesco Saúde é diferente de Bradesco Seguros (já existente) - um é plano de saúde, outro é seguradora
