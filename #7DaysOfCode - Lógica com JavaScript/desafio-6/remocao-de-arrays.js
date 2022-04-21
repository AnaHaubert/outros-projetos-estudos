let frutas = [];
let laticínios = [];
let congelados = [];
let rancho = [];
let doces = [];

function manipularLista() {
    let desejaAdicionar = prompt('Deseja adicionar algum item a sua lista de compras? Responda "s" para "sim" e "n" para "não"');

    while (desejaAdicionar == 's') { //adicionar
        let item = prompt(`Insira o nome do item. 
        Se não desejar inserir mais itens, digite "sair". 
        Caso deseje remover algum item, digite "remover"`);
         
        if (item == 'remover') { //remover
            console.log(`
                Lista de Compras:
                Frutas: ${frutas}
                Laticínios: ${laticínios}
                Congelados: ${congelados}
                Rancho: ${rancho}
                Doces: ${doces}
            `);
            let itemRemovido = prompt('Digite o item que deve ser removido')
            if (frutas.includes(itemRemovido)) {
                let indiceItemRemovido = frutas.indexOf(itemRemovido);
                frutas.splice(indiceItemRemovido, 1);
                alert(`O item ${itemRemovido} foi removido.`)
                console.log(frutas);
            }
            if (laticínios.includes(itemRemovido)) {
                let indiceItemRemovido = laticínios.indexOf(itemRemovido);
                laticínios.splice(indiceItemRemovido, 1);
                alert(`O item ${itemRemovido} foi removido.`)
                console.log(laticínios);
            }
            if (congelados.includes(itemRemovido)) {
                let indiceItemRemovido = congelados.indexOf(itemRemovido);
                congelados.splice(indiceItemRemovido, 1);
                alert(`O item ${itemRemovido} foi removido.`)
                console.log(congelados);
            }
            if (rancho.includes(itemRemovido)) {
                let indiceItemRemovido = rancho.indexOf(itemRemovido);
                rancho.splice(indiceItemRemovido, 1);
                alert(`O item ${itemRemovido} foi removido.`)
                console.log(rancho);
            }
            if (doces.includes(itemRemovido)) {
                let indiceItemRemovido = doces.indexOf(itemRemovido);
                doces.splice(indiceItemRemovido, 1);
                alert(`O item ${itemRemovido} foi removido.`)
                console.log(doces);
            }
        }

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
        } else if (item != 'remover'){
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

manipularLista();

