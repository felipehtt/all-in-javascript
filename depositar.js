import prompt from 'prompt-sync';
let ler = prompt();

let total = 0;
let qtd = 0;
let valor = 0;
let cont = 0;

console.log('Bem-Vindo ao Fre-Commerce');
console.log(`Aceitamos as seguintes notas:
R$ 5
R$ 10
R$ 20
R$ 50
R$ 100
R$ 200`);
console.log('Por Favor, Insira a quantidade de notas de cada valor.');

while ( true ) {
    valor = Number(ler());

    qtd += valor;

    if ( qtd <= 200 ) {
        if ( cont === 0 ) {
            total += ( valor * 5 );
                
        }
        if ( cont === 1 ) {
            total += ( valor * 10 );
            
        }
        if ( cont === 2 ) {
            total += ( valor * 20 );
            
        }
        if ( cont === 3 ) {
            total += ( valor * 50 );
            
        }
        if ( cont === 4 ) {
            total += ( valor * 100 );
            
        }
        if ( cont === 5 ) {
            total += ( valor * 200 );
            
        }
    }
    if ( qtd > 200 ) {
        console.log(`Não podemos guardar mais
        de 200 notas!
        [Continuar o programa]`);

        qtd = ( qtd - valor );
        console.log(`Quantidade Atual ${qtd}`);
        cont --;
    }
    if ( valor === -1 ) {
        console.log(`Obrigado por utilizar
        nosso sistema! Volte sempre.`);
        break
        
    }
    else if ( cont === 5 ) {
        console.log(`Quantidade de notas: ${qtd}
        Valor total: R$ ${total}`);
        break

    }
    cont ++;
}