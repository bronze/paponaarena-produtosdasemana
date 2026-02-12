

## Estilizar badge "combo" com cor sutil

### O que muda

O badge "combo" (que hoje usa `variant="outline"` sem cor especial) vai ganhar um fundo leve e cor de texto sutil para se destacar visualmente sem chamar muita atencao.

### Estilo proposto

Um tom rosado/coral bem suave, alinhado com a paleta primaria do app:
- Fundo: `bg-primary/10` (coral com 10% de opacidade)
- Texto: `text-primary/70` (coral com 70% de opacidade)  
- Borda: `border-primary/20` (coral com 20% de opacidade)

Isso cria um destaque sutil que diferencia o badge "combo" dos badges de produto sem competir visualmente com eles.

### Arquivos afetados

Tres arquivos contem o badge combo e precisam da mesma alteracao:

1. `src/components/dashboard/RecentMentions.tsx`
2. `src/pages/EpisodeDetail.tsx`
3. `src/pages/PersonDetail.tsx` (se existir o mesmo padrao)

### Alteracao

De:
```tsx
<Badge variant="outline" className="text-xs">combo</Badge>
```

Para:
```tsx
<Badge variant="outline" className="text-xs bg-primary/10 text-primary/70 border-primary/20">combo</Badge>
```

