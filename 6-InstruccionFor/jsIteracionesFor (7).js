function Mostrar()
{
    var numero = parseInt(prompt("Ingrese un numero: "));
    var cantDivisores = 0;

    for(var i=1; i <= numero; i++){

        if(numero % i == 0){

            console.log("Numero divisor: "+i);
            cantDivisores++;
        }
           
    }

    console.log("Cantidad de numeros Divisores encontrados: "+cantDivisores);





}//FIN DE LA FUNCIÓN