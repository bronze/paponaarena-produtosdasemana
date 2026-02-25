

## Corrigir produto Beats: adicionar URL e ajustar categoria

### Resumo

O "Beats" mencionado pela Erika no ep 106 nao e o headphone da Apple, e sim a marca de bebidas Beats (ex-Skol Beats). Precisa corrigir categoria e adicionar URL.

### Alteracao

**Arquivo:** `src/data/mentions.ts`, linha 1447

**De:**
```typescript
{ id: "beats", name: "Beats", category: "Hardware" },
```

**Para:**
```typescript
{ id: "beats", name: "Beats", category: "Food & Drink", url: "https://www.beatsoficial.com.br/" },
```

### Impacto

- A categoria muda de "Hardware" para "Food & Drink" (seguindo o padrao de categorias do projeto)
- O link externo aparecera na pagina de detalhe do produto
- Nenhuma outra mencao e afetada

