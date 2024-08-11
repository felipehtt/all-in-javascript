import prompt from 'prompt-sync'
let ler = prompt()

console.log('\nPrograma de Senha')

console.log('\nInforme uma senha com no minimo 6 caracteres:')
let senha = ler()

let review = senha.length

let validation = review >= 6

console.log(`\nA senha cumpre o requisito de tamanho? ${validation}.`)
console.log(`\nA senha é -> ${senha} <- e tem ${review} caracteres.`)