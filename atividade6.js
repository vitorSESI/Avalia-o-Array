/*(6) Crie 2 Arrays, no primeiro você pedirá para o usuário digitar 10 números.
Faça um código para copiar para o segundo Array, apenas os números ímpares existentes
no primeiro Array.*/

let num1 = [];
let num2 = [];

for (let i = 0; i < 10; i++) {
    num1.push(Number(prompt('Digite um número para a 1° array: ')));
}

for (let i = 0; i < num1.length; i++) {
    if (num1[i] % 2 === 1) {
        num2.push(num1[i]);
    }
}

alert("Array 1: " + num1);
alert("Array 2: " + num2);
