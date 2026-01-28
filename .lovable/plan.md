

## Plano: Exibir Combos com Links Individuais na Página de Episódio

### Situação Atual

Na página de PersonDetail, combos já são renderizados corretamente:
```
Claude Code + ChatGPT [combo]
```
Com links separados para cada produto e um badge indicando que foi combo.

Na página de EpisodeDetail, combos aparecem como um link único:
```
Uber + Livelo  →  linka para /products/uber-livelo
```

### Problema

O produto combo (`uber-livelo`) tem menos menções comparado aos produtos individuais (`uber`, `livelo`), dificultando a análise comparativa.

### Solução

Aplicar a mesma lógica de PersonDetail na EpisodeDetail:
- Se o produto tem `alsoCredits`, mostrar links para cada produto creditado
- Adicionar badge "combo" para indicar visualmente
- Cada produto creditado conta para seu total de menções (já funciona via `getMentionsByProduct`)

---

### Arquivo a Modificar

`src/pages/EpisodeDetail.tsx`

---

### Implementação

Refatorar o bloco que renderiza os badges de produtos (linhas 168-181):

**Antes:**
```tsx
{personMentions.map((mention) => {
  const product = getProductById(mention.productId);
  if (!product) return null;
  return (
    <Link key={mention.id} to={`/products/${mention.productId}`}>
      <Badge variant="secondary" className="...">
        {product.name}
      </Badge>
    </Link>
  );
})}
```

**Depois:**
```tsx
{personMentions.map((mention) => {
  const product = getProductById(mention.productId);
  if (!product) return null;

  // Combo product: show individual links + combo badge
  if (product.alsoCredits) {
    return (
      <div key={mention.id} className="flex items-center gap-1">
        {product.alsoCredits.map((creditedId, idx) => {
          const creditedProduct = getProductById(creditedId);
          if (!creditedProduct) return null;
          return (
            <span key={creditedId} className="flex items-center gap-1">
              {idx > 0 && <span className="text-muted-foreground text-xs">+</span>}
              <Link to={`/products/${creditedProduct.id}`}>
                <Badge
                  variant="secondary"
                  className="hover:bg-primary hover:text-primary-foreground transition-colors cursor-pointer text-xs"
                >
                  {creditedProduct.name}
                </Badge>
              </Link>
            </span>
          );
        })}
        <Badge variant="outline" className="text-xs">combo</Badge>
      </div>
    );
  }

  // Regular product
  return (
    <Link key={mention.id} to={`/products/${mention.productId}`}>
      <Badge variant="secondary" className="...">
        {product.name}
      </Badge>
    </Link>
  );
})}
```

---

### Resultado Visual

| Pessoa | Produtos (Antes) | Produtos (Depois) |
|--------|------------------|-------------------|
| Aíquis | `Uber + Livelo` | `Uber` + `Livelo` `combo` |
| Usuário X | `Claude Code + ChatGPT` | `Claude Code` + `ChatGPT` `combo` |

Cada badge agora linka para o produto individual, facilitando a comparação de menções.

---

### Impacto nos Rankings

A lógica de `getMentionsByProduct` já agrega menções de combos para os produtos individuais. Esta mudança é **apenas visual** - não afeta contagens ou rankings.

