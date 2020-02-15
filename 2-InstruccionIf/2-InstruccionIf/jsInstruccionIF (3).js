function mostrar()
{
//tomo la edad  

var edad;

	edad= document.getElementById('edad').value;
	edad=parseInt(edad);
    
    if (edad>17) 
	{
		alert ("es mayor");
	}
	else

	 {
	 	alert("es menor");
	 }	


	/* if (edad<18)  //EN VEZ DE PONER OTRO IF DICIENDO SI LA EDAD ES DE 17 PARA ABAJO, UTILIZO EL ELSE PARA DECIR "SI NO ES ESTO", "ES ESTO OTRO".
	{
		alert ("es menor");
	}*/
}//FIN DE LA FUNCIÓN