/*
- Não se pode criar constantes (const) com palavras reservadas (let, var, if, etc.);
- Constantes precisam ter nomes significativos (let nome = 'João';);
- Não se pode começar o nome de uma constante com um número;
- Não podem conter espaços ou traços;
- Utilizar 'camelCase' sempre que possível (let nomeCompleto = 'João Silva';);
- Case sensitive (letras maiúsculas e minúsculas fazem diferença);
- Não podemos modificar o valor de uma constante;
- Não podemos declarar uma constante vazia (sem inicializar);
- NÃO UTILIZE VAR, UTILIZE CONST!

Ex:

const nome = 'João';
console.log(nome);

*/

const primeiroNumero = 5;
const segundoNumero = 10;
const resultado = primeiroNumero * segundoNumero;

console.log(resultado)