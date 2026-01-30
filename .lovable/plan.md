

## Plano: Remover Duplicata do Airalo

### Problema Identificado
O produto "Airalo" aparece duas vezes na lista de produtos em `src/data/mentions.ts`:
- Linha 522 (na seção Travel original)
- Linha 1060 (duplicata na seção Travel mais abaixo)

Isso faz com que o produto apareça múltiplas vezes na lista de produtos da aplicação.

---

### Solução
Remover a entrada duplicada da linha 1060, mantendo apenas a primeira ocorrência (linha 522).

---

### Arquivo a Modificar
`src/data/mentions.ts`

---

### Detalhes Técnicos

**Remover a linha 1060:**
```typescript
// REMOVER esta linha duplicada:
{ id: "airalo", name: "Airalo", category: "Travel", url: "https://www.airalo.com/" },
```

A menção do episódio 31 (`m31-7`) continuará funcionando normalmente pois referencia o `productId: "airalo"` que permanecerá na linha 522.

---

### Resumo

| Item | Ação |
|------|------|
| Linha duplicada | Remover linha 1060 |
| Impacto | Nenhum - menções continuam funcionando |

