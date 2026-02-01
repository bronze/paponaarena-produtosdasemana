
## Plano: Adicionar fotos dos hosts Arthur e Aíquis

### Objetivo
Distinguir os hosts do podcast dos demais contribuidores exibindo suas fotos nos avatares, tanto na lista de pessoas quanto na página de perfil individual.

---

### Arquivos a Criar

**1. Copiar imagens para o projeto**
- `src/assets/hosts/arthur.png` - Foto do Arthur
- `src/assets/hosts/aiquis.png` - Foto do Aíquis

---

### Arquivos a Modificar

**1. `src/data/mentions.ts`**

Adicionar campo opcional `avatarUrl` na interface Person:

```typescript
export interface Person {
  id: string;
  name: string;
  linkedinUrl?: string;
  avatarUrl?: string;
}
```

Atualizar as entradas dos hosts com as URLs das imagens:

```typescript
{ 
  id: "arthur", 
  name: "Arthur", 
  linkedinUrl: "https://www.linkedin.com/in/arthurdecastroaraujo/",
  avatarUrl: "/hosts/arthur.png"  // será importado como módulo
},
{ 
  id: "aiquis", 
  name: "Aíquis", 
  linkedinUrl: "https://www.linkedin.com/in/aiquis/",
  avatarUrl: "/hosts/aiquis.png"  // será importado como módulo
},
```

---

**2. `src/pages/People.tsx`**

Importar `AvatarImage` além de `AvatarFallback`:

```typescript
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
```

Atualizar o componente Avatar para exibir a foto quando disponível:

```tsx
<Avatar className="w-12 h-12 bg-primary/10">
  {person.avatarUrl && (
    <AvatarImage src={person.avatarUrl} alt={person.name} />
  )}
  <AvatarFallback className="bg-primary/10 text-primary font-medium">
    {getInitials(person.name)}
  </AvatarFallback>
</Avatar>
```

---

**3. `src/pages/PersonDetail.tsx`**

Importar `AvatarImage` além de `AvatarFallback`:

```typescript
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
```

Atualizar o avatar no header para exibir a foto quando disponível:

```tsx
<Avatar className="w-14 h-14 bg-primary/10">
  {person.avatarUrl && (
    <AvatarImage src={person.avatarUrl} alt={person.name} />
  )}
  <AvatarFallback className="bg-primary/10 text-primary font-semibold text-lg">
    {getInitials(person.name)}
  </AvatarFallback>
</Avatar>
```

---

### Comportamento

| Pessoa | Avatar |
|--------|--------|
| Arthur | Foto do Arthur |
| Aíquis | Foto do Aíquis |
| Outros | Iniciais (fallback) |

---

### Resultado Esperado
- Hosts aparecem com suas fotos reais nos avatares
- Demais contribuidores mantêm as iniciais como fallback
- Fotos aparecem tanto na lista de pessoas quanto no perfil individual
- Imagens são carregadas de forma otimizada via bundler do Vite
