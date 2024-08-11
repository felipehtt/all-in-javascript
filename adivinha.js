import prompt from "prompt-sync"
let ler = prompt()

let r  = parseInt(Math.random() * 1000)

for (let i = 0; i < 9; i++) {
    console.log('\nVamos jogar um jogo, tente acertar o número aleatório, você tem 10 tentativas. O número é entre 0 e 1000:')
    let n = Number(ler())

    if (n < r) {
        console.log('\nO número é maior, tente novamente:')
    }

    else if (n > r) {
        console.log('\nO número é menor, tente novamente:')      
    }

    else if (n == r) {
    console.log('\nVocê acertou!!!!')
    }
}

