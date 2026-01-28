

## Refatoração: Datas de Episódios como Datas Civis (Sem Fuso Horário)

### Problema Atual

O JavaScript interpreta `new Date("2026-01-28")` como meia-noite UTC. Usuários no Brasil (UTC-3) veem "27 de janeiro" ao invés de "28 de janeiro".

### Solução

Tratar datas como **strings puras**, nunca como timestamps. Criar uma função utilitária que formata a data por manipulação de string, sem usar `Date()`.

---

### Arquivos a Modificar

| Arquivo | Mudança |
|---------|---------|
| `src/lib/utils.ts` | Adicionar funções `formatEpisodeDate` e `getYearFromDate` |
| `src/data/mentions.ts` | Refatorar `getEpisodeYears` e `getEpisodesByYear` para usar string |
| `src/pages/Episodes.tsx` | Usar `formatEpisodeDate` e ordenar por string |
| `src/pages/EpisodeDetail.tsx` | Usar `formatEpisodeDate` |

---

### Implementação

#### 1. Nova função em `src/lib/utils.ts`

```typescript
/**
 * Formata uma data ISO (YYYY-MM-DD) para formato brasileiro (DD/MM/YYYY)
 * Sem usar Date() para evitar problemas de fuso horário
 */
export function formatEpisodeDate(dateStr: string): string {
  const [year, month, day] = dateStr.split("-");
  return `${day}/${month}/${year}`;
}

/**
 * Extrai o ano de uma data ISO (YYYY-MM-DD) como número
 */
export function getYearFromDate(dateStr: string): number {
  return parseInt(dateStr.split("-")[0], 10);
}

/**
 * Compara duas datas ISO para ordenação (mais recente primeiro)
 */
export function compareDatesDesc(a: string, b: string): number {
  return b.localeCompare(a);
}
```

#### 2. Atualizar `src/data/mentions.ts`

**Antes (linhas 1472-1480):**
```typescript
export function getEpisodeYears(): number[] {
  const years = episodes.map((e) => new Date(e.date).getFullYear());
  return [...new Set(years)].sort((a, b) => b - a);
}

export function getEpisodesByYear(year: number | "all"): Episode[] {
  if (year === "all") return episodes;
  return episodes.filter((e) => new Date(e.date).getFullYear() === year);
}
```

**Depois:**
```typescript
import { getYearFromDate } from "@/lib/utils";

export function getEpisodeYears(): number[] {
  const years = episodes.map((e) => getYearFromDate(e.date));
  return [...new Set(years)].sort((a, b) => b - a);
}

export function getEpisodesByYear(year: number | "all"): Episode[] {
  if (year === "all") return episodes;
  return episodes.filter((e) => getYearFromDate(e.date) === year);
}
```

#### 3. Atualizar `src/pages/Episodes.tsx`

**Antes (linha 12):**
```typescript
const filteredEpisodes = getEpisodesByYear(selectedYear).sort((a, b) => 
  new Date(b.date).getTime() - new Date(a.date).getTime()
);
```

**Depois:**
```typescript
import { formatEpisodeDate, compareDatesDesc } from "@/lib/utils";

const filteredEpisodes = getEpisodesByYear(selectedYear).sort((a, b) => 
  compareDatesDesc(a.date, b.date)
);
```

**Antes (linhas 61-65):**
```typescript
{new Date(episode.date).toLocaleDateString("en-US", {
  month: "short",
  day: "numeric",
  year: "numeric",
})}
```

**Depois:**
```typescript
{formatEpisodeDate(episode.date)}
```

#### 4. Atualizar `src/pages/EpisodeDetail.tsx`

**Antes (linhas 85-89):**
```typescript
{new Date(episode.date).toLocaleDateString("en-US", {
  month: "long",
  day: "numeric",
  year: "numeric",
})}
```

**Depois:**
```typescript
import { formatEpisodeDate } from "@/lib/utils";

{formatEpisodeDate(episode.date)}
```

---

### Resultado

| Entrada | Saída |
|---------|-------|
| `"2026-01-28"` | `"28/01/2026"` |
| `"2025-12-03"` | `"03/12/2025"` |

A data será exibida de forma **idêntica** para qualquer usuário, independente do fuso horário.

