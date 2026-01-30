

## Plano: Adicionar sufixo de playlist do YouTube como variavel configuravel

### Objetivo
Adicionar um sufixo aos links do YouTube para abrir os videos dentro de uma playlist especifica, mantendo o sufixo como uma variavel editavel.

---

### Arquivos a Modificar

**1. `src/data/mentions.ts`** - Adicionar constante de configuracao

Adicionar uma constante no inicio do arquivo para o sufixo da playlist:
```typescript
// YouTube playlist suffix - edit this to change the playlist
export const YOUTUBE_PLAYLIST_SUFFIX = "&list=PLDz-F0OTctcY5ElkySqbW6Y_l2ASCZRQs";
```

**2. `src/pages/EpisodeDetail.tsx`** - Usar a constante no link

Importar a constante e concatenar ao link:
```typescript
import { YOUTUBE_PLAYLIST_SUFFIX } from "@/data/mentions";

// No link do YouTube:
href={`${episode.youtubeLink}${YOUTUBE_PLAYLIST_SUFFIX}`}
```

**3. `src/pages/Episodes.tsx`** - Usar a constante nos cards

Mesma alteracao para os icones nos cards de episodios:
```typescript
import { YOUTUBE_PLAYLIST_SUFFIX } from "@/data/mentions";

// No link do YouTube:
href={`${episode.youtubeLink}${YOUTUBE_PLAYLIST_SUFFIX}`}
```

---

### Beneficios
- Sufixo centralizado em um unico lugar
- Facil de editar ou remover futuramente
- Nao modifica os dados originais dos episodios

