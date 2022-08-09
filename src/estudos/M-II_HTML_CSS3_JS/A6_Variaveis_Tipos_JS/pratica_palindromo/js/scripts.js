
function calcular() {
    //============= captando e invertendo valores ==========================
    var a = document.getElementById("valor1").value;
    var b = a.toString();
    var novaString = "";    
    for (var i = b.length - 1; i >= 0; i--){
        novaString += b[i];
    }

    //============== verificando condicional ==============================

    if (b == novaString) {
        document.getElementById("text").innerHTML = b + " É um palíndromo";
    } else {
        document.getElementById("text").innerHTML = b + " Não é um palíndromo";
    }    

}
