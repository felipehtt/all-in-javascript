import prompt from 'prompt-sync'
let ler = prompt()

console.log(`\nPrograma para calcular a redução do tempo de vida de um fumante.`)

console.log('\nQuantos cigarros voce fuma por dia?')
let cigarro = Number(ler())
console.log('\nQuantos anos voce fuma?')
let ano = Number(ler())

let calc = cigarro * 365 * ano

let total = calc * 10 / 1440

console.log(`Voce perdeu ${parseInt(total)} anos de vida.`)
