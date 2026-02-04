

## Plano: Adicionar Episódio 104 com Menções

### Resumo

Adicionar o episódio 104 "O que esperar do mercado de Produtos em 2026? Papo na Arena Ao Vivo" com todas as 19 menções de produtos da semana.

---

### Alterações no arquivo `src/data/mentions.ts`

#### 1. Adicionar o Episódio 104

Inserir após o episódio 103 (por volta da linha 680):

```typescript
{
  id: 104,
  title: "O que esperar do mercado de Produtos em 2026? Papo na Arena Ao Vivo",
  date: "2026-02-04",
  description: "Discussão sobre as expectativas do mercado de produtos para 2026.",
  youtubeLink: "https://www.youtube.com/watch?v=0ollpnSCo6A",
  spotifyLink: "https://open.spotify.com/episode/60JK89tSaF0cqDak74NEfE",
},
```

---

#### 2. Adicionar Novos Produtos (5 produtos)

| ID | Nome | Categoria | URL |
|----|------|-----------|-----|
| `cartola` | Cartola | Entertainment | https://cartola.globo.com/ |
| `super-listo` | Super Listo | Lifestyle | - |
| `fincell` | Fincell | Finance | https://www.fincell.eu/ |
| `games-desempenho-neurologico` | Games de desempenho neurológico | Entertainment | - |
| `pastenow` | PasteNow | Productivity | https://pastenow.app/ |

---

#### 3. Adicionar Novas Pessoas (12 pessoas)

| ID | Nome |
|----|------|
| `marcos-masuchi` | Marcos Masuchi |
| `renata-gagetti` | Renata Gagetti |
| `kelly-costa` | Kelly Costa |
| `gabriel-hamu` | Gabriel Hamú |
| `renata-de-lima` | Renata de Lima |
| `jonathan-siqueira` | Jonathan Siqueira |
| `camila-ep104` | Camila |
| `claudio-tai` | Claudio Tai |
| `emerson-catani` | Emerson Catani |
| `isaac-santos` | Isaac Santos |
| `ana-carolina-portuga` | Ana Carolina Portuga |
| `ulisses-scorchio` | Ulisses Scorchio |

Nota: Usarei `camila-ep104` para evitar conflito com outras "Camilas" já existentes (há `camila-jordana`, `camila-ruas`, `camila-meneghetti`).

---

#### 4. Adicionar as 19 Menções do Episódio 104

```typescript
// Episode 104
{ id: "m104-1", episodeId: 104, personId: "aiquis", productId: "samsung-health" },
{ id: "m104-2", episodeId: 104, personId: "arthur", productId: "ray-ban-meta" },
{ id: "m104-3", episodeId: 104, personId: "marcos-masuchi", productId: "n8n" },
{ id: "m104-4", episodeId: 104, personId: "marcos-masuchi", productId: "perplexity" },
{ id: "m104-5", episodeId: 104, personId: "renata-gagetti", productId: "lovable" },
{ id: "m104-6", episodeId: 104, personId: "kelly-costa", productId: "notebooklm" },
{ id: "m104-7", episodeId: 104, personId: "kelly-costa", productId: "gemini" },
{ id: "m104-8", episodeId: 104, personId: "gabriel-hamu", productId: "claude-code" },
{ id: "m104-9", episodeId: 104, personId: "renata-de-lima", productId: "notebooklm" },
{ id: "m104-10", episodeId: 104, personId: "jonathan-siqueira", productId: "ray-ban-meta" },
{ id: "m104-11", episodeId: 104, personId: "daniel-gonzalez", productId: "replit" },
{ id: "m104-12", episodeId: 104, personId: "camila-ep104", productId: "spotify" },
{ id: "m104-13", episodeId: 104, personId: "claudio-tai", productId: "cartola" },
{ id: "m104-14", episodeId: 104, personId: "emerson-catani", productId: "super-listo" },
{ id: "m104-15", episodeId: 104, personId: "isaac-santos", productId: "fincell" },
{ id: "m104-16", episodeId: 104, personId: "ana-carolina-portuga", productId: "alexa" },
{ id: "m104-17", episodeId: 104, personId: "vanessa-silva", productId: "airbnb" },
{ id: "m104-18", episodeId: 104, personId: "ulisses-scorchio", productId: "games-desempenho-neurologico" },
{ id: "m104-19", episodeId: 104, personId: "lucas-mattos", productId: "pastenow" },
```

---

### Resumo das Adições

| Item | Quantidade |
|------|------------|
| Episódio | 1 |
| Novos Produtos | 5 |
| Novas Pessoas | 12 |
| Menções | 19 |

---

### Produtos e Pessoas já Existentes (Reutilizados)

**Produtos existentes:** Samsung Health, Ray-Ban Meta, N8N, Perplexity, Lovable, NotebookLM, Gemini, Claude Code, Replit, Spotify, Alexa, Airbnb

**Pessoas existentes:** Aíquis, Arthur, Daniel Gonzalez, Vanessa Silva, Lucas Mattos

