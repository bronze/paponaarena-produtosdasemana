

## Plano: Adicionar card de categorias no Dashboard

### Objetivo
Adicionar um quinto card de estatística no Dashboard mostrando o número de categorias, clicável e levando para a página `/categories`.

---

### Arquivo a Modificar
`src/pages/Dashboard.tsx`

---

### Alterações

**1. Atualizar imports**

Adicionar a função `getCategories` ao import existente:

```typescript
import { episodes, products, people, mentions, getCategories } from "@/data/mentions";
```

Adicionar o ícone `FolderOpen` do Lucide (consistente com a página de Categories):

```typescript
import { Mic, Package, Users, MessageSquare, FolderOpen } from "lucide-react";
```

**2. Adicionar novo StatCard**

Inserir um novo card entre "Products Tracked" e "Contributors":

```tsx
<StatCard
  title="Categories"
  value={getCategories().length}
  icon={FolderOpen}
  description="Product categories"
  href="/categories"
/>
```

**3. Ajustar grid para 5 colunas em telas grandes**

Atualizar o grid para acomodar 5 cards:

```tsx
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 auto-rows-fr">
```

---

### Resultado Visual

| Card | Valor | Link |
|------|-------|------|
| Total Episodes | Quantidade de episódios | /episodes |
| Products Tracked | Quantidade de produtos | /products |
| **Categories** | **Quantidade de categorias** | **/categories** |
| Contributors | Quantidade de pessoas | /people |
| Total Mentions | Quantidade de menções | - |

---

### Detalhes Técnicos

- O ícone `FolderOpen` é o mesmo usado na página de Categories, mantendo consistência visual
- O card será clicável com hover effect (já implementado no StatCard)
- `getCategories().length` retorna o número de categorias únicas extraídas dos produtos

