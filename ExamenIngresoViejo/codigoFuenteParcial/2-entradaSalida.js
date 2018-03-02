//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
    var importe = parseInt(prompt("Ingrese el importe: "));
    var importeFinal;

    importeFinal = importe + .21*importe;

    document.getElementById("importe").value = importeFinal;
}

