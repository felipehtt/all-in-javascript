import prompt from "prompt-sync"
let ler = prompt()

console.log('qual valor de A?')
let A = Number (ler());

console.log('qual valor de B?')
let B = Number (ler());

console.log('qual valor de C?')
let C = Number (ler())


if(A+B<C || B+C<A){
    console.log('1')
}

else if (A==B && A==C && B==A){
    console.log('3')
}

else if(A<B && B==C)
{console.log('3')}

else if (A+B>C){
    console.log('2')
}

else if (A==B==C)
console.log('3')