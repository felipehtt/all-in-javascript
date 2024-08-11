import prompt from 'prompt-sync'
let ler = prompt()

let cont = 0
let v = []
let par = []

console.log('Informe 10 numeros para guardar no vetor')

for (let i = 0; i < 10; i++) {
    let num = Number(ler())

    v[i] = num

    if (num % 2 == 0) {
        par[cont] = num
        cont++
    }
}
console.log('Os numeros pares adicionados são: ' + par)
console.log(par)