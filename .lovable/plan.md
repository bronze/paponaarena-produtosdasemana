

## Plano: Corrigir cards mobile na pagina de Produtos

### Problemas Identificados
1. Os cards mobile nao mostram em quantos episodios o produto aparece
2. Ao ordenar por nome, ordena Z-A ao inves de A-Z

---

### Arquivo a Modificar
`src/pages/Products.tsx`

---

### Alteracao 1: Adicionar contagem de episodios no ProductCard

**Linhas 29-33** - Adicionar episodeCount abaixo de mentionCount:

```tsx
<div className="flex items-center gap-3 shrink-0">
  <div className="text-right">
    <div className="font-semibold text-primary text-lg">{product.mentionCount}</div>
    <div className="text-xs text-muted-foreground">mencoes</div>
  </div>
  <div className="text-right">
    <div className="font-semibold text-muted-foreground text-lg">{product.episodeCount}</div>
    <div className="text-xs text-muted-foreground">episodios</div>
  </div>
  <ChevronRight ... />
</div>
```

---

### Alteracao 2: Corrigir ordenacao por nome para A-Z

**Linhas 94-97** - Modificar `handleTabSort` para usar "asc" quando ordenar por nome:

```tsx
const handleTabSort = (value: string) => {
  setSortKey(value as SortKey);
  // Para nome, ordenar A-Z (asc); para outros, ordenar maior primeiro (desc)
  setSortDir(value === "name" ? "asc" : "desc");
};
```

---

### Resultado Esperado
- Cards mobile exibem tanto mencoes quanto episodios
- Tab "Nome" ordena de A-Z (ordem alfabetica natural)
- Tabs "Mencoes" e "Episodios" continuam ordenando do maior para o menor

