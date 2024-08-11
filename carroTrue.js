import prompt from 'prompt-sync'
let ler = prompt()

console.log('\nPrograma de Abastecimento!')

console.log('\nQual a capacidade total do tanque?')
let tanque = Number( ler() )

console.log('\nQual a quantidade atual no tanque?')
let quantidade = Number( ler() )

let carro = tanque / 4
let resultado = quantidade <= carro

console.log(`\nO carro deve ser reabastecido? ${resultado}`)