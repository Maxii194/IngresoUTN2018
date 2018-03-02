//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
    var mes = prompt("Ingrese un mes: ");

	switch(mes){
        case 'Enero':
        case 'Febrero':
            alert("Veranito!!!!");
            break;
        default:
            alert("Extraño Enero y Febrero");
    }
}

