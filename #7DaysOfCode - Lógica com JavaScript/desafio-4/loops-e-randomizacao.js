//let numeroAleatorio = 7;
let maximo = 10;
let minimo = 0;
let numeroAleatorio = Math.floor(Math.random() * (maximo - minimo + 1) + minimo);
console.log(numeroAleatorio);

let chute = prompt('Adivinhe o número de 0 à 10');
contagem = 3;

while (chute != numeroAleatorio) {
    alert(`Errado!`);
    chute = prompt('Adivinhe o número de 0 à 10');
    contagem--

    if (contagem === 1) {
        alert(`Acabaram as chances, o número pensado era ${numeroAleatorio}!`);
        break;
    }
} 

if (chute == numeroAleatorio) {
    alert(`Parabéns! Você acertou! O número era ${numeroAleatorio}!`);
}
