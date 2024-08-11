import prompt from "prompt-sync";
let ler = prompt();

export function escrever(mensagem) {
    console.log(mensagem);
};

export function lerNumero(mensagem) {
    console.log(mensagem);
    let n = Number(ler());
};

export function lerString(mensagem) {
    console.log(mensagem);
    let n = ler(); 
};

export function parImpar(parImpar){
    console.log('Informe o número:');
    let n1 = Number(ler());

    if (n1 % 2 == 0) {
        console.log('É Par?');
        console.log(true);
        return true;

    } else {
        console.log('É Par?');
        console.log(false);
        return false;
    };
};

export function mediaArray() {
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

export function converterString() {
    console.log('\nQual seu nome?');
    let a = ler();

    let b = escrever('\nOlá, ' + a.toUpperCase());
};

export function primo(numero) {
    if (numero <= 1) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(numero); i++) {
        if (numero % 1 === 0) {
            return false;
        }
    }
    return true
}

export function inverterArray(array) {

    let a = []
    let reversed = []
    let counter = 4

        console.log(`Insira 5 valores para o inverter`);

    for (let i = 0; i < 5; i++) {
        let valor = ler()
        a[counter] = valor
        reversed[i] = a[counter] 
        counter--
    }

    console.log(a)
}

export function acrescentarPorcentagem(valor, porcentagem) {
    let fim = valor * (1 + porcentagem / 100);
    return fim;
}

export function calcularFatorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    }
    let resultado = 1;
    for (let i = 2; i <= n; i++) {
        resultado *= i;
    }
    return resultado;
}
