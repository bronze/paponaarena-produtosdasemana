

## Plano: Som aleatório para Aíquis

### Objetivo
Quando clicar na foto do Aíquis, tocar aleatoriamente um dos dois sons: o atual ("aiquis-po") ou o novo ("aiquis-cara").

---

### Alterações

#### 1. Copiar o novo arquivo de áudio
Copiar `user-uploads://aiquis-cara.mp3` para `src/assets/audio/audio-aiquis-cara.mp3`

#### 2. Modificar `src/pages/PersonDetail.tsx`

**Adicionar import do novo áudio:**
```typescript
import aquisAudioCara from "@/assets/audio/audio-aiquis-cara.mp3";
```

**Atualizar a lógica do `audioSrc`:**

Mudar de um valor fixo para um array de sons apenas para o Aíquis:
```typescript
const aquisAudios = [aquisAudio, aquisAudioCara];

const audioSrc = useMemo(() => {
  if (person?.id === "arthur") return arthurAudio;
  if (person?.id === "aiquis") return aquisAudio; // valor inicial, será sobrescrito dinamicamente
  return null;
}, [person?.id]);
```

**Modificar a função `playSound`:**

Para o Aíquis, selecionar aleatoriamente entre os dois sons antes de tocar:
```typescript
const playSound = () => {
  const audio = audioRef.current;
  if (!audio) return;
  
  // Para Aíquis, escolher som aleatório
  if (person?.id === "aiquis") {
    const randomAudio = aquisAudios[Math.floor(Math.random() * aquisAudios.length)];
    audio.src = randomAudio;
  }

  const wasEnded = audio.ended;
  audio.pause();
  audio.currentTime = 0;

  if (wasEnded) {
    audio.load();
  }

  audio.play().catch(() => {});
};
```

---

### Resultado

| Pessoa | Comportamento |
|--------|---------------|
| Arthur | Sempre toca o mesmo som |
| Aíquis | Toca aleatoriamente "aiquis-po" ou "aiquis-cara" (50/50) |
| Outros | Sem áudio |

---

### Detalhes Técnicos

- `Math.random()` gera número entre 0 e 1
- `Math.floor(Math.random() * 2)` retorna 0 ou 1 com probabilidade igual
- O `audio.src` é atualizado dinamicamente antes de cada reprodução
- Compatível com mobile (mantém `load()` após término)

