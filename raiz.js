import prompt from 'prompt-sync';
let ler = prompt();

console.log('\nDigite um numero para descobrir sua raiz quadrada:');
let numero = Number( ler());

let raiz = Math.sqrt(numero);

console.log('O valor da raiz quadrada é: ' + raiz);