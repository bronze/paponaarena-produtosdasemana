
## Correção: Data do Episódio 103 Mostrando Dia Errado

### Problema Identificado

A data do episódio 103 **está correta no banco de dados** (`"2026-01-28"`), mas aparece como "Jan 27, 2026" na interface devido a um **bug de fuso horário**.

Quando o JavaScript faz `new Date("2026-01-28")`, ele interpreta a data como **meia-noite UTC**. Ao converter para o horário de Brasília (UTC-3), a data vira 27 de janeiro às 21:00.

---

### Solução

Adicionar `T12:00:00` à string de data para garantir que a conversão de fuso horário não mude o dia:

```typescript
// Antes (bugado)
new Date(episode.date).toLocaleDateString(...)

// Depois (corrigido)
new Date(episode.date + "T12:00:00").toLocaleDateString(...)
```

---

### Arquivos a Modificar

| Arquivo | Linha | Mudança |
|---------|-------|---------|
| `src/pages/Episodes.tsx` | 61 | Adicionar `+ "T12:00:00"` |
| `src/pages/EpisodeDetail.tsx` | 85 | Adicionar `+ "T12:00:00"` |

---

### Por que isso funciona?

Ao usar `"2026-01-28T12:00:00"` (meio-dia), mesmo com a conversão para UTC-3, a data permanece no dia 28 (seria 09:00 no Brasil).

