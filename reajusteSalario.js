import prompt from 'prompt-sync'
let ler = prompt()

let box = ''

console.log('\nReajuste de salário')
console.log('\nQual seu nome?')
let nome = ler()

console.log('\nInforme sua idade?')
let idade = Number(ler())

console.log('\nInforme seu salário')
let salario = Number(ler())

console.log('\nA quantos anos você trabalha na empresa?')
let tempo = Number(ler())

let valor1 = (salario * 3 /100)
let reajuste1 = salario + valor1

let valor2 = (salario * 12.5 /100)
let reajuste2 = salario + valor2

let valor3 = (salario * 20 /100)
let reajuste3 = salario + valor3

if ( tempo <= 3 ) {
    box = `Você teve um aumento de 3% no seu salário, seu salario agora é ${reajuste1}`
}


else if (tempo >= 3 && tempo <=10) {
    box = `Você teve um aumento de 12.5% em seu salário, seu salario agora é ${reajuste2}`
}

else if ( tempo >=10 ) {
    box = `Você teve um aumento de 20% no seu salário, seu salario agora é ${reajuste3} parabens!`
}

console.log(box)