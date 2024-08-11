import prompt from 'prompt-sync'
let ler = prompt()

let cont = 0
let v = []

console.log('\nInforme 15 numeros para guardar no vetor')
for (let i = 0; i < 15; i++) {
    v[i] = Number(ler())
}

console.log('Os numeros maiores q 10 são:')

for (let itens of v) {
    if (itens >= 10) {
        console.log(itens)
    }
}