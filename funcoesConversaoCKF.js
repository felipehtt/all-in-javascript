import prompt from 'prompt-sync'
let ler = prompt()

//Dobro
export function dobro(n) {
    let dobro = n * 2
    return dobro
}

//Ler Num
export function lerNumero(mensagem) {
    console.log(mensagem)
    let n = Number(ler())
    return n
}

//Ler Men
export function lerMensagem(mensagem) {
    console.log(mensagem)
    let men = ler()
    return men
}

//Escrever men
export function escrever(mensagem) {
    console.log(mensagem)
    return escrever
}

//Celsius para Kelvin
export function celsius(c) {
    //K = C + 273
    let graus = c + 273
    return graus
}

//Kelvin para Celsius
export function kelvin(k) {
    //K = C - 273
    let graus = k - 273
    return graus
}

//Fahrenheit para Celsius e Celsius para Fahrenheit
export function fahrenheit(f) {
    //F = 1,8C + 32
    let graus = 1.8 * f + 32
    return graus
}

//Fahrenheit para Kelvin e Kelvin para Fahrenheit
export function fk(f) {
    //K = ( F - 32 ) * 5 / 9 + 273
    let graus = (f - 32) * 5/9 + 273
    return graus
}