import prompt from "prompt-sync"
let ler = prompt()
console.clear()

let a = []
let reversed = []
let counter = 9

console.log(`Insira 5 valores para o inverter`);

for (let i = 0; i < 5; i++) {
    let valor = ler()
    a[counter] = valor
    reversed[i] = a[counter] 
    counter--
}
console.log(a)