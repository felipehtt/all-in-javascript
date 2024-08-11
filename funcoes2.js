import prompt from "prompt-sync";
let ler = prompt();

export function escrever(mensagem) {
    console.log(mensagem);
};

export function salarioLiquido(salario, bonus, desconto) {
    let a = salario * bonus / 100;
    let b = salario + a;
    let resultado = b - desconto;
    return resultado;
}

export function imc(altura, peso) {
    let imc = peso / (altura * altura);
    return imc;
}

export function impar(numero) {
    let n = numero % 2;
    return n;
}

export function orcamento(renda, gastos) {
    let a = '';

    if (gastos > renda ) {
        a = '\nVocê está fora do orçamento, não gaste mais.'
    } else if (gastos <= renda) {
        a = '\nVocê está dentro do orçamento.'
    };

    return a;
}

export function febre(t) {
    let r = '';

    if (t >= 41) {
        r = '\nA situação para sua temperatura é Hipertemia'
    }
    else if (t >= 39.6 && t < 41) {
        r = '\nA situação para sua temperatura é Febre Alta'
    }
    else if (t >= 37.6 && t < 39.6) {
        r = '\nA situação para sua temperatura é Febre'
    }
    else if (t >= 36 && t < 37.6) {
        r = '\nA situação para sua temperatura é Normal'
    }
    else if (t < 36) {
        r = '\nA situação para sua temperatura é Hipotermia'
    };

    return r;
}

export function gramasSorvete(gramas) {
    let i = 3.50;
    let resultado = (i * gramas ) / 100;
    
    let o = 3.00;
    let resultado2 = (o * gramas) / 100;
    
    let e = 1.75;
    let resultado3 = (e * gramas) / 100;

    let r = ``;

    if (gramas >= 1000) {
        r = `\nO total a pagar é R$${resultado2}`
    }
    else if (gramas > 0 && gramas <= 999){
        r = `\nO total a pagar é R$${resultado}`
    }
    else if(gramas > 0 && gramas <= 100){
        r = `\nO total a pagar é R$${resultado3}`
    }
    else if(gramas <= 0) {
        r = '\nPeso invalido.'
    };
    return r;
}

export function inverterArray(array) {

    let a = []
    let reversed = []
    let counter = 4

    console.log(`\nInsira 5 valores para o inverter`);

    for (let i = 0; i < 5; i++) {
        let valor = ler()
        a[counter] = valor
        reversed[i] = a[counter] 
        counter--
    }

    console.log(a)
}

export function tabuada(n) {
    console.log('\nQual numero da tabuada?')
    let numTab = Number(ler())
    
    let numero = 0

    while (numero <= 10 && numero >=0) {
        let resultado = numTab * numero
        console.log(`${numTab} X ${numero} = ${resultado}`)
        numero ++
    }
    console.log(`Fim`)
}

export function random(numero) {
    let r  = parseInt(Math.random() * 1000)

    for (let i = 0; i < 9; i++) {
        console.log('\nVamos jogar um jogo, tente acertar o número aleatório, você tem 10 tentativas. O número é entre 0 e 1000:')
        let n = Number(ler())
    
        if (n < r) {
            console.log('\nO número é maior, tente novamente:')
        }
    
        else if (n > r) {
            console.log('\nO número é menor, tente novamente:')      
        }
    
        else if (n == r) {
        console.log('\nVocê acertou!!!!')
        }
    }
}

export function qtdArray() {
    let A = [];

    console.log('\nOlá, quantos numeros você quer armazenar:');
    let q = Number(ler());

    console.log('\nInforme os números:');
    for (let i = 0; i < q; i++) {

        let n = Number(ler());
        A[i] = n;

    };

    console.log(`\nO total de números inseridos é: ${A.length}`);
    console.log(`São eles: ` + A);
};

export function pares(n) {
    let cont = 0
    let v = []
    let par = []
    
    console.log('Informe 10 numeros para guardar no vetor')
    
    for (let i = 0; i < 10; i++) {
        let num = Number(ler())
    
        v[i] = num
    
        if (num % 2 == 0) {
            par[cont] = num
            cont++
        }
    }
    console.log('Os numeros pares adicionados são: ' + par)
    console.log(par)
}

export function maiorDez(n) {
    let v = []

    console.log('\nInforme 15 numeros para guardar no vetor')
    for (let i = 0; i < 15; i++) {
        v[i] = Number(ler())
    }
    
    console.log('Os numeros maiores q 10 são:')
    
    for (let itens of v) {
        if (itens >= 10) {
            console.log(itens)
        }
    }
}