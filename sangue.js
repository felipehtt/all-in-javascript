import prompt from "prompt-sync"
let ler = prompt()

console.log('PROGRAMA PARA VER SE A PESSOA PODE DOAR SANGUE')

console.log('Informe o seu nome:')
let nome = ler()

console.log('Informe o seu sexo:')
let sexo = ler()

console.log('Informe a sua idade:')
let idade = Number(ler())

console.log('Informe o seu peso:')
let peso = Number(ler())

let resposta = ''

//Verifica se(if) as condições são validas ou senão (else) mostra uma mensagem de erro
if(
    ((
        (sexo == "m" || sexo == "masculino") && peso >= 50
    ) 
    //Verifica se de acordo com o sexo os parametros de peso estão ok
    || 
    
    (
        (sexo == "f" || sexo == "feminino") && peso >= 53
    ))
    &&
    idade >= 16 && idade <= 24
)  
{
 resposta = `Senhor(a) ${nome} está apto a doar sangue`
 
}
else{
  resposta = 'Não pode doar sangue'
}

console.log(resposta)