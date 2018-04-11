"user strict";

class Calcularoda {

    botao(valor) {
        document.calc.visor.value += valor;
    }

    somarValor() {
        //1) ler dados convertido em numeros dos inputs
        var s1 = parseFloat(document.getElementById("s1").value);
        var s2 = parseFloat(document.getElementById("s2").value);
        //realizar a soma
        var resultado = s1 + s2;
        document.getElementById('resultado').value = resultado;
    }
    subtrairValor() {
        var s1 = parseFloat(document.getElementById("s1").value);
        var s2 = parseFloat(document.getElementById("s2").value);
        var resultado = s1 - s2;
        document.getElementById('resultado').value = resultado;
    }
    multiplicarValor() {
        var s1 = parseFloat(document.getElementById("s1").value);
        var s2 = parseFloat(document.getElementById("s2").value);
        var resultado = s1 * s2;
        document.getElementById('resultado').value = resultado;
    }
    dividirValor() {
        var s1 = parseFloat(document.getElementById("s1").value);
        var s2 = parseFloat(document.getElementById("s2").value);
        var result, total;
        result = valor / 100;
        total = valor - (porcentagem * result);
        document.getElementById('resultado').value = total;
    }
    porcentagem() {
        //1) ler dados convertido em numeros dos inputs
        var s1 = parseFloat(document.getElementById("s1").value);
        var s2 = parseFloat(document.getElementById("s2").value);
        //realizar a soma
        var resultado = parseFloat(s1 * (s2 / 100));
        document.getElementById('resultado').value = resultado;
    }
    limpar() {
        //limpar os campos
        document.calc.visor.value = '';
    }
    calcular() {
        var resultado = 0;
        resultado = document.calc.visor.value;
        document.calc.visor.value = '';
        document.calc.visor.value = eval(resultado);
    }

}
//instancia objeto
var calculadora = new Calcularoda();

