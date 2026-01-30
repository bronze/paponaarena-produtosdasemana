

## Plano: Reestruturar Hierarquia dos Produtos Google

### Visão Geral
Transformar Google Docs no produto principal e converter Google Sheets, Google Slides e Timeline no Google Sheets em variantes (produtos filhos).

---

### Estado Atual

| ID | Nome | parentId |
|----|------|----------|
| `google-docs` | Google Docs | - |
| `google-slides` | Google Slides | - |
| `google-sheets` | Google Sheets | - |
| `timeline-sheets` | Timeline no Google Sheets | - |

### Estado Desejado

| ID | Nome | parentId |
|----|------|----------|
| `google-docs` | Google Docs | - |
| `google-slides` | Google Slides | `google-docs` |
| `google-sheets` | Google Sheets | `google-docs` |
| `timeline-sheets` | Timeline no Google Sheets | `google-docs` |

---

### Impacto nas Menções

As menções existentes continuarão funcionando corretamente. O sistema já suporta a agregação de variantes ao produto pai, então:

| Episódio | Pessoa | Produto Mencionado | Agregado a |
|----------|--------|-------------------|------------|
| 37 | Aíquis | Google Sheets | Google Docs |
| 37 | Arthur | Google Slides | Google Docs |
| 75 | Aíquis | Google Slides | Google Docs |
| 82 | Bruno Perrone | Google Docs | Google Docs |
| 85 | Thais Nakahira | Timeline no Google Sheets | Google Docs |
| 88 | Efrem | Google Docs | Google Docs |
| 102 | Cassi Vilvert | Google Docs | Google Docs |

**Total após agregação:** Google Docs terá 7 menções agregadas (3 diretas + 4 via variantes).

---

### Arquivo a Modificar
`src/data/mentions.ts`

---

### Detalhes Técnicos

**Alteração 1 - Adicionar parentId ao Google Slides** (linha 715):
```typescript
// De:
{ id: "google-slides", name: "Google Slides", category: "Productivity" },

// Para:
{ id: "google-slides", name: "Google Slides", category: "Productivity", parentId: "google-docs" },
```

**Alteração 2 - Adicionar parentId ao Google Sheets** (linha 716):
```typescript
// De:
{ id: "google-sheets", name: "Google Sheets", category: "Productivity" },

// Para:
{ id: "google-sheets", name: "Google Sheets", category: "Productivity", parentId: "google-docs" },
```

**Alteração 3 - Adicionar parentId ao Timeline no Google Sheets** (linha 725):
```typescript
// De:
{ id: "timeline-sheets", name: "Timeline no Google Sheets", category: "Productivity" },

// Para:
{ id: "timeline-sheets", name: "Timeline no Google Sheets", category: "Productivity", parentId: "google-docs" },
```

---

### Resumo de Alterações

| Item | Quantidade |
|------|------------|
| Produtos modificados | 3 |
| Menções alteradas | 0 |

### Comportamento Esperado
- Na lista de produtos, apenas "Google Docs" aparecerá (variantes são ocultadas)
- Na página de detalhes do Google Docs, as variantes serão exibidas como "Includes variants"
- Todas as 7 menções serão contabilizadas no total do Google Docs
- Os nomes específicos das variantes serão preservados nas visualizações de menções

