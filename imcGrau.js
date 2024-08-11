import prompt from 'prompt-sync'
let ler = prompt()

console.log('\nPrograma para calcular o IMC')

console.log('\nInforme o seu Peso:')
let peso = Number( ler() )

console.log('Informe o sua Altura:')
let altura = Number( ler() )

let imc = peso / (altura * altura)

if (imc >= 40) {
    console.log(`\nSeu IMC é ${imc.toFixed(2)}!`)
    console.log('\nSua classificação é Obesidade Grau |||')
}
else if (imc >= 35 && imc < 39.9) {
    console.log(`\nSeu IMC é ${imc.toFixed(2)}!`)
    console.log('\nSua classificação é Obesidade Grau ||')
}
else if (imc >= 30 && imc < 34.9) {
    console.log(`\nSeu IMC é ${imc.toFixed(2)}!`)
    console.log('\nSua classificação é Obesidade Grau |')
}
else if (imc >= 25 && imc < 29,9) {
    console.log(`\nSeu IMC é ${imc.toFixed(2)}!`)
    console.log('\nSua classificação é Sobrepeso')
}
else if (imc >= 18.5 && imc < 24.9) {
    console.log(`\nSeu IMC é ${imc.toFixed(2)}!`)
    console.log('\nSua classificação é Peso Normal')
}
else if (imc < 18.5) {
    console.log(`\nSeu IMC é ${imc.toFixed(2)}!`)
    console.log('\nSua classificação é Abaixo do Peso')
}
