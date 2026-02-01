

## Plano: Estilizar botão do LinkedIn como YouTube/Spotify

### Objetivo
Atualizar o estilo do link do LinkedIn na página de perfil para seguir o mesmo padrão visual dos botões YouTube e Spotify na página de detalhes do episódio.

---

### Arquivo a Modificar
`src/pages/PersonDetail.tsx`

---

### Alteração

**Linhas 114-122** - Atualizar o estilo do link do LinkedIn:

**Antes:**
```tsx
<a
  href={person.linkedinUrl}
  target="_blank"
  rel="noopener noreferrer"
  className="text-muted-foreground hover:text-primary transition-colors"
>
  <Linkedin className="w-4 h-4" />
</a>
```

**Depois:**
```tsx
<a
  href={person.linkedinUrl}
  target="_blank"
  rel="noopener noreferrer"
  className="inline-flex items-center gap-1.5 px-3 py-1.5 text-sm font-medium rounded-md border border-blue-500/30 text-blue-600 hover:bg-blue-500/10 transition-colors"
>
  <Linkedin className="w-4 h-4" />
  LinkedIn
</a>
```

---

### Padrão Visual

| Plataforma | Cor da borda | Cor do texto | Hover |
|------------|--------------|--------------|-------|
| YouTube | `red-500/30` | `red-600` | `red-500/10` |
| Spotify | `green-500/30` | `green-600` | `green-500/10` |
| LinkedIn | `blue-500/30` | `blue-600` | `blue-500/10` |

---

### Resultado Esperado
- Botão com borda azul clara e texto azul
- Inclui o texto "LinkedIn" ao lado do ícone
- Efeito hover com fundo azul translúcido
- Consistência visual com os botões de mídia do EpisodeDetail

