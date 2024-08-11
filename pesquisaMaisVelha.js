import prompt from 'prompt-sync'
let ler = prompt()

let c = 1

let maisVelhaNome = ''
let maisVelhaIdade = 0
let mulherJovemNome = ''
let mulherJovemIdade = Infinity
let soma = 0
let homemMais30 = 0
let mulheresMenos18 = 0
let total = 0

while (c == 1) {
    let nome = ler('Nome: ')
    let idade = ler('Idade: ')
    let sexo = ler('Sexo(M/F): ')

    if (idade>maisVelhaIdade) {
        maisVelhaNome=nome
        maisVelhaIdade=idade
    }
    if (sexo==='F' && idade < mulherJovemIdade) {
        mulherJovemNome=nome
        mulherJovemIdade=idade
    }
    soma += idade

    if (sexo === 'M' && idade > 30) {
        homemMais30++
    }
    if (sexo === 'F' && idade < 18) {
        mulheresMenos18++
    }
    total++
    
    let continuar = ler('Deseja continuar? (S/N): ')

    if (continuar === 'N') {
        c++
    }
}

let media = soma/total

console.log(`Nome pessoa mais velha: ${maisVelhaNome}`)
console.log(`Nome mulher mais jovem: ${mulherJovemNome}`)
console.log(`Média idades: ${media.toFixed(2)}`)
console.log(`Quantidade homens com mais de 30 anos: ${homemMais30}`)
console.log(`Quantidade mulheres com menos de 18 anos: ${mulheresMenos18}`)