/* string, number, boolean, object, function, array */

let nome = "Orpheu"
console.log(typeof nome)

let numero = 7
console.log(typeof numero)

let numeroFlutuante = 4.333
console.log(typeof numeroFlutuante)

let logico = true
console.log(typeof logico)

let objeto = {}
console.log(typeof objeto)

let vetor = [1, 2, 3]
console.log(typeof vetor) /*ERRO*/
console.log(Array.isArray(vetor))/*CORRETO*/

console.log(Array.isArray([])) /* {} [] string ou valor */

let soma = (a, b) => a+b
console.log(typeof soma)

let nomeDoProduto = "caneta"
console.log("O produto", "nomeDoProduto" + " Preço: " + 30.0)
console.log("O produto", "caneta" + " Preço: " + 30.0)
console.log("O produto", nomeDoProduto + " Preço: " + 30.0)
console.log('O produto" ${nomeDoProduto} Preço: 30.0')

console.log(2 + 2 + " é diferente de " + "2" + "2")