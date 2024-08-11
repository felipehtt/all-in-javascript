import prompt from 'prompt-sync'
let ler = prompt()
console.log('\nPrograma de loja de Açai')


console.log('\nQuantos pequenos voce deseja?')
let pequeno = Number( ler() )

console.log('\nQuantos medios voce deseja?')
let medio = Number( ler() )

console.log('\nQuantos grandes voce deseja?')
let grande = Number( ler() )

let p = 13.50
let m = 15.00
let g = 17.50

let soma1 = pequeno * p
let soma2 = medio * m 
let soma3 = grande * g

let resultado = soma1 + soma2 + soma3

console.log('\nTem desconto? Se sim, quanto?')
let desconto = Number( ler() )

let resultado2 = resultado * desconto / 100

console.log('\nO total a pagar é: ' + resultado2)
