

## Plano: Corrigir ordenação de episódios com mesma data

### Problema
Os episódios 21 e 22 têm a mesma data (2024-01-19). A ordenação atual (`compareDatesDesc`) compara apenas datas, então quando são iguais, a ordem do array original é mantida, fazendo o episódio 21 aparecer antes do 22.

### Solução
Modificar a ordenação na página Episodes para usar o ID do episódio como critério de desempate quando as datas forem iguais.

---

### Arquivo a Modificar
`src/pages/Episodes.tsx`

### Alteração
Atualizar a linha de ordenação para incluir desempate por ID:

**De:**
```typescript
const filteredEpisodes = getEpisodesByYear(selectedYear).sort((a, b) => compareDatesDesc(a.date, b.date));
```

**Para:**
```typescript
const filteredEpisodes = getEpisodesByYear(selectedYear).sort((a, b) => {
  const dateCompare = compareDatesDesc(a.date, b.date);
  if (dateCompare !== 0) return dateCompare;
  return b.id - a.id; // Episódio com ID maior aparece primeiro
});
```

---

### Resultado Esperado
- Episódio 22 (19/01/2024) aparecerá antes do episódio 21 (19/01/2024)
- A ordenação geral continua por data decrescente
- Episódios com a mesma data serão ordenados por número decrescente

