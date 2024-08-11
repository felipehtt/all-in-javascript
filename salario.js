import prompt from 'prompt-sync'
let ler = prompt()

console.log('\nPrograma para calcular o salário:')

console.log('\nInforme o salário bruto:')
let salario = Number( ler() )

console.log('\nInforme o bonus mensal:')
let bonus = Number( ler() )

console.log('\nInforme o desconto:')
let desconto = Number( ler() )

let s = salario * bonus / 100
let b = salario + s
let resultado = b - desconto

console.log('\nO seu salario final é: ' + resultado)