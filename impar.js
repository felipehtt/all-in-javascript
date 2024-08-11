import prompt from 'prompt-sync'
let ler = prompt()

console.log('\nPrograma para descubrir se o número é impar')

console.log('\nInforme o número:')
let numero = Number( ler() )

let imp = numero % 2

console.log(`\nSeu numero é Impar? ${imp !== 0}`)