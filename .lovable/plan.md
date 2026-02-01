

## Plano: Destacar cards dos hosts na página People

### Objetivo
Adicionar diferenciação visual extra nos cards dos hosts Arthur e Aíquis para distingui-los dos demais contribuidores na página de People.

---

### Arquivo a Modificar
`src/pages/People.tsx`

---

### Abordagem

Vou adicionar estilos condicionais para os hosts baseando-se na presença do `avatarUrl` (que só os hosts possuem). Os hosts terão:

1. **Sombra sutil** - `shadow-md` para dar profundidade
2. **Borda com cor primary** - `border-primary/20` para destacar
3. **Anel ao redor do avatar** - `ring-2 ring-primary/30` para enfatizar a foto

---

### Alteração

**Linha 78** - Adicionar classes condicionais ao Card:

```tsx
<Card className={`bg-card border-border hover:border-primary/50 transition-colors group h-full ${
  person.avatarUrl ? "shadow-md border-primary/20" : ""
}`}>
```

**Linha 81** - Adicionar anel ao Avatar dos hosts:

```tsx
<Avatar className={`w-12 h-12 bg-primary/10 ${
  person.avatarUrl ? "ring-2 ring-primary/30" : ""
}`}>
```

---

### Comparação Visual

| Elemento | Contribuidores | Hosts |
|----------|----------------|-------|
| Card border | `border-border` | `border-primary/20` |
| Card shadow | nenhum | `shadow-md` |
| Avatar | simples | `ring-2 ring-primary/30` |

---

### Resultado Esperado
- Cards de Arthur e Aíquis se destacam com sombra e borda colorida
- Avatares com fotos têm um anel sutil ao redor
- Efeito é elegante e não poluído
- Mantém consistência com o estilo do app

