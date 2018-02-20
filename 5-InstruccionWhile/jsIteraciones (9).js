function Mostrar()
{

	var flag=0;
	// declarar variables
	var numero;
	var maximo;
	var minimo;
	
	var respuesta;
	

	do{
		numero = parseInt(prompt("Ingrese numero:"));
		if(maximo > numero || flag == 0){
			maximo = numero;
		}
		if(minimo < numero || flag == 0){
			minimo = numero;
			flag++;
		}
		respuesta = prompt("Desea continuar? si/no:");
		
		
	}while(respuesta!='no');

	document.getElementById('maximo').value=maximo;
	document.getElementById('minimo').value=minimo;


}//FIN DE LA FUNCIÓN