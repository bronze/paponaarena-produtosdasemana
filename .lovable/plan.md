

## Plano: Corrigir IDs Duplicados no Array de Pessoas

### Problema Identificado

O array `people` em `src/data/mentions.ts` contém **IDs duplicados**, o que causa comportamento estranho na busca:

| ID | Linha | Nome |
|----|-------|------|
| `bruna` | 1004 | Bruna |
| `bruna` | 1037 | Bruna (duplicata!) |
| `leandro` | 939 | Leandro |
| `leandro` | 1047 | Leandro (duplicata!) |

Quando o React usa `key={person.id}` para renderizar a lista, IDs duplicados causam problemas de reconciliação - elementos "fantasma" aparecem ou não são removidos corretamente.

---

### Solução

Remover as entradas duplicadas do array `people`, mantendo apenas uma instância de cada pessoa:

1. **Remover** `{ id: "bruna", name: "Bruna" }` da linha 1037 (manter a da linha 1004)
2. **Remover** `{ id: "leandro", name: "Leandro" }` da linha 1047 (manter a da linha 939)

---

### Arquivo a Modificar

`src/data/mentions.ts`

---

### Seção Técnica

**Remover linha 1037:**
```typescript
// ANTES (linha 1036-1038)
  { id: "maria", name: "Maria" },
  { id: "bruna", name: "Bruna" },  // ← REMOVER esta duplicata
  // Episode 59 contributors

// DEPOIS
  { id: "maria", name: "Maria" },
  // Episode 59 contributors
```

**Remover linha 1047:**
```typescript
// ANTES (linha 1045-1048)
  { id: "amanda", name: "Amanda" },
  { id: "larissa", name: "Larissa" },
  { id: "leandro", name: "Leandro" },  // ← REMOVER esta duplicata
  // Episode 53 contributors

// DEPOIS
  { id: "amanda", name: "Amanda" },
  { id: "larissa", name: "Larissa" },
  // Episode 53 contributors
```

---

### Resultado Esperado

Após a correção, a busca funcionará corretamente:
- Buscar "thiago" mostrará apenas Thiago
- Buscar "zeca" não mostrará nenhum resultado
- Bruna e Leandro não aparecerão como "fantasmas"

