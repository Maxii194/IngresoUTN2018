function Mostrar()
{

	var contador=0;
	var acumulador=0;
	var respuesta;
	var numero;

	do{

		numero = parseInt(prompt("Ingrese numero:"));
		acumulador = acumulador + numero;
		respuesta = prompt("Desea continuar? si/no:")
		contador++;
	}while(respuesta == 'si');

	promedio = acumulador / contador

document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN