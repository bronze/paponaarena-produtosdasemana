

## Plano: Corrigir layout do header em mobile na página de episódio

### Problema
O header da página de detalhe do episódio contém data, contagem de menções e os links do YouTube/Spotify todos na mesma linha. Em telas menores, isso ultrapassa a largura disponível e cria uma barra de rolagem horizontal.

### Solução
Separar os elementos em duas linhas em mobile:
- Linha 1: Data e contagem de menções
- Linha 2: Links do YouTube e Spotify

---

### Arquivo a Modificar
`src/pages/EpisodeDetail.tsx`

### Alteração
Reestruturar o bloco de metadados (linhas 85-116) para usar `flex-wrap` ou separar em divs distintas:

**De:**
```tsx
<div className="flex items-center gap-4 mt-1">
  {/* data */}
  {/* menções */}
  {/* youtube link */}
  {/* spotify link */}
</div>
```

**Para:**
```tsx
<div className="flex flex-col gap-2 mt-1">
  {/* Linha 1: data e menções */}
  <div className="flex items-center gap-4">
    {/* data */}
    {/* menções */}
  </div>
  {/* Linha 2: links de mídia */}
  <div className="flex items-center gap-2">
    {/* youtube link */}
    {/* spotify link */}
  </div>
</div>
```

---

### Resultado Esperado
- Em mobile, os links aparecem abaixo das informações de data/menções
- Sem barra de rolagem horizontal
- Layout mais limpo e legível em telas pequenas

