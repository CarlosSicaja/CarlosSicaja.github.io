$(document).ready(function(){
    $("#resp1").click(function(){
        swal("Respuesta ejercicio 1: ", ejercicio1());
    });
    $("#resp2").click(function(){
        swal("Respuesta ejercicio 2: ", ejercicio2());
    });
    $("#resp3").click(function(){
        swal({
            title: "Respuesta ejercicio 3",
            text: ejercicio3(),
            icon: "ejercicio3.png",
          });
    });
    $("#resp4").click(function(){
        swal("Respuesta ejercicio 4: ", ejercicio4());
    });
    $("#resp5").click(function(){
        swal("DUDAS ", ejercicio5());
    });
});

var conjuntoA = ["1","2","3","300"];
var conjuntoB = ["4","5","6","7","100","300"];

function Union() {
    var x = conjuntoA;

    for (i = 0; i < conjuntoB.length; i++) {
        if(x.includes(conjuntoB[i])){
            alert("Existe");
        }else{
            x.push(conjuntoB[i]);
        }
    }
    console.log(x);
}

function ejercicio1() {
    var a = 2;
    var b = -1;
    var c = -2;

    var x1 = (-(b)+Math.sqrt((Math.pow(b,2)-(4*a*c)))) / (2*a);
    var x2 = (-(b)-Math.sqrt((Math.pow(b,2)-(4*a*c)))) / (2*a);

    return "Respuesta x1: " +x1+" \nRespuesta x2: "+x2 + "\nEntonces  \nx = {"+x1+", "+x2+"}"+"\n y={1, 2, 3, 4, 5, ...... ∞} \n X∁Y";
}

function ejercicio2() {
    var netflix = 151;
    var serie1 = 68;
    var serie2 = 61;
    var serie3 = 52;
    var inter1 = 16; //serie1 n serie2
    var inter2 = 25; //serie1 n serie3
    var inter3 = 19; //serie2 n serie3
    var ninguno = 26;

    //Encontrar quienes miran solo la serie1 
    var ConjuntoSerie1 = serie1 - (inter1 + inter2);

    //Encontrar quienes miran solo la serie2
    var ConjuntoSerie2 = serie2 - (inter1 + inter3);

    //Encontrar quienes miran solo la serie3
    var ConjuntoSerie3 = serie3 - (inter2 + inter3);

    //Sumar todos los valores encontrados
    var respuesta = ConjuntoSerie1 + ConjuntoSerie2 + ConjuntoSerie3 + inter1 + inter2 + inter3 + ninguno;

    //Restar el total del personas que ven netflix
    respuesta = netflix - respuesta;
    return "Personas que ven las 3 series: "+respuesta;

}


function ejercicio3() {
    return "U = Conjunto de alumnos (U/3?) \nx/5 - y/8 = 0 \n y = 8x/5  \n x + 8x/5 = U  \n X = 5U/13  es menor a un tercio."
}

function ejercicio4() {
    var personas = 100;
    var casados = 85;
    var contel = 70;
    var conbici = 75
    var empresarios = 80;

    var casadostel = contel- (personas-casados); //Encontrar el total de casados con tel
    var casadostelbici = conbici - (personas-casadostel);  //Encontrar total casados con celular y bici
    var casadostelbiciempre = casadostelbici - (personas-empresarios); //Encontrar total casdos con celular, bici y empresarios.
    return "Casados: "+casados + "\nCasados con Celular: "+casadostel+" \nCasados con celular y bici: "+casadostelbici+" \nPersonas con todo: "+casadostelbiciempre;
}

function ejercicio5() {
    return "Dudas sobre este problema."
}

