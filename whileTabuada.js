import prompt from 'prompt-sync'
let ler = prompt()

console.log('Qual numero da tabuada?')
let numTab = Number(ler())

let numero = 0

while (numero <= 10 && numero >=0) {
    let resultado = numTab * numero
    console.log(`${numTab} X ${numero} = ${resultado}`)
    numero ++
}
console.log(`Fim`)