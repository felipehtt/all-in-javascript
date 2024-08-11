import prompt from 'prompt-sync'
let ler = prompt()

console.log('\nPrograma de Nota!')

console.log('\nInforme a nota: ')
let nota = Number( ler() )

console.log('\nInforme sua a segunda nota')
let nota2 = Number( ler() )

console.log('\nInforme sua terceira nota')
let nota3 = Number( ler() )

let media = nota + nota2 + nota3 /3

let resultado = media >= 6

console.log('\nA media do aluno é: ' + media)
console.log('\nO aluno passou? ' + resultado)