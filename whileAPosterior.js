import prompt from 'prompt-sync'
let ler = prompt()

console.log('Informe um numero para descobrir seus numeros naturais.')
let numT = Number(ler())
let numT2 = Number(ler())
let numero = numT

while (numero <= numT2) {
    console.log(numero)
    numero ++
}