

## Plano: Redirecionar Variantes para Produto Principal nos Links

### Problema

Quando usuários clicam em produtos variantes (ex: "Instagram (detox)", "ChatGPT o3", "Claude Opus 4"), o link leva para a página da variante (`/products/instagram-detox`), quando deveria levar para o produto principal (`/products/instagram`).

### Solução

1. Criar uma função helper `getProductLinkId()` que retorna o `parentId` se existir, caso contrário retorna o próprio `id`
2. Atualizar todos os lugares que criam links para produtos para usar essa função

---

### Arquivos a Modificar

| Arquivo | Alteração |
|---------|-----------|
| `src/data/mentions.ts` | Adicionar nova função helper |
| `src/pages/EpisodeDetail.tsx` | Usar `getProductLinkId` nos links |
| `src/pages/PersonDetail.tsx` | Usar `getProductLinkId` nos links |
| `src/pages/CategoryDetail.tsx` | Usar `getProductLinkId` nos links |
| `src/components/dashboard/RecentMentions.tsx` | Usar `getProductLinkId` nos links |

Nota: `src/pages/Products.tsx` não precisa de alteração porque já filtra variantes com `!p.parentId`.

---

### Seção Técnica

**1. Nova função helper em `src/data/mentions.ts`:**

```typescript
export function getProductLinkId(productId: string): string {
  const product = getProductById(productId);
  return product?.parentId || productId;
}
```

**2. Atualização nos componentes:**

Antes:
```typescript
<Link to={`/products/${product.id}`}>
```

Depois:
```typescript
<Link to={`/products/${getProductLinkId(product.id)}`}>
```

**Exemplo em EpisodeDetail.tsx:**
```typescript
// Importar a nova função
import { getProductLinkId } from "@/data/mentions";

// Regular product link
<Link key={mention.id} to={`/products/${getProductLinkId(mention.productId)}`}>
```

**Arquivos e linhas específicas:**

| Arquivo | Linhas com links a atualizar |
|---------|------------------------------|
| `EpisodeDetail.tsx` | ~182 (combo), ~200 (regular) |
| `PersonDetail.tsx` | ~222 (combo), ~236 (regular), ~180 (chart click) |
| `CategoryDetail.tsx` | ~274 |
| `RecentMentions.tsx` | ~60 (combo), ~78 (regular) |

---

### Resultado Esperado

- Clicar em "Instagram (detox)" levará para `/products/instagram`
- Clicar em "ChatGPT o3" levará para `/products/chatgpt`
- Clicar em "Claude Opus 4" levará para `/products/claude`
- Produtos sem `parentId` continuarão funcionando normalmente

