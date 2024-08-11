import prompt from 'prompt-sync'
let ler = prompt()

console.log('Programa Livro')

console.log('\nInforme o nome do livro:')
let nome = ler()
console.log('\nInforme o total de paginas do livro:')
let pag = Number(ler())
console.log('\nInforme quantos segundos voce gasta para ler cada pagina:')
let second = Number(ler())

let resultado = (pag * second) / 3600

console.log(`\nVoce lerá ${nome} em ${resultado.toFixed(2)} horas.`)