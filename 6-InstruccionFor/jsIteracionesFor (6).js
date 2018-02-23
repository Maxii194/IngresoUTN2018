function Mostrar()
{
    var numero = parseInt(prompt("Ingrese un numero: "));
    var cantPares = 0;

    for(var i=1; i <= numero; i++){

        if(i % 2 == 0){

            alert("Numero Par: "+i);
            cantPares++;
        }
           
    }

    alert("Cantidad de numeros Pares encontrados: "+cantPares);


}//FIN DE LA FUNCIÓN