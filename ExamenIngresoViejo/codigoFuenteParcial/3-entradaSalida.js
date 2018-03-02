//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
    var ancho = document.getElementById("ancho").value;
    var largo = document.getElementById("largo").value;
    var perimetro = 2*largo + 2*ancho;
    var alambrado = perimetro * 6;

    alert("Se necesitaran "+ alambrado +" metros de alambrado");

}

