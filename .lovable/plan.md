

## Plano: Adicionar Episódio 103

### Dados do Episódio
- **ID**: 103
- **Data**: 2026-01-28
- **Título**: Você tem Product Sense?
- **Descrição**: Discussão sobre Product Sense e as ferramentas da semana.

---

### Análise de Pessoas e Produtos

#### Pessoas Existentes
| Pessoa | ID Existente |
|--------|--------------|
| Aíquis | `aiquis` |
| Arthur | `arthur` |
| Beatriz Morales | `beatriz-morales` |
| Amanda Couto | `amanda-couto` |
| Carlos Bronze | `carlos-bronze` |
| Beatriz Fazolo | `beatriz-fazolo` |
| Amilker | `amilker` |
| Bob | `bob` |
| Peixoto | `peixoto` |

#### Pessoas Novas a Criar (9)
| Nome | ID Sugerido |
|------|-------------|
| Caiman | `caiman` |
| Iago Maciel | `iago-maciel` |
| Thiago Valinho | `thiago-valinho` |
| Vanessa Silva | `vanessa-silva` |
| Rodrigo Frumento | `rodrigo-frumento` |
| Senra | `senra` |
| Cristiano | `cristiano` |
| Marcos Roman | `marcos-roman` |
| Paula Paradellas | `paula-paradellas` |
| Nelson de Moura | `nelson-moura` |
| Diego Espinilo | `diego-espinilo` |

---

#### Produtos Existentes
| Produto | ID Existente |
|---------|--------------|
| Manus AI | `manus-ai` |
| Gemini | `gemini` |
| ChatGPT | `chatgpt` |
| Microsoft Copilot 365 | `copilot-365` |
| Cursor | `cursor` |
| Lovable | `lovable` |
| Substack | `substack` |
| Antigravity | `antigravity` |
| NotebookLM | `notebooklm` |
| Tidal HiFi | `tidal-hifi` |

#### Produtos Novos a Criar (10)
| Nome | ID | Categoria |
|------|----|-----------|
| Duo Gourmet | `duo-gourmet` | Lifestyle |
| Massageador de pescoço e ombros | `massageador-pescoco` | Lifestyle |
| Cloud Cowork | `cloud-cowork` | Productivity |
| GChat | `gchat` | Productivity |
| Canvas | `canvas` | AI Tools |
| Bilhete Único | `bilhete-unico` | Transportation |
| Jira | `jira` | Productivity |
| ChatPRD | `chatprd` | AI Tools |
| Power Automate | `power-automate` | Automation |
| App do FGC | `app-fgc` | Finance |
| Isla | `isla` | AI Tools |
| Buy Tickets | `buy-tickets` | Business |
| Google Script | `google-script` | Productivity |

---

### Menções do Episódio 103 (22 entradas)

| ID | Pessoa | Produto |
|----|--------|---------|
| m103-1 | Aíquis | Duo Gourmet |
| m103-2 | Arthur | Massageador de pescoço e ombros |
| m103-3 | Caiman | Manus AI |
| m103-4 | Iago Maciel | Cloud Cowork |
| m103-5 | Thiago Valinho | Gemini |
| m103-6 | Thiago Valinho | GChat |
| m103-7 | Thiago Valinho | Canvas |
| m103-8 | Beatriz Morales | Bilhete Único |
| m103-9 | Vanessa Silva | ChatGPT |
| m103-10 | Vanessa Silva | Copilot |
| m103-11 | Amanda Couto | ChatGPT |
| m103-12 | Amanda Couto | Gemini |
| m103-13 | Rodrigo Frumento | ChatGPT |
| m103-14 | Rodrigo Frumento | Jira |
| m103-15 | Rodrigo Frumento | ChatPRD |
| m103-16 | Senra | Power Automate |
| m103-17 | Carlos Bronze | Cursor |
| m103-18 | Carlos Bronze | Lovable |
| m103-19 | Cristiano | App do FGC |
| m103-20 | Marcos Roman | Isla |
| m103-21 | Marcos Roman | Lovable |
| m103-22 | Paula Paradellas | Substack |
| m103-23 | Beatriz Fazolo | Buy Tickets |
| m103-24 | Nelson de Moura | Cursor |
| m103-25 | Nelson de Moura | Antigravity |
| m103-26 | Diego Espinilo | Antigravity |
| m103-27 | Amilker | Google Script |
| m103-28 | Amilker | NotebookLM |
| m103-29 | Bob | Tidal |
| m103-30 | Peixoto | Lovable |

---

### Implementação no Arquivo `src/data/mentions.ts`

#### 1. Adicionar episódio (após linha 258)
```typescript
{
  id: 103,
  title: "Você tem Product Sense?",
  date: "2026-01-28",
  description: "Discussão sobre Product Sense e as ferramentas da semana.",
},
```

#### 2. Adicionar produtos novos (seção apropriada)
- `duo-gourmet` em Lifestyle
- `massageador-pescoco` em Lifestyle
- `cloud-cowork` em Productivity
- `gchat` em Productivity
- `canvas` em AI Tools
- `bilhete-unico` em Transportation
- `jira` em Productivity
- `chatprd` em AI Tools
- `power-automate` em Automation
- `app-fgc` em Finance
- `isla` em AI Tools
- `buy-tickets` em Business
- `google-script` em Productivity

#### 3. Adicionar pessoas novas (seção people)
11 novas pessoas

#### 4. Adicionar menções (após linha 1303)
30 novas menções para o episódio 103

