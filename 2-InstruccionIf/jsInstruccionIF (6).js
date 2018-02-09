function Mostrar()
{
//tomo la edad  
    if((document.getElementById("edad").value) >= 18){
    
        alert("La persona es adulto.");
    }
    else if((document.getElementById("edad").value) >= 13 && (document.getElementById("edad").value) <= 17){

        alert("La persona es adolescente.");
    }
    else if((document.getElementById("edad").value) < 13){
        
        alert("La persona es un niño.");
    }


}//FIN DE LA FUNCIÓN