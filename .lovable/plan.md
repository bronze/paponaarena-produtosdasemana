

## Atualizar plano do Ep 106: Gemini + Vercel como combo

### Mudanca em relacao ao plano anterior

Em vez de 2 mencoes separadas para o Adriano Pereira (Gemini e Vercel), sera criado 1 produto combo que credita ambos:

**Produto combo a criar:**
```
id: "combo-gemini-vercel"
name: "Gemini + Vercel"
category: "AI Tools"
alsoCredits: ["gemini", "vercel"]
```

**Mencoes do Adriano Pereira:**
- Antes: 2 mencoes separadas (gemini + vercel)
- Agora: 1 mencao para `combo-gemini-vercel` com context "pro Adriano, Gemini + Vercel e combo"

Isso faz com que a mencao conte para os totais tanto do Gemini quanto do Vercel individualmente, e na UI apareca com os links separados por "+" e o badge "combo".

### Plano completo atualizado

Tudo em `src/data/mentions.ts`:

**1. Episodio 106** (sem mudanca)

**2. Produtos** - 12 novos (era 11, agora inclui o combo):
- Os 11 do plano anterior (copy-paste-google-docs, voice-recorder-motorola, chess-com, gemini-code-assistant, vscode, beats, nanobot, soundcore-sport-x20, vercel, life360, air-fryer)
- `combo-gemini-vercel` (alsoCredits: ["gemini", "vercel"])

**3. Pessoas** - 10 novas (sem mudanca)

**4. Mencoes** - 30 entradas (era 31, agora sao 30 porque as 2 do Adriano viram 1 combo):
```
Efrem -> copy-paste-google-docs
Efrem -> voice-recorder-motorola
Arthur -> replit
Aiquis -> chess-com
Carlos Bronze -> claude
Carlos Bronze -> claude-code
Paulo de Almeida -> gemini-code-assistant
Paulo de Almeida -> vscode
Erika -> notebooklm
Erika -> chatgpt
Erika -> beats
Vinicius Santos -> notebooklm
Vinicius Santos -> claude
Danilo Franco -> nanobot
Cristiano -> antigravity
Marlon -> gemini
Marlon -> notebooklm
Beatriz Morales -> cursor
Beatriz Morales -> snowflake
Walmir -> soundcore-sport-x20
Peixoto -> lovable
Peixoto -> manus-ai
Peixoto -> replit
Rafael Ferreira -> replit
Thays Bueno -> cursor
Nessa Carla -> gymrats
Adriano Pereira -> combo-gemini-vercel (context: "pro Adriano, Gemini + Vercel e combo")
Gustavo Cardoso -> whatsapp
Yuri -> life360
Ana Carolina -> air-fryer
```

