import prompt from 'prompt-sync'
let ler = prompt()

console.log('Informe um numero para descobrir sua ordem descrescente.')
let numT = Number(ler())

let numero = numT

while (numero >= 1) {
   console.log(numero)
    numero --
}


