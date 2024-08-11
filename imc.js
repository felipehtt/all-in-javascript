import prompt from 'prompt-sync'
let ler = prompt()

console.log('\nPrograma para calcular o peso')

console.log('\nInforme o seu Peso:')
let peso = Number( ler() )

console.log('Informe o sua Altura:')
let altura = Number( ler() )

let imc = peso / (altura * altura)
let resultado = imc >= 25

console.log(`\nSeu IMC é ${imc.toFixed(1)}!`)
console.log(`\nVoce esta acima do peso? ${resultado}`)