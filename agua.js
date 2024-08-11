import prompt from 'prompt-sync'
let ler = prompt()

console.log('\nPrograma de Desconto. Economizou?')

console.log('\nQuantos litros você gastou em janeiro?')
let janeiro = Number(ler())

console.log('\nQuantos litros você gastou em fevereiro?')
let fevereiro = Number(ler())

console.log('\nQuantos litros você gastou em março?')
let março = Number(ler())

console.log('\nQuantos litros você gastou em abril?')
let abril = Number(ler())

console.log('\nQuantos litros você gastou em maio?')
let maio = Number(ler())

console.log('\nQuantos litros você gastou em junho?')
let junho = Number(ler())

console.log('\nQuantos litros você gastou em julho?')
let julho = Number(ler())

console.log('\nQuantos litros você gastou em agosto?')
let agosto = Number(ler())

console.log('\nQuantos litros você gastou em setembro?')
let setembro = Number(ler())

console.log('\nQuantos litros você gastou em outubro?')
let outubro = Number(ler())

console.log('\nQuantos litros você gastou em novembro?')
let novembro = Number(ler())

console.log('\nQuantos litros você gastou em dezembro?')
let dezembro = Number(ler())

console.log('\nQuantos litros você gastou nesse mês?')
let atual = Number(ler())

let calc = janeiro + fevereiro + março + abril + maio + agosto + setembro + novembro + dezembro

let calc1 = (calc + atual) / 12

let calc2 = atual * 100

let calc3 = calc2 / calc1

let calc4 = calc3 - 100

console.log('\nSua média de consumo dos últimos 12 meses foi de ' + calc1 + ' litros.')

console.log('\nVocê economizou ' + calc4)

if (calc4 >= 20) {
    console.log('\nVocê possui desconto')
}
else {
    console.log('\nVocê não possui desconto')
}