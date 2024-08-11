import prompt from 'prompt-sync'
let ler = prompt()

console.log('\nSistema de Controle de Entrada para um Estacionamento.')

let n = 0
let cap = 50

while (n < cap) {

    console.log('\nQuantos carros entraram no estacionamento?')
    let cars = Number(ler())

    n = n + cars

    console.log(n)

    if (n == cap) {
        console.log('\nMuito obrigado por usar nosso sistema! O estacionamento encheu!')
    }
    else if (n > cap) {
        console.log('\nNão é possível estacionar tantos veículos! Repita a entrada')
        n = n - cars
    }
    else if (n == cap) {
        console.log('\nMuito obrigado por usar nosso sistema!')
    }
    else if (cars <= 0) {
        console.log('\nNão houve entrada de carros.')
        n = 50
    }
}

console.log()