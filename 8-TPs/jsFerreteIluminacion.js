/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el
    descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si 
    es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se 
    hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del 
    impuesto con el siguiente mensaje:
 			”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio () 
{

	var  cantLamparas, precioTotal, descuento, marca, impuesto, importeFinal, total;
	const precioLampara = 35; 

	cantLamparas = parseInt(document.getElementById("Cantidad").value);
	marca = document.getElementById("Marca").value;


	if(cantLamparas >= 6){

		precioTotal = cantLamparas * precioLampara;
		descuento = (50/100)*precioTotal;
		total = precioTotal - descuento;

		alert("Precio Total  de " + cantLamparas + " lamparas es : " + total );
	}
	
	switch(cantLamparas){

		case 5:
			if(marca == "ArgentinaLuz"){

				precioTotal = cantLamparas * precioLampara;
				descuento = (40/100)*precioTotal;
				total = precioTotal - descuento;

				alert("Precio Total  de " + cantLamparas + " lamparas es : " + total );
			}
			else{

				precioTotal = cantLamparas * precioLampara;
				descuento = (30/100)*precioTotal;
				total = precioTotal - descuento;

				alert("Precio Total  de " + cantLamparas + " lamparas es : " + total );
			}

		case 4:
			if(marca == "ArgentinaLuz" || marca == "FelipeLamparas"){

				precioTotal = cantLamparas * precioLampara;
				descuento = (25/100)*precioTotal;
				total = precioTotal - descuento;

				alert("Precio Total  de " + cantLamparas + " lamparas es : " + total );
			}
			else{

				precioTotal = cantLamparas * precioLampara;
				descuento = (20/100)*precioTotal;
				total = precioTotal - descuento;

				alert("Precio Total  de " + cantLamparas + " lamparas es : " + total );
			}
		case 3:
			if(marca == "ArgentinaLuz"){

				precioTotal = cantLamparas * precioLampara;
				descuento = (15/100)*precioTotal;
				total = precioTotal - descuento;

				alert("Precio Total  de " + cantLamparas + " lamparas es : " + total );
			}
			else if(marca == "FelipeLamparas"){

				precioTotal = cantLamparas * precioLampara;
				descuento = (10/100)*precioTotal;
				total = precioTotal - descuento;

				alert("Precio Total  de " + cantLamparas + " lamparas es : " + total );
			}
			else{
				precioTotal = cantLamparas * precioLampara;
				descuento = (5/100)*precioTotal;
				total = precioTotal - descuento;

				alert("Precio Total  de " + cantLamparas + " lamparas es : " + total );
			}


	}

	document.getElementById("precioDescuento").value = total;

	if(total > 120){

		IIBB = .10*total;
		importeFinal = total + IIBB;

		alert("Usted pago $ " +  importeFinal + " de IIBB, siendo $ " + IIBB + " el impuesto que se pagó.")
	}

}
