import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

// Console Easter Egg 🥚
console.log(
  `%c
  ╔═══════════════════════════════════════════╗
  ║                                           ║
  ║   🎙️  P A P O   N A   A R E N A  🎙️       ║
  ║                                           ║
  ╚═══════════════════════════════════════════╝
  `,
  "color: #8B5CF6; font-weight: bold; font-size: 14px;",
);

console.log(
  "%c🔍 Curioso(a), hein? Bom, já que está aqui... inscreva-se no podcast!",
  "color: #F97316; font-size: 14px; font-weight: bold; padding: 8px 0;",
);

console.log(
  "%c▶️ YouTube: %chttps://www.youtube.com/@PaponaArena",
  "color: #EF4444; font-weight: bold;",
  "color: #60A5FA; text-decoration: underline;",
);

console.log(
  "%c🎧 Spotify: %chttps://open.spotify.com/show/7lcBkPYn5HgEZjTkJhNUFJ",
  "color: #22C55E; font-weight: bold;",
  "color: #60A5FA; text-decoration: underline;",
);

createRoot(document.getElementById("root")!).render(<App />);
