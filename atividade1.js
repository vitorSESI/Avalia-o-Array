let sabores = [];
let opcao = -5;

while (opcao !== 0) {
    opcao = Number(prompt(` 
    Escolha uma das opções abaixo para realizar/terminar
    seu pedido. OBS: O sorvete cabe 3 bolas (sabores)
    Digite os números abaixo para escolher:
    ======MENU======
    (1) - Adicionar sabor
    (2) - Remover sabor
    (3) - Visualizar sorvete
    (4) - Finalizar pedido
    (0) - Sair`));

    switch (opcao) {
        case 1:
            if (sabores.length >= 3) {
                alert(`Limite de sabores atingido: ${sabores.length}. Remova um sabor!`);
            } else {
                let sabor = prompt("Digite um sabor:");
                sabores.push(sabor);
                alert("Sabor adicionado!");
            }
            break;

        case 2:
            if (sabores.length === 0) {
                alert("Não há sabores para remover!");
            } else {
                    let saborIndex = Number(prompt(`Escolha o número do sabor que deseja remover:\n${sabores.map((sabor, index) => `${index + 1}: ${sabor}`).join('\n')}`));
                    
                if (saborIndex >= 1 && saborIndex <= sabores.length) {
                    let saborRemovido = sabores.splice(saborIndex - 1, 1);
                    alert(`Sabor ${saborRemovido} removido com sucesso!`);
                } else {
                        alert("Opção inválida!");
                }
            }
                break;
            

        case 3:
            if (sabores.length === 0) {
                alert("Seu sorvete não possui sabores!");
            } else {
                let message = "Seu sorvete: ";
                for (let i = 0; i < sabores.length; i++) {
                    message += `Sabor ${i + 1}: ${sabores[i]} `;
                }
                alert(message);
            }
            break;

        case 4:
            if (sabores.length === 0) {
                alert("Adicione pelo menos um sabor!");
            } else {
                alert("Pedido realizado!");
                opcao = 0; 
            }
            break;

        case 0:
            alert("Saindo do menu...");
            break;

        default:
            alert("Opção inválida!");
            break;
    }
}
