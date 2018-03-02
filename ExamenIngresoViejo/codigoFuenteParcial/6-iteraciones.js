//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
    
    var importe, importeMayor, importeMenor;
    var flag = 0;

    for(var dia=1; dia <= 3; dia++){

        importe = parseInt(prompt("Ingrese el importe del dia: "));

        while(importe < 0){

            if(importe <= 0){

                importe = parseInt(prompt("Importe no permitido. Ingrese otra vez"));
            }
        }

        if(importeMayor < importe || flag == 0){

            importeMayor = importe;
        }
        if(importeMenor > importe || flag == 0){

            importeMenor = importe;
            flag=1
        }

    }

    alert("El importe mayor fue de : $ "+ importeMayor + " y el importe menor fue de : $ "+ importeMenor);
}


