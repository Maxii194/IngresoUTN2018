/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
    var producto1, producto2, producto3, sumaProductos;

    producto1 = parseInt(document.getElementById("PrecioUno").value);
    producto2 = parseInt(document.getElementById("PrecioDos").value);
    producto3 = parseInt(document.getElementById("PrecioTres").value);
    
    sumaProductos = producto1 + producto2 + producto3;
    alert(sumaProductos);

}
function Promedio () 
{
    var producto1, producto2, producto3, sumaProductos, promedio, iva;

    producto1 = parseInt(document.getElementById("PrecioUno").value);
    producto2 = parseInt(document.getElementById("PrecioDos").value);
    producto3 = parseInt(document.getElementById("PrecioTres").value);
    
    sumaProductos = producto1 + producto2 + producto3;
    promedio = sumaProductos/3;

    alert(promedio);
	
}
function PrecioFinal () 
{

    var producto1, producto2, producto3, sumaProductos;

    producto1 = parseInt(document.getElementById("PrecioUno").value);
    producto2 = parseInt(document.getElementById("PrecioDos").value);
    producto3 = parseInt(document.getElementById("PrecioTres").value);
    
    sumaProductos = producto1 + producto2 + producto3;
    iva = sumaProductos * .21;
    sumaProductos = sumaProductos + iva;
    alert(sumaProductos);
	
}