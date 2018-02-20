function Mostrar()
{

	var contador=0;
	var positivo=0;
	var negativo=0;
	var respuesta;
	var suma=0;
	var multiplicacion=1;

	do{

		positivo = parseInt(prompt("Ingrese numero positivo:"));
		negativo = parseInt(prompt("Ingrese numero negativo:"));
		suma = suma + positivo;
		multiplicacion = multiplicacion * negativo;
		respuesta = prompt("Desea continuar? si/no:")
		contador++;
	}while(respuesta == "si");


document.getElementById('suma').value=suma;
document.getElementById('producto').value=multiplicacion;

}//FIN DE LA FUNCIÓN