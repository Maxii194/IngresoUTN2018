function Mostrar()
{

	var contador=0;
	var acumulador=0;
	var suma;
	var promedio = 0;

	while(contador < 5){

		suma = parseInt(prompt("Ingrese numero:"));
		acumulador = acumulador + suma;
		contador++;
	}

	promedio = acumulador / contador;

document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=promedio;

}//FIN DE LA FUNCIÓN