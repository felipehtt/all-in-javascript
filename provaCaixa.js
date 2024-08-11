import prompt from "prompt-sync"
let ler = prompt()

console.log('qual valor de A?')
let caixaA = Number (ler());

console.log('qual valor de B?')
let caixaB = Number (ler());

console.log('qual valor de C?')
let caixaC = Number (ler())

console.log('qual valor de D?')
let caixaD = Number (ler())

if(caixaA = caixaB + caixaC + caixaD && caixaB + caixaC == caixaD && caixaB == caixaC)
{console.log('S')}

else {console.log('N')}