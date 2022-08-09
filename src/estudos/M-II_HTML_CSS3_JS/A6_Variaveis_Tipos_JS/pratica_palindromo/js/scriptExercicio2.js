// troque todos os elementos pares e diferentes de zero de um array pelo numero 0
// se o array for vazio retorne -1

// input -> [1,3,4,6,80,33,23,90]
// output -> [1,3,0,0,0,33,23,0]

// input -> []
// output -> -1

let array1 = [1,3,4,6,80,33,23,90];
let array2 = [];
let result = [];

array = array1;  // teste 1
//array = array2;  // teste 2

if (array.length == 0) {
    result = -1;
    console.log(result);
} else {
    for (let i = 0; i < array.length; i++) {
       // console.log(array[i]);
       if (array[i] % 2 != 0) {
         result.push(array[i]);
       } else {
           result.push(0);
       }
    }
    console.log(result);
}