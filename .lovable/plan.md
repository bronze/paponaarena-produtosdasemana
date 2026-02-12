

## Mostrar numero do episodio no card "Latest Episode"

### Abordagem

Adicionar um badge com o numero do episodio ao lado do label "Latest Episode" no card do dashboard, usando o mesmo estilo de badge que ja existe na pagina de Episodes.

### Resultado visual esperado

```text
[Latest Episode]  [Ep. 105]
SEMANA INSANA EM AI: Lancamentos...
34 products mentioned
[View Episode ->]
```

Os dois badges ficam lado a lado na mesma linha, com estilos complementares.

### Alteracao

**Arquivo:** `src/components/dashboard/LatestEpisodeCard.tsx`

Adicionar um segundo badge com `Ep. {latestEpisode.id}` na div que contem o label "Latest Episode":

```typescript
<div className="flex items-center gap-2">
  <span className="text-xs font-medium bg-primary-foreground/20 px-2 py-0.5 rounded">
    Latest Episode
  </span>
  <span className="text-xs font-medium bg-primary-foreground/10 px-2 py-0.5 rounded">
    Ep. {latestEpisode.id}
  </span>
</div>
```

O segundo badge usa `bg-primary-foreground/10` (mais sutil) para diferenciar visualmente do label principal.

