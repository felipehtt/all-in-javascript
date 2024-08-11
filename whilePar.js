import prompt from 'prompt-sync';
let ler = prompt();

console.log('\nInforme o numero:');
let num1 = Number ( ler() );
let num2 = Number ( ler() );


while (num1 <= num2) {

    if (num1 %2 == 0)
    {console.log(num1)}

    num1++
}