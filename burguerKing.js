import prompt from 'prompt-sync';
let ler = prompt();

let pedidos = [];
let total = 0;
let preco = 0;

for (let cont = 0; cont <= Infinity; cont++) {
    console.log(`\nEscolha uma das opções:
    1 - Adicionar pedido
    2 - Listar os itens
    3 - Cancelar item
    4 - Exibir total e mostrar os valores
    0 - Sair
    `);
    let escolha = Number(ler());
    
    if (escolha == 0) {
        break;
    };

    if (escolha == 1) {
        console.log('\nInforme o código do produto:\n');
        let codiguin = ler().toUpperCase();
        console.log('\nItem adicionado.\n');

        if (codiguin == 'BU') {
            preco = 16.00;
            total += preco;
            pedidos[cont] = `${cont +1}. X-Burguer - R$${preco.toFixed(2)}`;
        } if (codiguin == 'BA') {
            preco = 18.00;
            total += preco;
            pedidos[cont] = `${cont +1}. X-Bacon - R$${preco.toFixed(2)}`;
        } if (codiguin == 'SA') {
            preco = 22.00;
            total += preco;
            pedidos[cont] = `${cont +1}. X-Salada - R$${preco.toFixed(2)}`;
        } if (codiguin == 'TD') {
            preco = 26.00;
            total += preco;
            pedidos[cont] = `${cont +1}. X-Tudo - R$${preco.toFixed(2)}`;
        } if (codiguin == 'RF') {
            preco = 6.00;
            total += preco;
            pedidos[cont] = `${cont +1}. Refrigerante Lata - R$${preco.toFixed(2)}`;
        } if (codiguin == 'SU') {
            preco = 8.00;
            total += preco;
            pedidos[cont] = `${cont +1}. Suco - R$${preco.toFixed(2)}`;
        }
    }

    if (escolha == 2) {
        console.clear();

        for (let itens of pedidos) {
            console.log(itens);
        }
        cont--;
    };

    if (escolha == 3) {
        console.log('\nInforme o número do item:');
        let numItem = Number(ler());

        pedidos[numItem -1] = `${numItem}. Cancelado.`;
        total -= preco;

        console.log('\nItem cancelado.\n');
        cont--;
    };

    if (escolha == 4) {
        console.log(`\nInforme a quantidade de pessoas: \n`)
        let qtdPessoas = Number(ler())

        console.log(`\nTotal: R$ ${total.toFixed(2)}`);

        let total2 = total / qtdPessoas;
        console.log(`Total por pessoa: R$ ${total2.toFixed(2)}\n`);
    };
};