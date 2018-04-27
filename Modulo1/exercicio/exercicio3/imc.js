"use strict";

class IMC{
    calcular(){

        //ler as variaveis
        var nome = document.getElementById("nome").value;
        var peso = parseFloat(document.getElementById("peso").value);
        var altura = parseFloat(document.getElementById("altura").value)/100;
        //calcular o peso
        var resultado = peso/(altura * altura);
        //verificação
        if(resultado < 18){
            document.write("abaixo do peso " + resultado.toFixed(2));
        }if(resultado > 18 && resultado < 25){
            document.write("peso ideal " + resultado.toFixed(2));
        }if(resultado > 25 && resultado < 30){
            document.write("sobre peso " + resultado.toFixed(2));
        }if(resultado > 30 && resultado < 35){
            document.write("obesidade 1 " + resultado.toFixed(2));
        }if(resultado > 35 && resultado < 40){
            document.write("obesidade 2 " + resultado.toFixed(2));
        }if(resultado > 40){
            document.write("obesidade 3 " + resultado.toFixed(2));
    }
   
}
}
var imc = new IMC();