import prompt from "prompt-sync"
let ler = prompt()


console.log('quantas moedas tem na arca?')
let a = Number (ler());

console.log('o numero de marinheiros')
let n =  Number (ler());

let capitao = (a / (n + 2)*2)

console.log('a resposta é '+ capitao)