

## Plano: Corrigir reprodução de áudio inconsistente no mobile

### Problema
No mobile, clicar na foto do Arthur ou Aíquis nem sempre toca o som. Isso acontece por:

1. **Política de autoplay**: Browsers mobile bloqueiam `audio.play()` se não for tratado corretamente
2. **Eventos de toque**: `onClick` pode não capturar todos os toques em elementos complexos como Avatar
3. **Promise não tratada**: O `play()` retorna uma Promise que pode falhar silenciosamente

---

### Solução

Vou fazer três melhorias no arquivo `src/pages/PersonDetail.tsx`:

**1. Adicionar `onTouchEnd` além de `onClick`**

Em mobile, `onTouchEnd` é mais confiável que `onClick`:

```tsx
<Avatar
  onClick={handleAvatarClick}
  onTouchEnd={handleAvatarClick}
>
```

**2. Tratar a Promise do `play()`**

Adicionar tratamento de erro e usar `.catch()` para evitar erros silenciosos:

```tsx
const handleAvatarClick = (e: React.MouseEvent | React.TouchEvent) => {
  e.preventDefault();
  if ((person?.id === "arthur" || person?.id === "aiquis") && audioRef.current) {
    audioRef.current.currentTime = 0;
    audioRef.current.play().catch((error) => {
      console.log("Audio play failed:", error);
    });
  }
};
```

**3. Usar `playsInline` no elemento audio**

Adicionar atributo para melhor compatibilidade mobile:

```tsx
<audio ref={audioRef} src={arthurAudio} preload="auto" playsInline />
```

**4. Adicionar estilos para melhor área de toque**

Garantir que o Avatar tenha uma área de toque adequada com `touch-action: manipulation`:

```tsx
<Avatar
  className="... cursor-pointer select-none"
  style={{ touchAction: 'manipulation' }}
>
```

---

### Alterações Detalhadas

**Linha 29-34** - Atualizar `handleAvatarClick`:

```tsx
const handleAvatarClick = (e: React.MouseEvent | React.TouchEvent) => {
  e.preventDefault();
  e.stopPropagation();
  if ((person?.id === "arthur" || person?.id === "aiquis") && audioRef.current) {
    audioRef.current.currentTime = 0;
    audioRef.current.play().catch(() => {
      // Silently handle autoplay restrictions
    });
  }
};
```

**Linhas 111-122** - Atualizar Avatar com eventos de toque:

```tsx
<Avatar
  className={`w-14 h-14 bg-primary/10 ${
    person.id === "arthur" || person.id === "aiquis" 
      ? "cursor-pointer select-none active:scale-95 transition-transform" 
      : ""
  }`}
  onClick={handleAvatarClick}
  onTouchEnd={(e) => {
    e.preventDefault();
    handleAvatarClick(e);
  }}
  style={{ touchAction: 'manipulation' }}
>
```

**Linhas 123-124** - Adicionar `playsInline`:

```tsx
{person.id === "arthur" && <audio ref={audioRef} src={arthurAudio} preload="auto" playsInline />}
{person.id === "aiquis" && <audio ref={audioRef} src={aquisAudio} preload="auto" playsInline />}
```

---

### Por que isso resolve

| Problema | Solução |
|----------|---------|
| Toque não registrado | `onTouchEnd` + `preventDefault` |
| Áudio bloqueado | `playsInline` + tratamento de Promise |
| Área de toque pequena | `touchAction: manipulation` |
| Feedback visual | `active:scale-95` para indicar que foi tocado |

---

### Resultado Esperado
- Tocar na foto no mobile sempre reproduz o áudio
- Feedback visual (escala reduzida) indica que o toque foi registrado
- Funciona consistentemente em iOS e Android
- Mantém compatibilidade com desktop

