let area = prompt('Você deseja seguir para a área de Front-End ou Back-End? Responda "F" ou "B".');
if (area == 'F') { //Front-End
    area = 'front-end'
    let biblioteca = prompt('Você deseja aprender react ou vue?');
    alert(`Bacana! Você vai gostar de aprender ${biblioteca}`);
} if (area == 'B') { //Back-End
    area = 'back-end'
    let biblioteca = prompt('Você dejeja aprender c# ou java? ');
    alert(`Bacana! Você vai gostar de aprender ${biblioteca}`);
} 

let especializacao = prompt(`Você deseja seguir se especializando em ${area}, ou deseja seguir se desenvolvendo para se tornar Fullstack? Responda "1" para ${area} ou "2" para Fullstack.`)
if (especializacao == 1) { //Front-end ou Back-end
    alert(`Legal! Boa sorte nos seus estudos para se tornar um(a) programador(a) ${area}!`)
} if (especializacao == 2) { //Fullstack
    alert('Legal! Boa sorte nos seus estudos para se tornar um(a) programador(a) Fullstack!')
}

let outrasTec = prompt('Tem mais alguma tecnologia que você gostaria de aprender? Responda "S" para "sim" e "N" para "não".');
while (outrasTec == 'S') {
    let tecnologia = prompt('Qual tecnologias você quer aprender?')
    alert(`${tecnologia} é realmente muito interessante!`)
    outrasTec = prompt('Tem mais alguma tecnologia que você gostaria de aprender? Responda "S" para "sim" e "N" para "não".')
}
