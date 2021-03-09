var Entrada;
var Convertido;
var Convertido_PP;
var Seleccion_AA;
var Conversion_AA;
var Conversion_PP;
var PotenciaEntrada = 0;
var Ganancia = 0;
var Perdida = 0;
var Potenciasalida = 0;

var amat = function (){
    var Entrada = document.getElementById("Entradatenuador").value;
    Convertido = parseFloat(Entrada);
}

var Pp = function (){
    var Entrada = document.getElementById("entradapotencia").value;
    Convertido_PP = parseFloat(Entrada);
}

var funcionapls =function(){
    
    var Valordeentrada = document.getElementById("AA").value;


    if (Valordeentrada == 1){
        var Valordeentrada = document.getElementById("vecesAA").value;

        if (Valordeentrada == 1){
            Conversion_AA = Convertido;
            Ganancia= Ganancia + Conversion_AA;
        }
        if (Valordeentrada == 2){
            var dividido = Math.log10(Convertido);
            resultado=(10*dividido);
            Conversion_AA = resultado;
            Ganancia= Ganancia + Conversion_AA;
        }
        document.getElementById("ganancia").value = Ganancia;
    }

    else if(Valordeentrada == 2) {
        var Valordeentrada = document.getElementById("vecesAA").value;

        
        if (Valordeentrada == 1){
            Conversion_AA = Convertido;
            Perdida= Perdida + Conversion_AA;
        }
        if (Valordeentrada == 2){
            var dividido = Math.log10(Convertido);
            resultado=(10*dividido);
            Conversion_AA = resultado;
            Perdida = Perdida + Conversion_AA;
        }
        document.getElementById("perdida").value = Perdida;
    }

}

var Potenciaroja = function() {

    var Valordeentrada = document.getElementById("vecesPP").value;

    if(Valordeentrada == 1){
        Conversion_PP = Convertido_PP;
        PotenciaEntrada = Conversion_PP;
    }

    else if(Valordeentrada == 2){
        var dividido = Math.log10(Convertido_PP/0.001)
        resultado=(10*(dividido))
        Conversion_PP = resultado;
        PotenciaEntrada = Conversion_PP;
    }

    document.getElementById("entradapotenciaesq").value = PotenciaEntrada;
}

var Sumatoriafinal = function (){

    Potenciasalida = (PotenciaEntrada+Ganancia)-Perdida

    document.getElementById("potenciafinal").value = Potenciasalida;
}