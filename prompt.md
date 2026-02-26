**Prompt para recriar o Papo na Arena Radar:**

Crie um dashboard/radar de produtos mencionados no podcast "Papo na Arena" (YouTube/Spotify). O app rastreia quais produtos, serviços e ferramentas são citados pelos participantes em cada episódio.

**Dados centrais (hardcoded, sem backend):**

- **Episódios**: id, título, data, participantes, link do YouTube
- **Produtos**: id, nome, categoria (ex: "AI Tools", "Hardware", "Food & Drink", "Development"), URL opcional, e suporte a variantes (parentId) e combos (alsoCredits)
- **Pessoas**: id, nome, papel (host/guest), avatar opcional
- **Menções**: liga episódio + pessoa + produto (quem citou o quê em qual episódio)

**Páginas:**

1.  **Dashboard** (home): cards de stats (total episódios, produtos, categorias, pessoas, menções), gráfico de barras dos top produtos, gráfico de linhas de tendência por episódio, pie chart de categorias, card do último episódio, menções recentes
2.  **Episódios**: lista de todos os episódios com data e contagem de menções; página de detalhe mostrando participantes e produtos mencionados por cada um
3.  **Produtos**: lista/leaderboard de produtos ordenados por menções; página de detalhe com histórico de menções por episódio, quem mencionou, e variantes agregadas ao produto pai
4.  **Categorias**: leaderboard de categorias; página de detalhe com todos os produtos daquela categoria
5.  **Pessoas**: lista de participantes; página de detalhe com todos os produtos que a pessoa já mencionou

**Funcionalidades importantes:**

- Produtos com `parentId` agregam menções ao produto pai (ex: "ChatGPT" → pai "OpenAI")
- Produtos combo (`alsoCredits`) creditam menção a múltiplos produtos
- Sidebar com navegação entre seções
- Links entre entidades (clicar num produto leva ao detalhe, clicar numa pessoa leva ao perfil)
- Gráficos com Recharts
- Dark theme, design limpo com shadcn/ui

**Stack:** React + Tailwind CSS + shadcn/ui + Recharts
