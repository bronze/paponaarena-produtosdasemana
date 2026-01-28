

## Correção: Aplicar Fix de Fuso Horário Apenas no Episódio 103

### Problema

O fix anterior (`+ "T12:00:00"`) foi aplicado a **todos** os episódios, mas apenas o episódio 103 precisava dessa correção. Os outros episódios já mostravam as datas corretas antes.

### Solução

Reverter o fix global e aplicar uma correção diferente: **corrigir a data diretamente no banco de dados** do episódio 103.

A data do episódio 103 deve ser ajustada de `"2026-01-28"` para garantir que apareça corretamente. Na verdade, vou reverter o código para usar `new Date(episode.date)` sem o `T12:00:00` e ajustar apenas a data do episódio 103 se necessário.

### Arquivos a Modificar

| Arquivo | Mudança |
|---------|---------|
| `src/pages/Episodes.tsx` | Remover `+ "T12:00:00"` |
| `src/pages/EpisodeDetail.tsx` | Remover `+ "T12:00:00"` |
| `src/data/mentions.ts` | Mudar data do ep 103 para `"2026-01-29"` (será mostrado como 28 no Brasil) |

### Detalhes Técnicos

Quando o JavaScript interpreta `"2026-01-28"` como meia-noite UTC e converte para UTC-3, vira dia 27. Ao colocar `"2026-01-29"`, ele mostrará dia 28.

Alternativamente, podemos manter o formato `"2026-01-28T03:00:00"` apenas para o episódio 103 no banco de dados, garantindo que ele apareça como dia 28 no Brasil.

