import prompt from "prompt-sync"
let ler = prompt()
console.clear()

let palavra = ler("Digite uma palavra e eu irei dizer se é um palindromo: ")
palavra = palavra.toUpperCase()
let count = 0

let palavra_lenght = false
let lenghts = 0

while (palavra_lenght == false) {
    if (palavra[count] == undefined) {
        palavra_lenght = true
        lenghts = count
        break
    }
    else {
        count++
    }
}

let count2 = 0
let resposta = "É um palindromo!"
while (lenghts > 0) {
    if (palavra[count2] != palavra[count - 1]) {
        lenghts = 0
        resposta = "Não é um palindromo!"
        break
    }
    count2++
    if (count == 0) {
        break
    }
    else {
        count--
    }
}
console.log(resposta);