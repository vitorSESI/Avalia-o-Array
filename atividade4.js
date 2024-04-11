/*(4) Peça ao usuário para digitar os nomes de 5 alunos e suas notas na prova de
Matemática. Calcular a média de todas as notas acima de 5,0.*/

let alunos = [];
let notas = [];
let acima5 = 0;

for (let i = 0; i < 5; i++) {
    alunos.push(prompt("Digite o nome do aluno:"));
    notas.push(Number(prompt("Digite a nota do aluno:")));

    if (notas[i] > 5) {
        acima5++;
    }
}

let somaNotasAcima5 = 0;
for (let i = 0; i < 5; i++) {
    if (notas[i] > 5) {
        somaNotasAcima5 += notas[i];
    }
}

let media = somaNotasAcima5 / acima5;
alert(`A média das notas acima de 5 é: ${media.toFixed(2)}`);






