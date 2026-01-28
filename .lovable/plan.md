
## Plano: Corrigir "Latest Episode" para Mostrar o Episódio Mais Recente por Data

### Problema

O card "Latest Episode" no dashboard usa `episodes[episodes.length - 1]`, que pega o último episódio na ordem do array. Quando episódios antigos são adicionados ao banco de dados, o card mostra incorretamente esses episódios antigos em vez do mais recente (Ep. 103).

### Solução

Ordenar os episódios por data e pegar o primeiro (mais recente), utilizando a função `compareDatesDesc` já existente no projeto.

---

### Arquivo a Modificar

`src/components/dashboard/LatestEpisodeCard.tsx`

---

### Alteração

| Antes | Depois |
|-------|--------|
| `episodes[episodes.length - 1]` | Ordenar por data e pegar o primeiro |

---

### Seção Técnica

**Mudança no código:**

```typescript
// Importar a função de comparação
import { compareDatesDesc } from "@/lib/utils";

// Na função LatestEpisodeCard, trocar:
const latestEpisode = episodes[episodes.length - 1];

// Por:
const latestEpisode = [...episodes].sort((a, b) => compareDatesDesc(a.date, b.date))[0];
```

Esta mudança:
- Cria uma cópia do array para não modificar o original
- Ordena por data (mais recente primeiro) usando a função existente
- Pega o primeiro elemento (episódio mais recente)

---

### Resultado Esperado

O card "Latest Episode" sempre mostrará o episódio com a data mais recente (atualmente Ep. 103 de 2026-01-21), independentemente da ordem em que os episódios são adicionados ao banco de dados.
