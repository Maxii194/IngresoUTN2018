/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
Mostar el resulto por medio de "ALERT"*/
function sumar()
{
    var num1, num2, suma;

    num1 = parseint(document.getElementById("numeroUno").value);
    num2 = parseint(document.getElementById("numeroDos").value);
    

    suma = num1 + num2;

    alert("El resultado es "+suma);
}

