import prompt from 'prompt-sync'
let ler = prompt()

console.log('\nPrograma para Situação do Aluno')

console.log('\nInforme a nota do primeiro bimestre:')
let nota1 = Number(ler())
console.log('\nInforme a nota do segundo bimestre:')
let nota2 = Number(ler())
console.log('\nInforme a nota do terceiro bimestre:')
let nota3 = Number(ler())

let media = (nota1 + nota2 + nota3) / 3

let situacion = ''

if (media >= 5) {
    situacion = 'Aluno aprovado'
}
else if (media >= 3 && media < 5) {
    situacion = 'Aluno em recuperação'
}
else {
    situacion = 'Aluno reprovado'
}

console.log('\nA média é: ' + media)
console.log(situacion)