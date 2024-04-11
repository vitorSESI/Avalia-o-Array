/*(5) Localizar o maior valor dentro de um array de números*/

let array = [1, 4, 34, 65, 2, 7, 67, 12]
let maior = 0

for(let i = 0; i < array.length; i++){
    if(array[i] > maior){
        maior = array[i]
        

    }
}
alert(`O número maior é ${maior}`)