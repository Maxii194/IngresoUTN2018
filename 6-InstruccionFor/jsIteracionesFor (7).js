function Mostrar()
{
    var numero = parseInt(prompt("Ingrese un numero: "));
    var cantDivisores = 0;

    for(var i=1; i <= numero; i++){

        if(numero % i == 0){

            alert("Numero divisor: "+i);
            cantDivisores++;
        }
           
    }

    alert("Cantidad de numeros Divisores encontrados: "+cantDivisores);





}//FIN DE LA FUNCIÓN