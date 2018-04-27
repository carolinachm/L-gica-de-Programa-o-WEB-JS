"user strict";

class Media{
    calcular(){
        //ler variaveis
        var n1 = parseFloat(document.getElementById("n1").value);
        var n2 =parseFloat(document.getElementById("n2").value);

        //calcular media
        var media =parseFloat((n1 + n2)/2);

       alert(media);
       
    }
}
//instancia do objeto
var media = new Media();