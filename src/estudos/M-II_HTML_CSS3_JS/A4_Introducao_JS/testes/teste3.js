//===================== console ==============================

console.log("Hello world!");

function returnEvenValues(array) {
    let evenNums = [];
    for(let i = 0; i < array.length; i++){
        if(array[i] % 2 == 0){
            evenNums.push(array[i]);
        }
    }
    console.log(evenNums);
}

let array = [1,2,4,5,7,8];

console.log('Na lista: ', array);
console.log('Os números pares são: ');
returnEvenValues(array)