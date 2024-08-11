import prompt from 'prompt-sync'
let ler = prompt()

console.log('Informe um numero para descobrir seus anteriores')
let numT = Number(ler())
let numT2 = Number(ler())

while (numT >= numT2) {
    console.log(numT)
    numT --
}