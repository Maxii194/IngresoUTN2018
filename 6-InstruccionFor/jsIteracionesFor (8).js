function Mostrar()
{

    var numero = parseInt(prompt("Ingrese un numero: "));

    for(var i=1; i <= numero; i++){

        if(numero % i == 0){

            alert("Numero divisor: "+i);
            cantDivisores++;
        }
           
    }




}//FIN DE LA FUNCIÓN