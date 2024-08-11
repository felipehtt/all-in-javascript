import prompt from "prompt-sync";
let ler = prompt()

console.log('Informe quantos numeros vão ser guardados:')
let num  = Number(ler())

let A = []
let B = []

console.log('Informe os numeros:')
for(let i = 0 ; i < num ; i++){
    A[i] = Number(ler())
    B[num-1] = A[i]
    num--
}
console.log(A)
console.log(B)