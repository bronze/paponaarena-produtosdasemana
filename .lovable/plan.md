

## Plano: Adicionar contexto na menção do Porto Seguro (Ep 69)

### Visão Geral
Adicionar um campo `context` na menção da Marina Fernandes no episódio 69 para esclarecer que é especificamente sobre o chatbot do Porto Seguro.

---

### Abordagem Escolhida: Contexto

**Por que contexto em vez de variante:**
- O produto "Porto Seguro" foi recém-renomeado para ficar genérico (antes era "Porto Seguro Chatbot")
- Criar uma variante "Porto Seguro Chatbot" com parentId seria redundante
- O campo `context` é mais leve e preserva a agregação de menções no produto principal

---

### Arquivo a Modificar
`src/data/mentions.ts`

---

### Alteração

**Linha ~1411:**
```typescript
// ANTES
{ id: "m69-4", episodeId: 69, personId: "marina-fernandes", productId: "porto-seguro" },

// DEPOIS
{ id: "m69-4", episodeId: 69, personId: "marina-fernandes", productId: "porto-seguro", context: "Chatbot" },
```

---

### Resultado
Na página do produto Porto Seguro, a menção da Marina Fernandes aparecerá com a indicação "Chatbot" ao lado, diferenciando das outras menções genéricas da empresa.

