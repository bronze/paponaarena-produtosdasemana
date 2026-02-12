
## Juntar Caroline Cardoso com Carol Cardoso

### Resumo

A pessoa "Caroline Cardoso" (`caroline-cardoso`) criada no episodio 105 eh a mesma "Carol Cardoso" (`carol-cardoso`) que ja existia desde o episodio 47. Vamos remover a entrada duplicada e apontar a mencao para o ID existente.

### Alteracoes em `src/data/mentions.ts`

1. **Remover** a entrada `{ id: "caroline-cardoso", name: "Caroline Cardoso" }` do array de pessoas
2. **Alterar** a mencao `m105-14` de `personId: "caroline-cardoso"` para `personId: "carol-cardoso"`

Resultado: Carol Cardoso fica com 5 mencoes (eps 47, 79, 83, 89, 105) todas sob o mesmo ID.
