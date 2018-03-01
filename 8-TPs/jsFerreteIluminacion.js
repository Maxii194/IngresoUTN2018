/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio () 
{

	var  cantLamparas, precioTotal, descuento, marca, impuesto, importeFinal;

	cantLamparas = parseInt(document.getElementById("Cantidad").value);
	marca = document.getElementById("Marca").value;

	if(cantLamparas >= 6){

		precioTotal = cantLamparas * 35;
		descuento = (50/100)*precioTotal;
		total = precioTotal - descuento;

		alert("Precio Total  de " + cantLamparas + " : " + Total );
	}
	
	else if(cantLamparas == 5 && marca == "ArgentinaLuz"){

		precioTotal = cantLamparas * 35;
		descuento = (40/100)*precioTotal;
		total = precioTotal - descuento;

		alert("Precio Total  de " + cantLamparas + " : " + Total );
	}

	else if(cantLamparas == 5 && marca != "ArgentinaLuz"){

		precioTotal = cantLamparas * 35;
		descuento = (40/100)*precioTotal;
		total = precioTotal - descuento;

		alert("Precio Total  de " + cantLamparas + " : " + Total );
	}

	else if(cantLamparas == 4 && marca == "ArgentinaLuz" ){

		precioTotal = cantLamparas * 35;
		descuento = (25/100)*precioTotal;
		total = precioTotal - descuento;

		alert("Precio Total  de " + cantLamparas + " : " + Total );
	}

	else if(cantLamparas == 4 && marca == "FelipeLamparas" ){

		precioTotal = cantLamparas * 35;
		descuento = (25/100)*precioTotal;
		total = precioTotal - descuento;

		alert("Precio Total  de " + cantLamparas + " : " + Total );
	}

	else if(cantLamparas == 4 && marca != "ArgentinaLuz" && marca !="FelipeLamparas" ){

		precioTotal = cantLamparas * 35;
		descuento = (20/100)*precioTotal;
		total = precioTotal - descuento;

		alert("Precio Total  de " + cantLamparas + " : " + Total );
	}

	else if(cantLamparas == 3 && marca == "ArgentinaLuz" ){

		precioTotal = cantLamparas * 35;
		descuento = (15/100)*precioTotal;
		total = precioTotal - descuento;

		alert("Precio Total  de " + cantLamparas + " : " + Total );
	}

	else if(cantLamparas == 3 && marca == "FelipeLamparas" ){

		precioTotal = cantLamparas * 35;
		descuento = (10/100)*precioTotal;
		total = precioTotal - descuento;

		alert("Precio Total  de " + cantLamparas + " : " + Total );
	}

	else if(cantLamparas == 43 && marca != "ArgentinaLuz" && marca !="FelipeLamparas" ){

		precioTotal = cantLamparas * 35;
		descuento = (5/100)*precioTotal;
		total = precioTotal - descuento;

		alert("Precio Total  de " + cantLamparas + " : " + Total );
	}
 	
	if(total > 120){
		
		impuesto = (10/100) * total;
		importeFinal = total + impuesto; 
	}

}
