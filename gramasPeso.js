import prompt from 'prompt-sync'
let ler = prompt ()

console.log('quantas gramas ira querer?')
let gramas = Number(ler())

let i = 3.50
let resultado = (i * gramas ) / 100

let o = 3.00
let resultado2 = (o * gramas) / 100

let e = 1.75
let resultado3 = (e * gramas) / 100

if (gramas >= 1000) {
    console.log(`o total a pagar é ${resultado2}`)
}
else if (gramas > 0 && gramas <= 999){
    console.log(`o total a pagar é ${resultado}`)
}
else if(gramas > 0 && gramas <= 100){
    console.log(`o total a pagar é ${resultado3}`)
}
else if(gramas <= 0) {
    console.log('Peso invalido')
}