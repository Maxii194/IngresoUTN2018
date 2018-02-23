function Mostrar()
{

	var contador=0;
	//declarar contadores y variables 
	var positivos,negativos;
	var respuesta="s";
	var numero;
	var sumaPositivos = 0;
	var cantPositivos = 0;
	var sumaNegativos = 0;
	var cantNegativos = 0;
	var cantCeros = 0;
	var cantNumerosPares = 0;
	var diferenciaPositivos_Negativos = 0;
	var promedioPositivos = 0;
	var promedioNegativos = 0;

	do{

		numero = parseInt(prompt("Ingrese un numero:"));
		
		if(numero > 0){

			positivos = numero;
			sumaPositivos = sumaPositivos + positivos;
			cantPositivos++;
		}
		else if(numero < 0){

			negativos = numero;
			sumaNegativos = sumaNegativos + negativos;
			cantNegativos++;
		}
		else{

			cantCeros++;
		}

		if(numero % 2 == 0){

				cantNumerosPares++;
			}

		respuesta = prompt("Desea continuar? s/n: ");

	}while(respuesta!="n");

//Diferecia entre Positivos y Negativos
	 diferenciaPositivos_Negativos = sumaPositivos-sumaNegativos;

//Calculo de Promedios
	if(promedioPositivos != 0){

		promedioPositivos = sumaPositivos / cantPositivos;
	}
	else if(promedioNegativos != 0){

		promedioNegativos = sumaNegativos / cantNegativos;
	}


	document.write("1- Suma de numeros Negativos: "+ sumaNegativos + "<br>");
	document.write("2- Suma de numeros Positivos: "+ sumaPositivos + "<br>");
	document.write("3- Cantidad de numeros Positivos: "+ cantPositivos + "<br>");
	document.write("4- Cantidad de numeros Negativos: "+ cantNegativos + "<br>");
	document.write("5- Cantidad de Ceros: "+ cantCeros + "<br>");
	document.write("6- Cantidad de numeros Pares: "+ cantNumerosPares + "<br>");
	document.write("7- Promedio de numeros Positivos: "+ promedioPositivos + "<br>");
	document.write("8- Promedio de numeros Negativos: "+ promedioNegativos + "<br>");
	document.write("9- Diferecia entre numeros Positivos y Negativos: "+ diferenciaPositivos_Negativos + "<br>");



}//FIN DE LA FUNCIÓN