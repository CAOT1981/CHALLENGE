
function encriptar (){

    document.getElementById('botonCopiar').style.display = 'show';
    
    var texto = document.querySelector(".text-area").value;
    var textoCifrado = texto.replace(/e/gi, "enter").replace(/i/gi, "imes").replace(/a/gi, "ai").replace(/o/gi, "ober").replace(/u/gi, "ufat");
    document.querySelector(".mensaje").value = textoCifrado;
    document.querySelector(".text-area").value;

    ocultarMostrar()
}

var botonEncriptar = document.querySelector("#boton-encriptar");
botonEncriptar.onclick = encriptar;

function ocultarMostrar(){
    document.getElementById('botonCopiar').style.display = 'block'
    document.getElementById('ningunMensaje').style.display = 'none';
    document.getElementById('debajoInteriorMensaje').style.display = 'none';
    document.getElementById('muneco').style.display = 'none';
}

function desencriptar (){
    var texto = document.querySelector(".text-area").value;
    var textoCifrado = texto.replace(/enter/gi, "e").replace(/imes/gi, "i").replace(/ai/gi, "a").replace(/ober/gi, "o").replace(/ufat/gi, "u");
    document.querySelector(".mensaje").value = textoCifrado;
    document.querySelector(".mensaje").value;
}

var botonDesencriptar = document.querySelector("#boton-desencriptar");
botonDesencriptar.onclick = desencriptar;

function copiar () {
    let copyText = document.querySelector(".mensaje");
    copyText.select();
    document.execCommand("copy");
}

var botonCopiar = document.querySelector("#botonCopiar");
botonCopiar.onclick = copiar;





