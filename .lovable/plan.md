

## Plano: Adicionar Episódios e Produtos de 2024

### Resumo

Adicionar 4 episódios de 2024 (61-64) e suas respectivas menções ao arquivo `src/data/mentions.ts`.

---

### Arquivo a Modificar

`src/data/mentions.ts`

---

### 1. Novos Episódios (4)

Adicionar ao array `episodes` (antes do comentário "2025 Episodes"):

| ID | Título | Data |
|----|--------|------|
| 61 | Como saber e quais os sinais se um produto vai dar bom ou não? | 2024-11-26 |
| 62 | Comunicação executiva & Como dar melhores feedbacks de design? | 2024-12-03 |
| 63 | Chegou ao fim a camada de GPMs? | 2024-12-10 |
| 64 | Retrospectiva Produteira 2024: Foi um péssimo ano para a área de produto? | 2024-12-17 |

---

### 2. Novos Produtos (20+)

Produtos que precisam ser criados:

| ID | Nome | Categoria |
|----|------|-----------|
| balatro | Balatro | Entertainment |
| ray-ban-meta | Ray-Ban Meta | Hardware |
| drogasil | Drogasil | Wellness |
| airfryer-ritalobo | Airfryer Ritalobo | Lifestyle |
| pipefy | Pipefy | Productivity |
| thefork | TheFork | Lifestyle |
| instacarro | Instacarro | Transportation |
| lindt | Lindt | Lifestyle |
| dualsense | DualSense | Entertainment |
| ventilador-mondial | Ventilador Mondial Super Turbo VTX 8 Pás | Lifestyle |
| gentler-streak | Gentler Streak | Fitness |
| plague-evolved | Plague Evolved | Entertainment |
| filebrowser-go | FileBrowser Go | Productivity |
| c6-ia | C6 (IA) | Finance |
| sos-golpes | SOS Golpes | Finance |
| munhequeira | Munhequeira | Fitness |
| zoom-ai-companion | Zoom AI Companion | AI Tools |
| pampers-club | Pampers Club | Lifestyle |
| sprout | Sprout | Productivity |
| pillow-top-emma | Pillow Top Emma | Lifestyle |
| pokemon-tcg | Pokémon TCG | Entertainment |
| netflix | Netflix | Entertainment |
| reddit | Reddit | Social |
| pinterest | Pinterest | Social |
| sp-parking | SP+ Parking | Transportation |

**Produtos já existentes (reutilizar):**
- `n8n` (N8N)
- `duolingo` (Duolingo)
- `kindle` (Kindle)
- `mercado-bitcoin` (Mercado Bitcoin)
- `livelo` (Livelo)
- `picpay` (PicPay)
- `chatgpt` (ChatGPT)
- `gymrats` (GymRats)
- `napkin` (Napkin)
- `magie` (Magie)
- `moises-ai` (Moises.AI)
- `total-pass` (Total Pass)
- `liti` (Liti)
- `teams` (Teams)

---

### 3. Novas Pessoas (18)

| ID | Nome |
|----|------|
| boss | Boss |
| andrézinho | Andrézinho |
| mila | Mila |
| karina | Karina (já existe) |
| beicola | Beiçola |
| lavin | Lavin |
| clovis | Clovis |
| alice | Alice |
| dezao | Dezão |
| murilo | Murilo |
| maria | Maria |

**Pessoas já existentes (reutilizar):**
- `aiquis`, `arthur`, `nina`, `efrem`, `nana`, `lucas`, `nery`, `glauco`, `jessica`, `danilera`, `cloves`, `mat`, `brian`, `caue`, `danilo-penteado`, `alana`, `bruna`

---

### 4. Novas Menções (42)

#### Episódio 64 (17 menções)
```
Aíquis → Balatro
Arthur → Ray-Ban Meta
Nina → Drogasil
Efren → Napkin (existente)
Boss → N8n (existente)
Nana → Mercado Bitcoin (existente)
Andrézinho → Duolingo (existente)
Lucas → Airfryer Ritalobo
Mila → Pipefy
Nery → TheFork
Karina → Kindle (existente)
Pilon → Instacarro
Beiçola → Lindt
Bruna → GymRats (existente)
Lavin → Teams/Office (usar teams existente)
Clovis → Magie (existente)
Alice → DualSense
```

#### Episódio 63 (10 menções)
```
Aíquis → Ventilador Mondial
Arthur → Gentler Streak
Alana → Duolingo (existente)
Dezão → Moises.AI (existente)
Lukão → Plague Evolved
Glauco → Total Pass (existente)
Jéssica → Liti (existente)
Nery → FileBrowser Go
Danilera → C6 (IA)
Murilo → SOS Golpes
```

#### Episódio 62 (6 menções)
```
Aíquis → Munhequeira
Arthur → Zoom AI Companion
Mat → Pampers Club
Nana → Livelo (existente)
Glauco → PicPay (existente)
Cloves → ChatGPT (existente)
```

#### Episódio 61 (8 menções)
```
Arthur → Sprout
Aíquis → Microsoft Edge (busca de cupons)
Danilo → Pillow Top Emma
Cauê → Pokémon TCG
Maria → Netflix
Brian → Reddit
Lucas → Pinterest
Mat → SP+ Parking
```

---

### Resumo de Alterações

| Seção | Adições |
|-------|---------|
| Episodes | +4 (61-64) |
| Products | ~25 novos |
| People | ~11 novos |
| Mentions | +42 |

---

### Seção Técnica

As alterações seguirão exatamente o padrão existente:

**Episódios:**
```typescript
// 2024 Episodes
{
  id: 64,
  title: "Retrospectiva Produteira 2024: Foi um péssimo ano para a área de produto?",
  date: "2024-12-17",
  description: "Retrospectiva do ano de 2024 para a área de produto.",
},
```

**Produtos:**
```typescript
{ id: "balatro", name: "Balatro", category: "Entertainment" },
{ id: "ray-ban-meta", name: "Ray-Ban Meta", category: "Hardware" },
```

**Pessoas:**
```typescript
{ id: "boss", name: "Boss" },
{ id: "beicola", name: "Beiçola" },
```

**Menções:**
```typescript
// Episode 64
{ id: "m64-1", episodeId: 64, personId: "aiquis", productId: "balatro" },
{ id: "m64-2", episodeId: 64, personId: "arthur", productId: "ray-ban-meta" },
```

