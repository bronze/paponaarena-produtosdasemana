

## Criar combo Caneta + Caderno no Ep. 105

### Resumo

Jose Neto mencionou Caneta e Caderno separadamente no episodio 105 (mencoes `m105-33` e `m105-34`). Vamos criar um produto combo que credita ambos individualmente.

### Alteracoes em `src/data/mentions.ts`

1. **Adicionar produto combo** no array de produtos:
   ```
   { id: "combo-caneta-caderno", name: "Caneta + Caderno", category: "Hardware", alsoCredits: ["caneta", "caderno"] }
   ```

2. **Substituir as duas mencoes** por uma unica mencao combo:
   - Remover `m105-33` (caneta) e `m105-34` (caderno)
   - Adicionar: `{ id: "m105-33", episodeId: 105, personId: "jose-neto", productId: "combo-caneta-caderno" }`

### Resultado

Na pagina do episodio 105, Jose Neto aparecera com badges linkados "Caneta + Caderno" com o badge "combo", seguindo o mesmo padrao visual dos outros combos existentes.

