import prompt from 'prompt-sync'
let ler = prompt()

let box = ''

console.log('\nCompre seu ingresso aqui!')

console.log('\nMeia ou inteira?')
let escolha = ler()

console.log('\nQuantos ingressos?')
let quant = Number( ler() )

let meia = 14.25
let inteira = 28.50
let valor = quant * meia
let valor2 = quant * inteira

if (escolha == 'meia') {
   box = `\nO total a pagar é ${valor}`
}

else if(escolha == 'inteira') {
   box = `\nO total a pagar é ${valor2}`
}
else {
   box = `\nEscolha uma opção valida`
}

console.log(box)