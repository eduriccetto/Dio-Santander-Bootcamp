function calcular() {
    //=============captando valores de a e b =============
    var a = document.getElementById("valor1").value;
    var b = document.getElementById("valor2").value;
    //================= convertendo para valores inteiros ==========
    var aConvert = parseInt(a);
    var bConvert = parseInt(b);

    // =============== soma dos valores ===========================

    var x = aConvert + bConvert;

    //===================== comparação com 10 ======================
    if (x > 10) {
        var maior10 = "A soma dos valores é maior que 10 e ";
    } else {
        var maior10 = "A soma dos valores é menor que 10 e ";
    }
    //===================== comparação com 20 ======================
    if (x > 20) {
        var maior20 = "a soma dos valores é maior que 20";
    } else {
        var maior20 = "a soma dos valores é menor que 20";
    }
    //========================= comparação de igualdade =============
    if (aConvert == bConvert) {
        var igualdade = "Valor 1 é igual ao Valor 2";
    } else {
        var igualdade = "Valor 1 é diferente do Valor 2";
    }
    
    //================= exibindo a soma  dos valores =================
    document.getElementById("text").innerHTML = ("A soma do (Valor 1) + (Valor 2) é igual a " + x );

    //================= exibindo igualdade dos valores ===============
    document.getElementById("text2").innerHTML = (igualdade);

    //=============== exibindo comparação da soma com  10 e 20 ========
    document.getElementById("text3").innerHTML = (maior10 + maior20);


}