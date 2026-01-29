

## Plano: Unificar Pessoas Duplicadas (Thiago e Bruna)

### Problema Identificado

O array `people` contém pessoas cadastradas duas vezes com IDs diferentes mas mesmo nome:

| ID Original | ID Duplicado | Nome | Ação |
|-------------|--------------|------|------|
| `thiago` (linha 1027) | `thiago-ep102` (linha 886) | "Thiago" | Manter `thiago`, remover `thiago-ep102` |
| `bruna` (linha 1004) | `bruna-ep57` (linha 1026) | "Bruna" | Manter `bruna`, remover `bruna-ep57` |

Isso causa confusão na busca - duas entradas aparecem para a mesma pessoa.

---

### Solução

1. **Atualizar menções** que usam os IDs antigos para usar os IDs corretos
2. **Remover entradas duplicadas** do array `people`

---

### Arquivo a Modificar

`src/data/mentions.ts`

---

### Passo 1: Atualizar Menções

**Thiago (1 menção a atualizar):**

```typescript
// ANTES (linha 1756)
{ id: "m102-16", episodeId: 102, personId: "thiago-ep102", productId: "antigravity" },

// DEPOIS
{ id: "m102-16", episodeId: 102, personId: "thiago", productId: "antigravity" },
```

**Bruna (1 menção a atualizar):**

```typescript
// ANTES (linha 1163)
{ id: "m57-11", episodeId: 57, personId: "bruna-ep57", productId: "toqan" },

// DEPOIS
{ id: "m57-11", episodeId: 57, personId: "bruna", productId: "toqan" },
```

---

### Passo 2: Remover Pessoas Duplicadas

```typescript
// Remover linha 886
{ id: "thiago-ep102", name: "Thiago" },

// Remover linha 1026
{ id: "bruna-ep57", name: "Bruna" },
```

---

### Resultado Esperado

Após a correção:
- Buscar "Thiago" mostrará apenas 1 pessoa (com todas as menções agregadas)
- Buscar "Bruna" mostrará apenas 1 pessoa (com todas as menções agregadas)
- Os links para páginas de detalhes funcionarão corretamente

---

### Resumo de Alterações

| Ação | Quantidade |
|------|------------|
| Menções atualizadas | 2 |
| Pessoas removidas | 2 |

