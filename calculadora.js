import prompt from "prompt-sync"
let ler = prompt()

let resposta = ''

console.log(`Vamos fazer a conta de acordo com o que vc escolher: 
1. Somar
2. Subtrair
3. Multiplicar
4. Dividir
5. Potência
6. Raiz quadrada
0. Sair
`)
let escolha = Number(ler())

console.log('Informe um número:')
let first = Number(ler())

console.log('Informe outro número:')
let second = Number(ler())

if (escolha == 1) {
    let s = first + second
    resposta = `Resultado é ${s}`
}

else if (escolha == 2) {
    let m = first - second
    resposta = `Resultado é ${m}`
}

else if (escolha == 3) {
    let mu = first * second
    resposta = `Resposta é ${mu}`
}

else if (escolha == 4) {
    let d = first / second
    resposta = `Resposta é ${d}`
}

else if (escolha == 5) {
    let p = first ** second
    resposta = `Resposta é ${p}`
}

else if (escolha == 6) {
    console.log('Informe um número para tirar a raiz:')
    let q = Number(ler())

    let r = Math.sqrt(q)
    resposta = `Resposta é ${r}`
}

console.log(resposta)