import prompt from 'prompt-sync'
let ler = prompt()

console.log('Informe o Numero de Moedas:')
let a = Number(ler())

console.log('Informe o Numero de tripulantes:')
let n = Number(ler())

let valor = n + 2
let total = a / valor * 2

console.log(`O capitão receberá: ${total}`)