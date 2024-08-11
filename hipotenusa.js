import prompt from 'prompt-sync'
let ler = prompt()

console.log('Programa para calcular a hipotenusa')

console.log('Qual o cateto oposto?')
let co = Number(ler())
console.log('Qual o cateto adjacente?')
let ca = Number(ler())

let somac = Math.sqrt(co **2 + ca **2)

console.log('A hipotenusa é ' + somac)