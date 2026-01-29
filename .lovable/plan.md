

## Plano: Adicionar Episódios 56 e 55 com Menções

### Resumo

Adicionar dois episódios históricos de outubro/2024 com todas as suas menções:
- **Episódio 56** (22/10/2024): "Carreira internacional, Mulheres na Liderança e Maternidade - Gisele Góes (Chime)" - 14 menções
- **Episódio 55** (15/10/2024): "Gestão de Plataformas e APIs para PMs não técnicos - um papo com Sheila Chang" - 11 menções

---

### Arquivo a Modificar

`src/data/mentions.ts`

---

## Episódio 56

### Dados do Episódio
| ID | Título | Data |
|----|--------|------|
| 56 | Carreira internacional, Mulheres na Liderança e Maternidade - Gisele Góes (Chime) | 2024-10-22 |

### Novos Produtos (8)
| ID | Nome | Categoria | Nota |
|----|------|-----------|------|
| uber-taxi | Uber Taxi | Transportation | Variante do Uber (parentId: uber) |
| standing-desk-pichau | Standing Desk (Pichau) | Hardware | |
| township | Township | Entertainment | Jogo |
| praktika | Praktika | Education | App de idiomas |
| omnivore | Omnivore | Productivity | Read-it-later app |
| age-of-empires-mobile | Age of Empires Mobile | Entertainment | |
| trela | Trela | Business | Já existe! |
| sams-club | Sam's Club | Retail | Novo categoria |

### Novas Pessoas (4)
| ID | Nome |
|----|------|
| alex | Alex |
| leandro | Leandro |
| amanda | Amanda |
| portinho | Portinho | (já existe!)

### Menções (14)
| Pessoa | Produto |
|--------|---------|
| Aíquis | Uber Taxi |
| Arthur | Standing Desk (Pichau) |
| Nana | Township |
| Amanda | Praktika |
| Alex | Zé Delivery |
| Glauco | ChatGPT |
| Portinho | Claude |
| Leandro | Omnivore |
| Beiçola | WhatsApp |
| Danilera | Age of Empires Mobile |
| Mat | Trela |
| Karina | Training Peaks |
| Brian | PicPay |
| Cauê | Sam's Club |

---

## Episódio 55

### Dados do Episódio
| ID | Título | Data |
|----|--------|------|
| 55 | Gestão de Plataformas e APIs para PMs não técnicos - um papo com Sheila Chang | 2024-10-15 |

### Novos Produtos (6)
| ID | Nome | Categoria | Nota |
|----|------|-----------|------|
| hostinger | Hostinger | Development | Produto principal |
| hostinger-construtor | Hostinger (Construtor de sites) | Development | Variante (parentId: hostinger) |
| app-condominio | App do Condomínio | Productivity | Genérico |
| scrabble | Scrabble | Entertainment | Jogo de palavras |
| app-maratona-chicago | App da Maratona de Chicago | Fitness | |
| rappi | Rappi | Delivery | |
| nike | Nike | Retail | App da Nike |

**Produtos já existentes (reutilizar):**
- `strava` (Fitness)
- `chatgpt` (AI Tools)
- `splitwise` (Business)
- `airbnb` (Travel)
- `sams-club` (Retail) - criado no ep 56

### Novas Pessoas (2)
| ID | Nome |
|----|------|
| sheila-chang | Sheila Chang |
| larissa | Larissa |

### Menções (11)
| Pessoa | Produto |
|--------|---------|
| Arthur | Strava |
| Aíquis | ChatGPT |
| Sheila Chang | Hostinger (Construtor de sites) |
| Cauê | Splitwise |
| Larissa | Airbnb |
| Karina | App do Condomínio |
| Maria | Scrabble |
| Mat | App da Maratona de Chicago |
| Lucas | Rappi |
| Danilera | Sam's Club |
| Glauco | Nike |

---

### Resumo de Alterações

| Seção | Adições |
|-------|---------|
| Episodes | +2 (55, 56) |
| Products | +13 novos |
| People | +5 novos |
| Mentions | +25 (14 + 11) |

---

### Seção Técnica

**Episódios (inserir no início do array antes do 57):**

```typescript
{
  id: 55,
  title: "Gestão de Plataformas e APIs para PMs não técnicos - um papo com Sheila Chang",
  date: "2024-10-15",
  description: "Entrevista com Sheila Chang sobre gestão de plataformas e APIs.",
},
{
  id: 56,
  title: "Carreira internacional, Mulheres na Liderança e Maternidade - Gisele Góes (Chime)",
  date: "2024-10-22",
  description: "Entrevista com Gisele Góes sobre carreira internacional e liderança feminina.",
},
```

