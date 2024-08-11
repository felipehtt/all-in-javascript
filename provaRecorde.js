import prompt from "prompt-sync"
let ler = prompt()


console.log('qual melhor resultado numa prova das olimpiadas?')
let r = ler();

console.log('qual recorde mundial?')
let m = ler();

console.log('qual o recorde olimpico para essa prova?')
let l = ler();


if (r<m){
    console.log ('RM')
}

else if (r>=m)
{console.log('*')}

if(r<l){console.log('RO')}

else if (r>=l){
    console.log('*')
}