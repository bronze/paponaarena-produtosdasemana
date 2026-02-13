

## Adicionar fonte Inter ao site

### Resumo

Adicionar a fonte Inter (do Google Fonts) como fonte principal do site, substituindo a fonte padrao do sistema.

### Alteracoes

1. **`index.html`** - Adicionar link do Google Fonts no `<head>`:
   ```html
   <link rel="preconnect" href="https://fonts.googleapis.com">
   <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
   <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">
   ```

2. **`tailwind.config.ts`** - Definir Inter como fonte sans-serif padrao:
   ```ts
   fontFamily: {
     sans: ["Inter", "system-ui", "sans-serif"],
   },
   ```

3. **`src/index.css`** - Aplicar a fonte no body para cobertura total:
   ```css
   body {
     font-family: 'Inter', system-ui, sans-serif;
   }
   ```

### Resultado

Todo o texto do site passara a usar a fonte Inter, com fallback para system-ui e sans-serif.

