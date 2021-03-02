/*
Como as declarações de variáveis (e declarações em geral)
são processadas antes de qualquer código seja executado,
declarar uma variável em qualquer lugar no código é equivalente
a declarar no inicio. Isso também significa que uma variável
pode aparecer para ser usada antes dela ser declarada.
Esse comportamento é chamado de "hoisting", a variável
é movida para o inicio da função ou do código global.
*/

var  a = 34;

/*
let permite que você declare variáveis limitando 
seu escopo no bloco, instrução, ou em uma expressão
na qual ela é usada. Isso é inverso da keyword var,
que define uma variável globalmente ou no escopo inteiro
de uma função, independentemente do escopo de bloco.
*/
let b = 55

var a = 6767
var a = 6767
b = 677
a = 0

console.log(a,b)

/*
constante é que uma vez atribuído um valor a ela,
este não pode ser alterado. Assim como as variáveis
declaradas com a palavra-chave let , constantes
também tem escopo de bloco
*/

const c = 777777
//c = 50

console.log(c)