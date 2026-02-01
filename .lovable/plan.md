

## Plano: Adicionar LinkedIn aos perfis dos hosts

### Visao Geral
Adicionar campo opcional `linkedinUrl` na interface Person e exibir um botao de LinkedIn na pagina de perfil para os hosts que tiverem o link configurado.

---

### Arquivos a Modificar

**1. `src/data/mentions.ts`**

Alterar a interface Person para incluir o campo opcional:

```typescript
export interface Person {
  id: string;
  name: string;
  linkedinUrl?: string;
}
```

Atualizar as entradas dos hosts (linhas 1393-1394):

```typescript
{ id: "arthur", name: "Arthur", linkedinUrl: "https://www.linkedin.com/in/arthurdecastroaraujo/" },
{ id: "aiquis", name: "Aíquis", linkedinUrl: "https://www.linkedin.com/in/aiquis/" },
```

---

**2. `src/pages/PersonDetail.tsx`**

Adicionar o icone Linkedin na importacao do lucide-react (linha 6):

```typescript
import { ArrowLeft, MessageSquare, Mic, Package, Linkedin } from "lucide-react";
```

No header, apos "Contributor analytics" (linha 112), adicionar o link do LinkedIn quando disponivel:

```tsx
<div>
  <h1 className="text-2xl font-bold text-foreground">{person.name}</h1>
  <div className="flex items-center gap-2">
    <p className="text-muted-foreground">Contributor analytics</p>
    {person.linkedinUrl && (
      <a
        href={person.linkedinUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="text-muted-foreground hover:text-primary transition-colors"
      >
        <Linkedin className="w-4 h-4" />
      </a>
    )}
  </div>
</div>
```

---

### Resultado Esperado
- Icone do LinkedIn aparece ao lado de "Contributor analytics" apenas para Aiquis e Arthur
- Clicar no icone abre o perfil do LinkedIn em nova aba
- Outros contribuidores sem LinkedIn cadastrado nao exibem o icone

