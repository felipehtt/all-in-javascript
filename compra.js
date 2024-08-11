import prompt from "prompt-sync";
let ler = prompt();

let c = 0
let p = 0
let lP = 0

console.log('Valor dos produtos:')

while (true) {

    p = Number(ler())

    if (p === -1 && lP !== 0) {
        c -= lP
        lP = 0
    }
    else if (p !== 0) {
        c += p
        lP = p
    }
    else {
        break;
    }
}

console.log(`O total da compra é R$${c}`)