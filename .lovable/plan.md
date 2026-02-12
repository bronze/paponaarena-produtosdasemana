

## Criar combo Cursor + Claude Code no Ep. 105 (Arthur e Aiquis)

### Resumo

Arthur e Aiquis mencionaram Cursor e Claude Code separadamente no episodio 105. Vamos criar um produto combo e substituir as mencoes individuais por combo para ambos.

### Alteracoes em `src/data/mentions.ts`

1. **Adicionar produto combo** no array de produtos:
   ```
   { id: "combo-cursor-claude-code", name: "Cursor + Claude Code", category: "Development", alsoCredits: ["cursor", "claude-code"] }
   ```

2. **Substituir mencoes do Arthur** (m105-1 cursor + m105-2 claude-code) por:
   ```
   { id: "m105-1", episodeId: 105, personId: "arthur", productId: "combo-cursor-claude-code" }
   ```
   Remover m105-2.

3. **Substituir mencoes do Aiquis** (m105-3 cursor + m105-4 claude-code) por:
   ```
   { id: "m105-3", episodeId: 105, personId: "aiquis", productId: "combo-cursor-claude-code" }
   ```
   Remover m105-4.

### Resultado

Na pagina do episodio 105, Arthur e Aiquis aparecerao com badges linkados "Cursor + Claude Code" com o badge "combo". As contagens individuais de Cursor e Claude Code continuam sendo creditadas via `alsoCredits`.

