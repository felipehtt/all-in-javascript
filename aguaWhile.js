import prompt from 'prompt-sync'
let ler = prompt()

let c = 1
let m = 0

while (c <= 12) {
    console.log(`\nQuais foram seus últimos 12 consumos mensais de água?`)
    let u = Number(ler())
    c++

    m = m + u

}

m = m / (c - 1)

console.log('\nInsira o seu consumo deste mês')
let atual = Number(ler())

console.log(`\nSua média de consumo dos últimos 12 meses foi de ${m} litros`)

let p = (atual * 100) / m
let t = (-p) + 100

console.log(`\nVocê economizou ${t}%`)

if (t > 20) {
    console.log('\nVocê ganhou desconto')
}
else if (t <= 20) {
    console.log('\nVocê não ganhou desconto')
}