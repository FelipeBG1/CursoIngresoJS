function mostrar()
{
	var numeroUno;
	var numeroDos;
	var suma;
	var resta;

	

	numeroUno=prompt("Ingrese un número");
	numeroUno=parseInt(numeroUno);
	
	numeroDos=prompt("Ingrese otro número");
	numeroDos=parseInt(numeroDos);
		
	suma= numeroUno + numeroDos;
	resta= numeroUno - numeroDos;	
	
	if (numeroUno==numeroDos) 
	{
		alert(numeroUno+ "" +numeroDos); //PARA CONCATENAR DOS NUMEROS, TENGO QUE PONER, en este caso, numerouno+ "" +numerodos.
	}
	else
	{
		if (numeroUno>numeroDos) 
		{
			alert(resta);
		}
		else
		{
			suma;
			
			if (suma>10) 
			{
				alert("La suma es " +suma+ " y superó 10");
			}		
		}
	


	}













}
