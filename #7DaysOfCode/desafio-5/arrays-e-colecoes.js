let frutas = [];
let laticínios = [];
let congelados = [];
let rancho = [];
let doces = [];

function adicionarItens() {
    let desejaAdicionar = prompt('Deseja adicionar algum item a sua lista de compras? Responda "s" para "sim" e "n" para "não"');

    while (desejaAdicionar == 's') {
        let item = prompt('Insira o nome do item. Se não desejar inserir mais itens, digite "sair".');
        
        if (item == 'sair' || desejaAdicionar =='n') { //imprime a lista
            alert(`
            Lista de Compras:
            Frutas: ${frutas}
            Laticínios: ${laticínios}
            Congelados: ${congelados}
            Rancho: ${rancho}
            Doces: ${doces}
            `);
            break;
        } else {
            let categoria = prompt(`Digite o número referente a categoria de ${item}
            1 - frutas
            2 - laticinios
            3 - congelados
            4 - rancho
            5 - doces`);
    
            if (categoria == 1) {
                frutas.push(item)
            } 
            if (categoria == 2) {
                laticínios.push(item)
            }
            if (categoria == 3) {
                congelados.push(item)
            }
            if (categoria == 4) {
                rancho.push(item)
            }
            if (categoria == 5) {
                doces.push(item)
            }
        }
    }
}

adicionarItens();