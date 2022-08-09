const meuArray = [30,30,40,5,223,2049,3034,5];

function valoresUnicos(arr){
    const mySet = new Set(arr);

    return mySet;
}
console.log(valoresUnicos(meuArray));
//=================================
const meuArray2 = [30,30,40,5,223,2049,3034,5];

function valoresUnicos2(arr){
    const mySet = new Set(arr);

    return [...mySet];
}

console.log(valoresUnicos2(meuArray2));