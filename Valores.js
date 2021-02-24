var Convertido

var getData = function (){
    var Entrada = document.getElementById("Entrada").value;
    Convertido = parseFloat(Entrada)
    var Comprobante = Convertido+1
    console.log(Entrada+" "+Convertido+" "+Comprobante);
}

var validador;
var operacion;
var operacion2;
var resultado;

var Formula = function () {

    operacion = document.getElementById("operaciones").value;
    console.log(operacion);

}

var Formula2 = function () {

    operacion2 = document.getElementById("operaciones2").value;
    console.log(operacion2);

}

var BrallanesunrealG = function () {

    brallan = document.getElementById("identidad").value;

    if (brallan == 1){
        document.getElementById("operaciones2").disabled=true;
        document.getElementById("operaciones").disabled=false;
        validador = 1;

    }

    else if (brallan == 2){
        document.getElementById("operaciones").disabled=true;
        document.getElementById("operaciones2").disabled=false;
        validador = 2;
    }

}

var Resultadoo = function() {

    prueba = validador

    if (prueba == 1){
        OperarPotencia();
    }

    else if (prueba == 2){
        OperarVoltaje();
    }
}

/* 
Operaciones de potencia 
*/

var OperarPotencia = function () {


    if (operacion == 1) {
        var dividido = Convertido/10
        resultado=(Math.pow(10,dividido))
        console.log(Math.pow(10,dividido))
    }

    else if (operacion == 2) {
        var dividido = Math.log10(Convertido)
        resultado=(10*dividido)
        console.log(10*dividido)
    }

    else if (operacion == 3) {
        var dividido = Convertido/10
        resultado=(Math.pow(10,dividido)*0.001)
        console.log(Math.pow(10,dividido)*0.001)
    }

    else if (operacion == 4) {
        var dividido = Math.log10(Convertido/0.001)
        resultado=(10*(dividido))
        console.log(10*(dividido))
    }

    else if (operacion == 5) {
        var dividido = ((Convertido+30)/10)
        resultado=(Math.pow(10,dividido)*0.001)
        console.log(Math.pow(10,dividido)*0.001)
    }

    else if (operacion == 6) {
        var dividido = Math.log10(Convertido/1)
        resultado=(10*(dividido))
        console.log(10*(dividido))
    }

    var respuesta;
    respuesta = resultado
    document.getElementById("resultado").value= respuesta;
}

var Imagenes = function () {

    if(operacion == 1) {
        
        var foto=document.getElementById("foto");
        foto.src = "foto1.png";
    }

    else if(operacion == 2) {
        
        var foto=document.getElementById("foto");
        foto.src = "foto2.png";
    }

    else if(operacion == 3) {
        
        var foto=document.getElementById("foto");
        foto.src = "foto3.png";
    }

    else if(operacion == 4) {
        
        var foto=document.getElementById("foto");
        foto.src = "foto4.png";
    }

    else if(operacion == 5) {
        
        var foto=document.getElementById("foto");
        foto.src = "foto5.png";
    }

    else if (operacion == 6) {

        var foto=document.getElementById("foto");
        foto.src = "foto6.png";
    }
}


/* 
Operaciones de Voltaje 
*/

var OperarVoltaje = function () {

    if (operacion2 == 1) {
        var dividido = Convertido/20
        resultado=(Math.pow(10,dividido))
        console.log(Math.pow(10,dividido))
    }

    else if (operacion2 == 2) {
        var dividido = Math.log10(Convertido)
        resultado=(20*dividido)
        console.log(20*dividido)
    }

    else if (operacion2 == 3) {
        var dividido = Convertido/20
        resultado=(Math.pow(10,dividido)*0.001)
        console.log(Math.pow(10,dividido)*0.001)
    }

    else if (operacion2 == 4) {
        var dividido = Math.log10(Convertido/0.001)
        resultado=(20*(dividido))
        console.log(20*(dividido))
    }

    else if (operacion2 == 5) {
        var dividido = ((Convertido)/20)
        resultado=(Math.pow(10,dividido)*0.000001)
        console.log(Math.pow(10,dividido)*0.000001)
    }

    else if (operacion2 == 6) {
        var dividido = Math.log10(Convertido/0.000001)
        resultado=(20*(dividido))
        console.log(20*(dividido))
    }

    var respuesta;
    respuesta = resultado
    document.getElementById("resultado").value= respuesta;
}


var Imagenes2 = function () {

    if(operacion2 == 1) {
        
        var foto=document.getElementById("foto");
        foto.src = "foto7.png";
    }

    else if(operacion2 == 2) {
        
        var foto=document.getElementById("foto");
        foto.src = "foto8.png";
    }

    else if(operacion2 == 3) {
        
        var foto=document.getElementById("foto");
        foto.src = "foto9.png";
    }

    else if(operacion2 == 4) {
        
        var foto=document.getElementById("foto");
        foto.src = "foto10.png";
    }

    else if(operacion2 == 5) {
        
        var foto=document.getElementById("foto");
        foto.src = "foto11.png";
    }

    else if (operacion2 == 6) {

        var foto=document.getElementById("foto");
        foto.src = "foto12.png";
    }
}
