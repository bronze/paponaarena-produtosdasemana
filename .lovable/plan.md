

## Solução: Exibir Datas Sem Depender do Fuso Horário

### O Problema

Quando fazemos `new Date("2026-01-28")`:
- JavaScript interpreta como **00:00:00 UTC**
- No Brasil (UTC-3), vira **21:00 do dia 27**
- Na Europa (UTC+1), permanece dia 28
- Usuários em diferentes fusos veem datas diferentes

### A Solução

Criar uma função utilitária que faz o **parsing manual** da data, extraindo ano, mês e dia diretamente da string, sem conversão de fuso horário:

```typescript
// Extrai os componentes da data diretamente
function formatDateString(dateStr: string, options: Intl.DateTimeFormatOptions) {
  const [year, month, day] = dateStr.split('-').map(Number);
  // Cria a data com horário local (não UTC)
  const date = new Date(year, month - 1, day, 12, 0, 0);
  return date.toLocaleDateString("en-US", options);
}
```

Ao usar `new Date(year, month - 1, day, 12, 0, 0)`:
- A data é criada no **horário local** do usuário (não UTC)
- O `12:00` garante margem de segurança
- Todos os usuários verão a mesma data, não importa o fuso

---

### Arquivos a Modificar

| Arquivo | Mudança |
|---------|---------|
| `src/lib/utils.ts` | Adicionar função `formatEpisodeDate()` |
| `src/pages/Episodes.tsx` | Usar a nova função |
| `src/pages/EpisodeDetail.tsx` | Usar a nova função |
| `src/data/mentions.ts` | Reverter data do ep 103 para `"2026-01-28"` |

---

### Detalhes da Implementação

#### 1. Nova função em `src/lib/utils.ts`

```typescript
export function formatEpisodeDate(
  dateStr: string, 
  options: Intl.DateTimeFormatOptions = { month: "short", day: "numeric", year: "numeric" }
): string {
  const [year, month, day] = dateStr.split('-').map(Number);
  const date = new Date(year, month - 1, day, 12, 0, 0);
  return date.toLocaleDateString("en-US", options);
}
```

#### 2. Uso nos componentes

```tsx
// Antes
new Date(episode.date).toLocaleDateString("en-US", {...})

// Depois
formatEpisodeDate(episode.date, { month: "short", day: "numeric", year: "numeric" })
```

#### 3. Reverter data do episódio 103

Voltar de `"2026-01-29"` para `"2026-01-28"` (a data correta), já que a nova função vai exibi-la corretamente.

---

### Por que isso funciona?

| Abordagem | Comportamento |
|-----------|---------------|
| `new Date("2026-01-28")` | Interpreta como UTC, converte para local |
| `new Date(2026, 0, 28, 12)` | Cria diretamente no fuso local |

Com a segunda abordagem, não há conversão de fuso - a data é criada "como está" no contexto do usuário.

