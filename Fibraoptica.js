var Entrada
var Longitud
var Carrete
var Valor_de_x = 0;
var parimpar
var Resultado = 0;
var Onda
var Suma_total = 0;

var detector = function(){
    
    var ff = document.getElementById("longitudfb").value;

    var Flotante = parseFloat(ff)
    var Entero = parseInt(ff)
    var comprobante = Flotante - Entero

    if((comprobante)==0){
        console.log("El numero es entero")
        parimpar = 0;
    }
    else if(comprobante != 0 ){
        console.log("El numero no es entero")
        parimpar = 1;
    }
}

var Xvalor = function(){
    var Longitud = document.getElementById("longitudfb").value;
    var Carrete = document.getElementById("Carrete").value;
    var Onda = document.getElementById("Ondax").value;
    console.log(Onda)
    var Valor_de_x = (Longitud/Carrete);
    Valor_de_x = Valor_de_x.toFixed(2)
    console.log(Valor_de_x)

    /////////////////////////////////////////////////////////
    if(parimpar == 0){
        if(Onda == 1310){
            console.log(Valor_de_x)
            var prueba = (0.1)*(Valor_de_x-1);
        }
        else if (Onda == 1550){
            console.log(Valor_de_x)
            var prueba = (0.05)*Valor_de_x-1;
        }
    }

    else if(parimpar == 1){
        if(Onda == 1310){
            console.log(Valor_de_x)
            var prueba = (0.1)*(Valor_de_x);
        }
        else if (Onda == 1550){
            console.log(Valor_de_x)
            var prueba = (0.35)*Valor_de_x;
        }
    }

    console.log(prueba)
    prueba = prueba.toFixed(2)
    document.getElementById("Fusiones").value= prueba;

    ////////////////////////////////////////////////////////////

    if(Onda==1310){
        resultado = (0.6)*2
        document.getElementById("Conectores").value= resultado;
    }

    else if(Onda==1550){
        resultado = (0.35)*2
        document.getElementById("Conectores").value= resultado;
    }

    ///////////////////////////////////////////////////////////

    if(Onda==1310){
        resultado = (0.38)*Longitud
        document.getElementById("Perdida").value= resultado;
    }

    else if(Onda==1550){
        resultado = (0.22)*Longitud
        document.getElementById("Perdida").value= resultado;
    }

    ///////////////////////////////////////////////////////////

    intentemoslo();
}

var intentemoslo = function(){
    var l = document.getElementById('Fusiones').value
    console.log(l);
    l = parseFloat(l)
    var c = document.getElementById('Conectores').value
    console.log(c);
    c = parseFloat(c)
    var p = document.getElementById('Perdida').value
    console.log(p);
    p = parseFloat(p)

    var Salida = document.getElementById('Salidafb').value
    Salida = parseFloat(Salida)
    console.log(Salida)

    var suma = l+c+p+Salida;
    suma = suma.toFixed(2)
    console.log(suma);
    document.getElementById("Resultadoo").value=suma
}