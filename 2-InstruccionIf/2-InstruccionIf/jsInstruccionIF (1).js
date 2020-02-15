function mostrar()
{ 
	
	/*var edad;

	edad=document.getElementById('edad').value;
	edad=parseInt=(edad);


	if (edad==15) // si no pongo nada entre los parentesis me va a saltar en la consola error unexpected token
	              // el == es la antitesis del más
	{             
		alert ("niña bonita"); 
	}

	*/




	var edad; //CLASE DEL SABADO DIVAGEO, Y OTRAS COSAS PARA ENTENDER IF

	edad=document.getElementById('edad').value;
	edad=parseInt(edad);

	/*USO EL ELSE*/
	if (edad<18)
	{
		if (edad>12) 
		{
			alert("adolescente");
		}else
		{
			alert("NO es adolescente");
		}
	}else
	{
		alert("NO es adolescente");
	}
										// ESTOS DOS SON IGUALES PERO EN EL SEGUNDO NO TENGO QUE REPETIR UNA LINEA COMO EL PRIMERO, FUNCIONAN LOS DOS PERO EL PRIMERO ESTA MAL PROGRAMADO.
	/*CON &&, USO EL ELSE*/
	if (edad<18 && edad>12) 
	{	
		alert("adolescente");

	}else
	{
		alert("NO es adolescente");

	}

	/*CON ! NIEGO, NO USO ELSE*/
	if (!(edad<18 && edad>12)) 
	{	
		alert("NO adolescente");	//ESTOY NEGANDO, ESTE ES EL OPUESTO AL DE ARRIBA, EL != NEGAR O NO ES ESTO
	}
	
	/*CON "O" o "||"*/
	if (edad>17 || edad<13)
	{								// ESTA ES LA MEJOR MANERA, LA MEJOR PROGRAMADA DE LAS ANTERIORES. UTILIZO MENOS EL MICROPROCESADOR
		alert("NO adolescente");
	}

	/*LO MISMO QUE EL ANTERIOR PER REPITO LINEA*/
	
	if (edad<13)
	{								// FUNCIONA PERO REPITO LINEA, ENTONCES ESTA MAL PROGRAMADO
		alert("NO adolescente");
	}

	if (edad>17) 
	{
		alert("NO es adolescente");
	}




	/*if (edad>17) 
	{
		alert("mayor");
	}
	else
	{
		alert("menor");
	}*/
	



//tomo la edad  



}//FIN DE LA FUNCIÓN