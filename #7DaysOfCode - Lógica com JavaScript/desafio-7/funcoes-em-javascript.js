function soma(num1, num2) { //soma
    num1 = +num1
    num2 = +num2
    alert(`Resultado: ${num1 + num2}`);
    interacao();
}
function subtracao(num1, num2) { //subtração
    alert(`Resultado: ${num1 - num2}`);
    interacao();
}
function multiplicacao(num1, num2) { //multiplicação
    alert(`Resultado: ${num1 * num2}`);
    interacao();
}
function divisao(num1, num2) { //divisão
    alert(`Resultado: ${num1 / num2}`);
    interacao();
}
function sair() { //sair
    alert('Até a próxima!');
}
function interacao() {
    let operacao = prompt(
        `Insira o número referente à operação desejada: 
        1 - Soma
        2 - Subtração
        3 - Multiplicação
        4 - Divisão
        0 - Sair
    `)
    if (operacao == 0) {
        sair()
    } else {
        let num1 = prompt('Insira o primeiro número.');
        let num2 = prompt('Insira o segundo número.');
    
        if (operacao == 1) {
            soma(num1, num2);
        }
        if (operacao == 2) {
            subtracao(num1, num2);
        }
        if (operacao == 3) {
            multiplicacao(num1, num2);
        }
        if (operacao == 4) {
            divisao(num1, num2)
        }
    }
}

interacao();