**Produtos novos:**

```typescript
// Transportation (variante do Uber)
{ id: "uber-taxi", name: "Uber Taxi", category: "Transportation", parentId: "uber" },

// Hardware
{ id: "standing-desk-pichau", name: "Standing Desk (Pichau)", category: "Hardware" },

// Entertainment
{ id: "township", name: "Township", category: "Entertainment" },
{ id: "age-of-empires-mobile", name: "Age of Empires Mobile", category: "Entertainment" },
{ id: "scrabble", name: "Scrabble", category: "Entertainment" },

// Education
{ id: "praktika", name: "Praktika", category: "Education" },

// Productivity
{ id: "omnivore", name: "Omnivore", category: "Productivity" },
{ id: "app-condominio", name: "App do Condomínio", category: "Productivity" },

// Development (Hostinger + variante)
{ id: "hostinger", name: "Hostinger", category: "Development", url: "https://hostinger.com" },
{ id: "hostinger-construtor", name: "Hostinger (Construtor de sites)", category: "Development", parentId: "hostinger" },

// Fitness
{ id: "app-maratona-chicago", name: "App da Maratona de Chicago", category: "Fitness" },

// Delivery
{ id: "rappi", name: "Rappi", category: "Delivery", url: "https://rappi.com" },

// Retail (nova categoria)
{ id: "sams-club", name: "Sam's Club", category: "Retail", url: "https://samsclub.com.br" },
{ id: "nike", name: "Nike", category: "Retail", url: "https://nike.com" },
```

**Pessoas novas:**

```typescript
{ id: "sheila-chang", name: "Sheila Chang" },
{ id: "alex", name: "Alex" },
{ id: "amanda", name: "Amanda" },
{ id: "larissa", name: "Larissa" },
{ id: "leandro", name: "Leandro" },
```

**Menções Episódio 55:**

```typescript
// Episode 55
{ id: "m55-1", episodeId: 55, personId: "arthur", productId: "strava" },
{ id: "m55-2", episodeId: 55, personId: "aiquis", productId: "chatgpt" },
{ id: "m55-3", episodeId: 55, personId: "sheila-chang", productId: "hostinger-construtor" },
{ id: "m55-4", episodeId: 55, personId: "caue", productId: "splitwise" },
{ id: "m55-5", episodeId: 55, personId: "larissa", productId: "airbnb" },
{ id: "m55-6", episodeId: 55, personId: "karina", productId: "app-condominio" },
{ id: "m55-7", episodeId: 55, personId: "maria", productId: "scrabble" },
{ id: "m55-8", episodeId: 55, personId: "mat", productId: "app-maratona-chicago" },
{ id: "m55-9", episodeId: 55, personId: "lucas", productId: "rappi" },
{ id: "m55-10", episodeId: 55, personId: "danilera", productId: "sams-club" },
{ id: "m55-11", episodeId: 55, personId: "glauco", productId: "nike" },
```

**Menções Episódio 56:**

```typescript
// Episode 56
{ id: "m56-1", episodeId: 56, personId: "aiquis", productId: "uber-taxi" },
{ id: "m56-2", episodeId: 56, personId: "arthur", productId: "standing-desk-pichau" },
{ id: "m56-3", episodeId: 56, personId: "nana", productId: "township" },
{ id: "m56-4", episodeId: 56, personId: "amanda", productId: "praktika" },
{ id: "m56-5", episodeId: 56, personId: "alex", productId: "ze-delivery" },
{ id: "m56-6", episodeId: 56, personId: "glauco", productId: "chatgpt" },
{ id: "m56-7", episodeId: 56, personId: "portinho", productId: "claude" },
{ id: "m56-8", episodeId: 56, personId: "leandro", productId: "omnivore" },
{ id: "m56-9", episodeId: 56, personId: "beicola", productId: "whatsapp" },
{ id: "m56-10", episodeId: 56, personId: "danilera", productId: "age-of-empires-mobile" },
{ id: "m56-11", episodeId: 56, personId: "mat", productId: "trela" },
{ id: "m56-12", episodeId: 56, personId: "karina", productId: "training-peaks" },
{ id: "m56-13", episodeId: 56, personId: "brian", productId: "picpay" },
{ id: "m56-14", episodeId: 56, personId: "caue", productId: "sams-club" },
```

---

### Hierarquia de Variantes

```text
Uber
└── Uber Taxi (parentId: uber)

Hostinger  
└── Hostinger (Construtor de sites) (parentId: hostinger)
```

Nota: Clicar em "Uber Taxi" ou "Hostinger (Construtor de sites)" levará ao produto principal devido à função `getProductLinkId()` já implementada.

