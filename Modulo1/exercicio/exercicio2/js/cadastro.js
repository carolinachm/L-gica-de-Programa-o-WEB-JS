"user strict";

class Cadastro {

    validar() {
        //ler os inputes
        let nome = document.getElementById("nome").value;
        let email = document.getElementById("email").value;
        let sexo = document.querySelector("[name=sexo]:checked");
        let curso = document.querySelector("[name=curso]:checked");
        let estado = document.getElementById("estado").value;
        let foto = document.getElementById("foto").files[0];

        //validar os campos
        if (nome == "") {
            window.alert("O campo nome é obrigatorio");
        } if (email == "") {
            window.alert("O campo e-mail é obrigatorio");
        } if (sexo == null) {
            window.alert("selecione um sexo");
        } if (curso == null) {
            window.alert("selecione um curso");
        } if (estado == ""){
            window.alert("selecione um estado");
        } if (foto==undefined) {
            window.alert("selecione um foto");
        }else if(foto.size>1048576){
            window.alert("A foto deve ter no maximo 1MB");
        }else if (foto.type!="image/jpeg"  &&  foto.type!="image/png"){
            window.alert("Foto formato inválido");
        }
    
    }
}
var cadastro = new Cadastro();