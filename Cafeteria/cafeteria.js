import prompt from 'prompt-sync'
let ler = prompt()

const AZUL = '\x1b[1;34m%s\x1b[0m';
const CIANO = '\x1b[1;36m%s\x1b[0m';
const AVISO = '\x1b[1;33m%s\x1b[0m';
const ERRADO = '\x1b[1;31m%s\x1b[0m';
const TITULO = `      
 _____ _____ _____ _____ _____ _____ 
|     |     |   __|   __|   __|   __|
|   --|  |  |   __|   __|   __|   __|
|_____|_____|__|  |__|  |_____|_____|                                 
`

console.clear();

console.log(AVISO, TITULO)
console.log(AZUL, `Bem-vindo á nossa cafeteria!`)
console.log(AZUL, `Qual seu nome?!`)
ler()

console.log(AZUL, `\nPressione ENTER para continuar`)
ler()

console.log(CIANO, `\nQual seu pedido?
1- Café Pequeno: R$ 1.50; 
2- Café Médio: R$ 2.50;
3- Café Grande: R$ 3.00;
4- Não quero.`)
let pedido = Number(ler())

console.log(CIANO, '\nQuantos cafés voce gostaria?')
let qtdCafe = Number(ler())

let pequeno = 1.50 * qtdCafe
let medio = 2.50 * qtdCafe
let grande = 3.00 * qtdCafe

console.log(AZUL, '\nPedido anotado!!')
ler()
console.clear()

let empadinha = ''
let empadinhas = 2.30

console.log(CIANO, '\nVendemos empadinhas tambem, quer se deliciar com elas?')
ler()

console.clear()

if (pedido == 4) {
    empadinha = 'Quantas empadinhas voce gostaria?'
}

else if (pedido == 1 || 2) {
    empadinha = `
-----------------------------------------------------------------
Quantas empadinhas voce vai querer? Ao levar 6 empadinhas ou mais,
será dado 15% de desconto.
------------------------------------------
`
}

//ESSE ELSE IF COM PEDIDO 3 NAO ESTA EXECUTANDO A MENSAGEM, POREM O PROGRAM ESTA FUNCIONANDO MESMO ESCOLHENDO O CAFE GRANDE :)
else if (pedido == 3) {
    empadinha = `
-----------------------------------------------------------------
Quantas empadinhas voce vai querer? Ao levar 4 empadinhas ou mais, 
será dado 20% de desconto.
------------------------------------------
`
}
else {
    empadinha = 'Você não escolheu empadinhas'
}

console.log(AVISO, empadinha)
let qtd = Number(ler())

console.log(AZUL, `\nPedido realizado!`)
ler()

let calc = qtd * empadinhas
let calc2 = (qtdCafe * pequeno) + calc
let calc3 = (qtdCafe * medio) + calc
let calc4 = (qtdCafe * grande) + calc 
let calc5 = (calc2 * 15) / 100
let calc6 = (calc3 * 15) / 100
let calc7 = (calc4 * 20) / 100

let total1 = calc5
let total2 = calc6
let total3 = calc7

let total = ''

console.log(AVISO, TITULO)

if (pedido == 1) {
    if (qtd >= 6) {
        total = `\n
SEU PEDIDO: ${qtdCafe} Café e ${qtd} Empadinhas
----------------------------------------------
O valor total a pagar é: ${calc2}

Seu desconto foi: ${total1}
`
    }
else if(qtd < 6) {
    total = `\n
SEU PEDIDO: ${qtdCafe} Café e ${qtd} Empadinhas
----------------------
O valor total a pagar é:
${calc2}
`
}
else {
    total = `\n
SEU PEDIDO: ${qtdCafe} Café e ${qtd} Empadinhas
----------------------
O valor total a pagar é:
${calc}
`
}
}
else if (pedido == 2) {
if (qtd >= 4) {
        total = `\n
SEU PEDIDO: ${qtdCafe} Café e ${qtd} Empadinhas
----------------------
O valor total a pagar é: ${calc3}

Seu desconto foi: ${total2}
`
    }
else if (qtd < 6) {
    total = `\n
SEU PEDIDO: ${qtdCafe} Café e ${qtd} Empadinhas
----------------------
O valor total a pagar é:
${calc3}
`
}
else {
    total = `\n
SEU PEDIDO: ${qtdCafe} Café e ${qtd} Empadinhas
----------------------
O valor total a pagar é:
${calc}
`
}
}
else if (pedido == 3) {
    if (qtd >= 4) {
    total = `\n
SEU PEDIDO: ${qtdCafe} Café e ${qtd} Empadinhas
----------------------
O valor total a pagar é: ${calc4}
Seu desconto foi: ${total3}
`
    }
else if(qtd < 4) {
    total = `\n
SEU PEDIDO: ${qtdCafe} Café e ${qtd} Empadinhas
----------------------
O valor total a pagar é:
${calc3}
`
}
else {
    total = `\n
SEU PEDIDO: ${qtdCafe} Café e ${qtd} Empadinhas
----------------------
O valor total a pagar é:
${calc}
`
}
}
console.log(AVISO, total)