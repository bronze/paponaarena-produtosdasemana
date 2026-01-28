

## Plano: Corrigir Typo "Cloud Cowork" → "Claude Cowork"

### Problema

O produto está registrado incorretamente como "Cloud Cowork" quando deveria ser "Claude Cowork" (referência ao Claude da Anthropic - Claude Cowork é uma funcionalidade do Claude AI).

### Arquivo a Modificar

`src/data/mentions.ts`

### Correção

| Linha | Antes | Depois |
|-------|-------|--------|
| 438 | `{ id: "cloud-cowork", name: "Cloud Cowork", category: "Productivity" }` | `{ id: "cloud-cowork", name: "Claude Cowork", category: "Productivity" }` |

**Nota:** O `id` permanece como `cloud-cowork` para manter compatibilidade com quaisquer referências existentes nas menções. Apenas o `name` (exibido na UI) será corrigido.

### Impacto

- Página de Produtos: nome correto será exibido
- Badges em episódios/pessoas: nome correto
- Rankings e gráficos: nome correto

Mudança simples de 1 linha.

