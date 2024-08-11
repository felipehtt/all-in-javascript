import prompt from 'prompt-sync'
let ler = prompt()

let box = ''

console.log('\nQual tipo de carro foi alugado?')
let tipo = ler()
console.log('\nQuantos dias foi alugado?')
let dias = Number(ler())
console.log('\nQuantos km foi percorrido?')
let kms = Number(ler())

let popular = 90 * dias
let luxo = 150 * dias

let km1 = 0.20 * kms
let total1 = km1 + popular
let km2 = 0.10 * kms
let total2 = km2 + popular

let km3 = 0.30 * kms
let total3 = km3 + luxo
let km4 = 0.25 * kms
let total4 = km4 + luxo


if (tipo == 'popular') {
    if (kms <= 100) {
        box = `\nO total do aluguel é R$${total1}`
    }
    else if (kms >= 100) {
        box = `\nO total do aluguel é R$${total2}`
    }
}

else if (tipo == 'luxo') {
    if (kms <= 200) {
        box = `\nO total do aluguel é R$${total3}`
    }
    else if (kms >= 200) {
        box = `\nO total do aluguel é R$${total4}`
    }
}
else {
    box = `\nTipo inexistente.`
}
console.clear()
console.log(box)