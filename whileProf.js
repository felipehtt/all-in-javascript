import prompt from 'prompt-sync'
let ler = prompt()

let prof = ''

while (prof != 'Robson') {
    console.log('Qual meu prefessor favorito?')
    prof = ler()
}
console.log('\nBoaaaaa')