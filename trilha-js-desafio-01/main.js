// # 1️⃣ Desafio Classificador de nível de Herói

// **O Que deve ser utilizado**

// - Variáveis
// - Operadores
// - Laços de repetição
// - Estruturas de decisões

// ## Objetivo

// Crie uma variável para armazenar o nome e a quantidade de experiência (XP) de um herói, depois utilize uma estrutura de decisão para apresentar alguma das mensagens abaixo:

// Se XP for menor do que 1.000 = Ferro
// Se XP for entre 1.001 e 2.000 = Bronze
// Se XP for entre 2.001 e 5.000 = Prata
// Se XP for entre 5.001 e 7.000 = Ouro
// Se XP for entre 7.001 e 8.000 = Platina
// Se XP for entre 8.001 e 9.000 = Ascendente
// Se XP for entre 9.001 e 10.000= Imortal
// Se XP for maior ou igual a 10.001 = Radiante

// ## Saída

// Ao final deve se exibir uma mensagem:
// "O Herói de nome **{nome}** está no nível de **{nivel}**"

let nickname = "Luanna";
let qtaXP = 5001;
let nivel = ''

if(qtaXP < 1000) {
    nivel = 'Ferro';
} else if (qtaXP >= 1001 && qtaXP < 2000) {
    nivel = 'Bronze';
} else if (qtaXP >= 2001 && qtaXP < 5000) {
    nivel = 'Prata';
} else if (qtaXP >= 5001 && qtaXP < 7000) {
    nivel = 'Ouro';
} else if (qtaXP >= 7001 && qtaXP < 8000) {
    nivel = 'Platina';
} else if (qtaXP >= 8001 && qtaXP < 9000) {
    nivel = 'Ascendente';
} else if (qtaXP >= 9001 && qtaXP < 10000) {
    nivel = 'Imortal';
} else {
    nivel = 'Radiante';
}

console.log(`O Herói de nome ${nickname} está no nível de ${nivel}`);
