/* Regras Codificador: 
"e" é convertido para "enter" 
"i" é convertido para "imes"
"a" é convertido para "ai"
"o" é convertido para "ober"
"u" é convertido para "ufat"
Apenas letras minúsculas
Não permite acentuação   
*/
var input1 = document.querySelector("#input-texto");
input1.focus()
var output1 = document.querySelector("#msg");
var botao1 = document.querySelector("#btn-cripto");
var botao2 = document.querySelector("#btn-descripto");
var botao3 = document.querySelector("#btn-copy");

function encriptar() {
    var text = input1.value;
    msg = "";

    for(var i=0;i<text.length;i++){
        if(text[i] == "e"){
            msg = msg + "enter";
        } else if(text[i] == "i"){
            msg = msg + "imes";
        } else if(text[i] == "a"){
            msg = msg + "ai";
        } else if(text[i] == "o"){
            msg = msg + "ober";
        } else if(text[i] == "u"){
            msg = msg + "ufat";
        } else {
            msg = msg + text[i];
        }
    }
    output1.value = msg;
}

botao1.onclick = encriptar;

/* Regras Decodificador: 
"enter" é convertido para "e" 
"imes" é convertido para "i"
"ai" é convertido para "a"
"ober" é convertido para "o"
"ufat" é convertido para "u"
Apenas letras minúsculas
Não permite acentuação     
*/

function desencriptar(texto) {
    var text = input1.value;
    msg = text;
    msg = msg.replaceAll("enter","e");
    msg = msg.replaceAll("ai","a");
    msg = msg.replaceAll("imes","i");
    msg = msg.replaceAll("ober","o");
    msg = msg.replaceAll("ufat","u");

    var texto_inteiro = ""

    for(i=0;i<msg.length;i++) {
        texto_inteiro = texto_inteiro + msg[i];
        output1.value = texto_inteiro;
    }
}


    botao2.onclick = desencriptar;

function copiar() {
    var text = output1.value;
    input1.value = text; // Falta atualizar para copiar pra clipboard
  }

botao3.onclick = copiar;
