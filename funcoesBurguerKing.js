import prompt from 'prompt-sync';
let ler = prompt();

export function acai(qtdPeq, qtdMed, qtdGra, desc) {
    let pequeno = 13.50;
    let medio = 15.00;
    let grande = 17.50;

    let soma = (qtdPeq * pequeno) + (qtdMed * medio) + (qtdGra * grande);

    if (desc == 0) {
        return soma;
    } else if (desc == 100) {
        let cem = soma - soma;
        return cem;
    } else {
        let total = soma * desc / 100;
        return total;
    };
};

export function ingresso(inteiras, meias, diaSemana, nacional) {
    let inteira = 30.00;
    let meia = 15.00;

    if (nacional == 'sim') {
        inteira = 5.00;
        meia = 5.00;
    } else if (diaSemana == 'quarta') {
        inteira = 15.00;
        meia = 7.5;
    };

    let soma = (inteiras * inteira) + (meias * meia);

    return soma;
};