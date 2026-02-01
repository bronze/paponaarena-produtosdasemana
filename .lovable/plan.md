

## Plano: Tornar cards de estatísticas clicáveis no Dashboard

### Objetivo
Fazer com que os cards de Episodes, Products e Contributors no dashboard sejam clicáveis e levem para suas respectivas páginas, adicionando um efeito de hover sutil.

---

### Arquivos a Modificar

**1. `src/components/dashboard/StatCard.tsx`**

Adicionar prop opcional `href` para tornar o card clicável:

```typescript
interface StatCardProps {
  title: string;
  value: string | number;
  icon: LucideIcon;
  description?: string;
  href?: string;  // Nova prop opcional
}
```

Usar `Link` do react-router-dom quando `href` existir, mantendo o mesmo visual mas adicionando:
- `hover:border-primary/50` - borda colorida no hover
- `transition-colors` - transição suave
- `cursor-pointer` - indicar que é clicável
- `group` - para possíveis efeitos em elementos filhos

---

**2. `src/pages/Dashboard.tsx`**

Adicionar a prop `href` aos 3 cards que devem ser clicáveis:

| Card | href |
|------|------|
| Total Episodes | `/episodes` |
| Products Tracked | `/products` |
| Contributors | `/people` |
| Total Mentions | (sem link - não tem página dedicada) |

---

### Detalhes Técnicos

O StatCard será renderizado condicionalmente:
- Com `href`: Envolto em `<Link>` com estilos de hover
- Sem `href`: Renderiza como `<Card>` normal (comportamento atual)

```tsx
const CardWrapper = href ? Link : "div";
const wrapperProps = href ? { to: href } : {};

return (
  <CardWrapper {...wrapperProps}>
    <Card className={`bg-card border-border ${
      href ? "hover:border-primary/50 transition-colors cursor-pointer" : ""
    }`}>
      {/* conteúdo existente */}
    </Card>
  </CardWrapper>
);
```

---

### Resultado Esperado
- Cards de Episodes, Products e Contributors são clicáveis
- Hover mostra borda colorida (consistente com outros cards do app)
- Card de Mentions permanece estático
- Visual do card não muda, apenas adiciona interatividade

