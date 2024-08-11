import prompt from 'prompt-sync'
let ler = prompt()

console.log('Informe um numero para descobrir sua ordem crescente.')
let numT = Number(ler())

let numero = 1

while (numero <= numT) {
   console.log(numero)
    numero ++
}
