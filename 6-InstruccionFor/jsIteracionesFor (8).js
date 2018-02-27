function Mostrar()
{

    var numero = parseInt(prompt("Ingrese un numero: "));
    var primo = 0;

    for(var i=1; i <= numero; i++){

        if(numero % i == 0) {

            primo++;
        }
           
    }

    if(primo != 2){

        alert(numero + " No es numero primo");        
    }
    else{

        alert(numero + " Es numero primo");
    }



}//FIN DE LA FUNCIÓN