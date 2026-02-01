

## Plano: Mover botão LinkedIn para linha separada

### Objetivo
Reposicionar o botão do LinkedIn para aparecer em uma linha abaixo do texto "Contributor analytics", seguindo o mesmo padrão de layout dos botões YouTube/Spotify no EpisodeDetail.

---

### Arquivo a Modificar
`src/pages/PersonDetail.tsx`

---

### Alteração

**Linhas 111-125** - Reestruturar o layout para usar flex-col:

**Antes:**
```tsx
<div>
  <h1 className="text-2xl font-bold text-foreground">{person.name}</h1>
  <div className="flex items-center gap-2">
    <p className="text-muted-foreground">Contributor analytics</p>
    {person.linkedinUrl && (
      <a ...>
        <Linkedin className="w-4 h-4" />
        LinkedIn
      </a>
    )}
  </div>
</div>
```

**Depois:**
```tsx
<div>
  <h1 className="text-2xl font-bold text-foreground">{person.name}</h1>
  <div className="flex flex-col gap-2 mt-1">
    <p className="text-muted-foreground">Contributor analytics</p>
    {person.linkedinUrl && (
      <div className="flex items-center gap-2">
        <a ...>
          <Linkedin className="w-4 h-4" />
          LinkedIn
        </a>
      </div>
    )}
  </div>
</div>
```

---

### Comparação com EpisodeDetail

| Elemento | EpisodeDetail | PersonDetail (após alteração) |
|----------|---------------|-------------------------------|
| Container | `flex flex-col gap-2 mt-1` | `flex flex-col gap-2 mt-1` |
| Info text | Data + mentions | "Contributor analytics" |
| Botões | YouTube + Spotify em div separada | LinkedIn em div separada |

---

### Resultado Esperado
- "Contributor analytics" aparece em uma linha
- Botão LinkedIn aparece na linha abaixo
- Layout consistente com a página de episódios

