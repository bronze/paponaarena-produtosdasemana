

## Plano: Tocar áudio ao clicar na foto do Arthur

### Objetivo
Adicionar um easter egg no perfil do Arthur: quando alguém clicar na foto dele, um áudio especial será reproduzido. O áudio será carregado apenas na página de perfil do Arthur.

---

### Arquivos a Criar

**1. Copiar áudio para o projeto**
- `src/assets/audio/audio-arthur.mp3` - Áudio do Arthur

---

### Arquivo a Modificar
`src/pages/PersonDetail.tsx`

---

### Alterações

**1. Importar o áudio condicionalmente**

Importar o arquivo de áudio apenas para o Arthur:

```typescript
import arthurAudio from "@/assets/audio/audio-arthur.mp3";
```

**2. Adicionar state para controlar reprodução**

```typescript
import { useRef } from "react";

// Dentro do componente:
const audioRef = useRef<HTMLAudioElement | null>(null);

const handleAvatarClick = () => {
  if (person.id === "arthur") {
    if (audioRef.current) {
      audioRef.current.currentTime = 0;
      audioRef.current.play();
    }
  }
};
```

**3. Renderizar elemento de áudio para Arthur**

```tsx
{person.id === "arthur" && (
  <audio ref={audioRef} src={arthurAudio} preload="auto" />
)}
```

**4. Tornar avatar clicável apenas para Arthur**

Adicionar cursor pointer e onClick no Avatar apenas para Arthur:

```tsx
<Avatar 
  className={`w-14 h-14 bg-primary/10 ${
    person.id === "arthur" ? "cursor-pointer hover:ring-2 hover:ring-primary/50 transition-all" : ""
  }`}
  onClick={handleAvatarClick}
>
```

---

### Comportamento

| Perfil | Clique no Avatar |
|--------|------------------|
| Arthur | Reproduz áudio + cursor pointer |
| Aíquis | Nada acontece |
| Outros | Nada acontece |

---

### Detalhes Técnicos

1. **Carregamento condicional**: O elemento `<audio>` só é renderizado quando `person.id === "arthur"`
2. **Preload**: Usa `preload="auto"` para carregar o áudio antecipadamente
3. **Replay**: `currentTime = 0` permite clicar novamente para tocar desde o início
4. **Feedback visual**: Cursor pointer e efeito hover indicam que é clicável

---

### Resultado Esperado
- Apenas na página do Arthur, clicar na foto reproduz o áudio
- Feedback visual indica que a foto é clicável
- Áudio pode ser reproduzido múltiplas vezes
- Não afeta outras páginas de perfil

