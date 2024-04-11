let numeros = [];

for (let i = 0; i < 3; i++) {
    numeros.push(prompt("Digite um número: "));
}

alert("Array original: " + numeros);

numeros.reverse();

alert("Array com a sequência invertida: " + numeros);
