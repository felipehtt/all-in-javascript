import prompt from 'prompt-sync';
let ler = prompt();

console.log('\nJogo do Verdadeiro ou Falso.');

console.log('\nDigite um numero de 0 á 10:')
let numero =  Number ( ler() );

let aleatorio = parseInt(Math.random()* 10);

console.log(aleatorio==numero);

console.log(aleatorio);