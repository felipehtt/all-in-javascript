import prompt from 'prompt-sync'
let ler = prompt()

console.log('\nPrgrama de Dólar')
console.log('\nQuantos reais voce tem na sua carteira?')
let dinheiro = Number(ler())

let reais = dinheiro / 5.21

console.log(reais)
