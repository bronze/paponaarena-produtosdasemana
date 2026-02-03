

## Plano: Easter Egg no Console do DevTools

### Objetivo
Adicionar uma mensagem divertida com ASCII art que aparece no console do navegador quando alguém abre o DevTools.

---

### Arquivo a Modificar
`src/main.tsx`

---

### Implementação

Adicionar um bloco de código que executa `console.log()` com:
1. ASCII art estilizado do nome "Papo na Arena"
2. Mensagem divertida em português
3. Links para YouTube e Spotify com estilos coloridos

```typescript
// Console Easter Egg
console.log(
  `%c
  ╔═══════════════════════════════════════════╗
  ║                                           ║
  ║   🎙️  P A P O   N A   A R E N A  🎙️      ║
  ║                                           ║
  ╚═══════════════════════════════════════════╝
  `,
  "color: #8B5CF6; font-weight: bold; font-size: 14px;"
);

console.log(
  "%c🔍 Curioso(a), hein? Bom, já que está aqui... inscreva-se no podcast!",
  "color: #F97316; font-size: 14px; font-weight: bold; padding: 8px 0;"
);

console.log(
  "%c▶️ YouTube: %chttps://www.youtube.com/@PaponaArena",
  "color: #EF4444; font-weight: bold;",
  "color: #60A5FA; text-decoration: underline;"
);

console.log(
  "%c🎧 Spotify: %chttps://open.spotify.com/show/7lcBkPYn5HgEZjTkJhNUFJ",
  "color: #22C55E; font-weight: bold;",
  "color: #60A5FA; text-decoration: underline;"
);
```

---

### Código Final do main.tsx

```typescript
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

// Console Easter Egg 🥚
console.log(
  `%c
  ╔═══════════════════════════════════════════╗
  ║                                           ║
  ║   🎙️  P A P O   N A   A R E N A  🎙️      ║
  ║                                           ║
  ╚═══════════════════════════════════════════╝
  `,
  "color: #8B5CF6; font-weight: bold; font-size: 14px;"
);

console.log(
  "%c🔍 Curioso(a), hein? Bom, já que está aqui... inscreva-se no podcast!",
  "color: #F97316; font-size: 14px; font-weight: bold; padding: 8px 0;"
);

console.log(
  "%c▶️ YouTube: %chttps://www.youtube.com/@PaponaArena",
  "color: #EF4444; font-weight: bold;",
  "color: #60A5FA; text-decoration: underline;"
);

console.log(
  "%c🎧 Spotify: %chttps://open.spotify.com/show/7lcBkPYn5HgEZjTkJhNUFJ",
  "color: #22C55E; font-weight: bold;",
  "color: #60A5FA; text-decoration: underline;"
);

createRoot(document.getElementById("root")!).render(<App />);
```

---

### Detalhes Técnicos

| Elemento | Descrição |
|----------|-----------|
| `%c` | Permite aplicar estilos CSS ao console.log |
| ASCII Box | Caixa decorativa com caracteres Unicode |
| Cores | Roxo (#8B5CF6), Laranja (#F97316), Vermelho (#EF4444), Verde (#22C55E), Azul (#60A5FA) |
| Emojis | 🎙️ microfone, 🔍 lupa, ▶️ play, 🎧 fones |

---

### Resultado Esperado

Quando alguém abrir o DevTools (F12), verá:

```text
  ╔═══════════════════════════════════════════╗
  ║                                           ║
  ║   🎙️  P A P O   N A   A R E N A  🎙️      ║
  ║                                           ║
  ╚═══════════════════════════════════════════╝

🔍 Curioso(a), hein? Bom, já que está aqui... inscreva-se no podcast!

▶️ YouTube: https://www.youtube.com/@PaponaArena
🎧 Spotify: https://open.spotify.com/show/7lcBkPYn5HgEZjTkJhNUFJ
```

Tudo colorido e estilizado!

