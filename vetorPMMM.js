import prompt from 'prompt-sync'
let ler = prompt()

let cont = 0
let par = []
let v = []
let calculo = 0
let maiorN = 0
let menorN = 10

console.log('Informe quantos valores voce quer inserir:')
let p = Number(ler())
console.clear()

console.log('Informe os valores:')

for(let i = 0; i < p; i++) {
    
    let n = (Number(ler()))

    v[i] = n
    calculo = calculo + n

    if (i > maiorN) {
        maiorN = n
    }
    if (i < menorN) {
        menorN = n
    }
    if (n % 2 == 0) {
        par[cont] = n
        cont++
    }
}

let m = calculo / p

console.log('Os numeros pares adicionados são: ' + par)

console.log(`O maior valor é: ${maiorN}`)

console.log(`O menor valor é: ${menorN}`)

console.log(`A media foi: ${m.toFixed(1)}`)

if (n > m ){
    console.log()
}