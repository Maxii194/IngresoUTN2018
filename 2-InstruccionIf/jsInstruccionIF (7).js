function Mostrar()
{
//tomo la edad  
    if((document.getElementById("edad").value) < 18 && (document.getElementById("estadoCivil").value) != "Soltero"){
    
        alert("Es muy pequeño para No ser soltero.");
    }

}//FIN DE LA FUNCIÓN