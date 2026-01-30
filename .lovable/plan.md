

## Plano: Converter Menção do Aíquis para Combo de Sites Imobiliários

### Visão Geral
Substituir o produto genérico "Sites de aluguel de apartamento" por um combo que credita os 4 sites imobiliários específicos mencionados.

---

### Análise de Dados

**Produtos existentes:**
| ID | Nome | Categoria |
|----|------|-----------|
| `quinto-andar` | Quinto Andar | Business |

**Produtos a criar:**
| ID | Nome | Categoria | URL |
|----|------|-----------|-----|
| `zap-imoveis` | Zap Imóveis | Business | https://www.zapimoveis.com.br/ |
| `viva-real` | Viva Real | Business | https://www.vivareal.com.br/ |
| `net-imoveis` | Net Imóveis | Business | https://www.netimoveis.com/ |
| `combo-sites-imoveis` | Zap Imóveis + Quinto Andar + Viva Real + Net Imóveis | Business | - (combo) |

**Produto a remover:**
| ID | Nome | Observação |
|----|------|------------|
| `sites-aluguel-apartamento` | Sites de aluguel de apartamento | Só tinha 1 menção, será substituído |

---

### Arquivo a Modificar
`src/data/mentions.ts`

---

### Detalhes Técnicos

**Passo 1 - Adicionar novos produtos** (na seção Business, próximo ao quinto-andar linha 1111):
```typescript
  { id: "zap-imoveis", name: "Zap Imóveis", category: "Business", url: "https://www.zapimoveis.com.br/" },
  { id: "viva-real", name: "Viva Real", category: "Business", url: "https://www.vivareal.com.br/" },
  { id: "net-imoveis", name: "Net Imóveis", category: "Business", url: "https://www.netimoveis.com/" },
  { 
    id: "combo-sites-imoveis", 
    name: "Zap Imóveis + Quinto Andar + Viva Real + Net Imóveis", 
    category: "Business", 
    alsoCredits: ["zap-imoveis", "quinto-andar", "viva-real", "net-imoveis"] 
  },
```

**Passo 2 - Remover produto genérico** (linha 1104):
```typescript
// REMOVER esta linha:
{ id: "sites-aluguel-apartamento", name: "Sites de aluguel de apartamento", category: "Business" },
```

**Passo 3 - Atualizar menção do episódio 27** (linha 1389):
```typescript
// DE:
{ id: "m27-2", episodeId: 27, personId: "aiquis", productId: "sites-aluguel-apartamento" },

// PARA:
{ id: "m27-2", episodeId: 27, personId: "aiquis", productId: "combo-sites-imoveis" },
```

---

### Resultado na UI
Na página do episódio 27, a menção do Aíquis aparecerá com:
- 4 badges clicáveis: **Zap Imóveis** + **Quinto Andar** + **Viva Real** + **Net Imóveis**
- Badge de **combo** indicando que foi uma menção combinada
- Cada produto receberá +1 menção em suas estatísticas individuais

---

### Resumo de Alterações

| Item | Ação |
|------|------|
| Produtos novos | 4 (3 sites + 1 combo) |
| Produtos removidos | 1 (genérico) |
| Menções atualizadas | 1 |

