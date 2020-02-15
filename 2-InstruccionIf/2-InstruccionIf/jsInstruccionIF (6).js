function mostrar()
{

	var edad;

	edad=document.getElementById('edad').value;
	edad=parseInt(edad);
    
    
     if (edad<13 ) 
	 {
		alert ("es menor");
	 
	 }else						// CON EL ELSE SEPARO EN SUB CONJUNTOS
	 	{
	 		if (edad>17) 
	 		{
				alert ("es mayor");
			
			}else
	 		 
	 			{
					alert ("es adolescente");
	 			}

	 	} 
	 
	 	
	/* ESTE ES ERRONEO, ME FALTA UN ELSE*/

	 if (edad<13 ) 
	 {
		alert ("es menor");  	//SI TESTEO CON 7 ME VA A MOSTRAR QUE ES NIÑO Y ADOLESCENTE A LA VEZ
	 } 
	 
	 	if (edad>17) 
	 	{
				alert ("es mayor");
		}
	 	else 
	 	{
			alert ("es adolescente");   // ESTE ELSE NO TIENE CONDICION PORQUE HACIENDO ESTO UTILIZO MENOS EL MICROPROCESADOR Y DESVIO DE LOS ANTERIORES PORQUE ES POR DESCARTE, SI NO ES EL PRIMERO ES EL SEGUNDO PERO SI NO ES SOLO QUEDA UN SUB CONJUNTO QUE NO ES NECESARIO PONERLE UNA CONDICION PORQUE LAS CONDICIONES YA LAS TIENEN LOS OTROS Y YA LA DEDUCE.
	 	
	




 	/* FUNCIONA PERO ESTA MAL PROGRAMADO MUCHAS VECES IF*/
	
	if (edad<13 ) 
	 {
		alert ("es menor");
	 } 
	 
	 if (edad>17) 				//UTILIZO EL MICROPROCESADOR 4 VECES CUANDO EL MINIMO ES 3. HAGO 4 PREGUNTAS Y LO UTILIZO 3 VECES
	 	{
			alert ("es mayor");
		}
	if (edad<18 && edad>12) 
	 	{
			alert ("es adolescente");
	 			
	 	}


/* 
	if (  )   //ESTRUCTURA
 	{
		
	}else
	 {
	 	if (  ) 
	 	{
				
		}else
			{
			
	 			
	 		}

	 } 

	 */




/*if (edad<13)  //ESTE ESTA MAL ES EL ERROR
	 {
		alert ("es menor");
	 } 
	 
	 	if (edad>17) 
	 		{
				alert ("es mayor");
			}
	else 
	 	{
			alert ("es adolescente");
	 			
	 	}*/

     		


//tomo la edad  




}//FIN DE LA FUNCIÓN