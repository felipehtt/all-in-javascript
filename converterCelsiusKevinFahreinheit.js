import prompt from 'prompt-sync';
let ler = prompt();

import { lerNumero, lerMensagem, escrever, celsius, kelvin, fahrenheit, fk } from './funcoes.js';
console.clear()

let temp = lerNumero('Informe a temperatura: ')

let escala = lerMensagem('\nInforme a escala: (Celsius, Fahrenheit e Kelvin)')

let conversao = lerMensagem('\nInforme para qual escala você irá converter: (Celsius, Fahrenheit e Kelvin)')

if ( escala == 'Celsius' && conversao == 'Kelvin') {

    let c = celsius(temp)
    let b = escrever((`\nA conversão de ${temp}ºC para Kelvin é ${c}K`))

}

else if ( escala == 'Kelvin' && conversao == 'Celsius') {

    let c = kelvin(temp)
    let b = escrever(`\nA conversão de ${temp}K para Celsius é ${c}ºC`)

}

else if ( escala == 'Fahrenheit' && conversao == 'Celsius') {

    let c = fahrenheit(temp)
    let b = escrever(`\nA conversão de ${temp}F para Celsius é ${c}ºC`)

}

else if ( escala == 'Celsius' && conversao == 'Fahrenheit') {

    let c = fahrenheit(temp)
    let b = escrever(`\nA conversão de ${temp}º para Fahrenheit é ${c}Fds`)

}

else if ( escala == 'Fahrenheit' && conversao == 'Kelvin') {

    let c = fk(temp)
    let b = escrever(`\nA conversão de ${temp}F para Fahrenheit é ${c}K`)

}

else if ( escala == 'Kelvin' && conversao == 'Fahrenheit') {

    let c = fk(temp)
    let b = escrever(`\nA conversão de ${temp}K para Fahrenheit é ${c}F`)

}