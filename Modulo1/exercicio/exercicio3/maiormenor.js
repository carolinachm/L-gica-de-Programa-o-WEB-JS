"user strict";

class Calculadora{

    calcular(){

        var num1 = parseFloat(document.getElementById("num1").value);
        var num2 = parseFloat(document.getElementById("num2").value);
        if(num1 > num2){
            num2 = num1;
        }if(num2 < num1){
            num1 = num2;
        }
       
        document.write(num2 + " é maior");
        document.write(num1 + " é menor");
    }
}
var calculadora = new Calculadora();