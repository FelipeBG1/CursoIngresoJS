function mostrar()
{
	//declarar contadores y variables 

	var numeroIngresado;
	var positivo;
	var negativo;
	var contadorPositivos;
	var contadorNegativos;
	var contadorCeros;
	var contadorPares;
	var promedioPositivos;
	var promedioNegativos;
	var diferencia;
	var respuesta;
	//var contador NO ES NECESARIA LA VARIBLE CONTADOR


	positivo=0;
	negativo=0;
	contadorNegativos=0; //EMPIEZAN EN CERO PORQUE TENGO, POR EL MOMENTO CERO NUMEROS POSITIVOS Y CERO NEGATIVOS. LO MISMO PASA CON LOS PARES Y LOS CEROS
	contadorPositivos=0;
	contadorPares=0;
	contadorCeros=0;
	respuesta=true       // LE OTORGO EL VALOR DE TRUE A LA RESPUESTA EN VES DE "si" PARA PODER UTILIZAR EL respuesta=confirm				


								
	while(respuesta==true) 
	{
		numeroIngresado=prompt("Ingrese un número");
		numeroIngresado=parseInt(numeroIngresado);

				while(isNaN(numeroIngresado))
				{
					numeroIngresado=prompt("Error reingrese un número"); // ACA VERIFICO QUE EL NUMERO INGRESADO SEA, valga la redundancia; UN NUMERO
					numeroIngresado=parseInt(numeroIngresado); // SIEMPRE LO DEBO VOLVER A PARSEAR
				}
		
		if (numeroIngresado<0) 
		{
			negativo=negativo+numeroIngresado; //ACA ESTA LA SUMA
			
			contadorNegativos++; // ME SUMA UNO AL CONTADOR DE NEGATIVOS, ES DECIR, YA TENGO UN NEGATIVO
		
		}
		else
		{
			if (numeroIngresado>0) 
			{
				positivo=positivo+numeroIngresado; //ACA ESTA LA SUMA
				
				contadorPositivos++; // ME SUMA UNO AL CONTADOR DE POSITIVOS, ES DECIR, YA TENGO UN POSITIVO
				
				if ((numeroIngresado % 2)==0) // NOSE SI VA CON EL "% (que es para módulo), FUNCIONA IGUAL CON "/" (línea de división). ¡¡¡PREGUNTAR!!!
				{
					contadorPares++; //ME SUMA UNO AL CONTADOR DE NUMEROS PARES, ES DECIR YA TENGO UN NUMERO PAR 
				}
			
			}	
			else
			{
				contadorCeros++; //ME SUMA UNO AL CONTADOR DE CEROS, ES DECIR, YA TENGO UN CERO
			}
		
		}	
	

		respuesta=confirm("Haga clck en Aceptar si desea ingresar otro número"); //UTILIZO ESTO PARA AHORRARE TENER QUE ESCRIBIR "si" CADA VEZ QUE QUIERA INGREASR OTRO NUMERO, SOLO TENGO QUE PONER ACEPTAR O CANCELAR

	}

		promedioNegativos=negativo/contadorNegativos; // ESTAS SON LAS CUENTAS, EL PROMEDIO DE AMBOS Y LA DIFRENCIA
		promedioPositivos=positivo/contadorPositivos;
		diferencia=positivo+negativo;


		document.write("La suma de los negativos da como resultado: " +negativo+ "<br>" ); //PARA MOSTRAR CON document.write DEBO PONER LA VARIABLE ENTRE SIGNOS DE MAS ("+variable+") Y LUEGO EL (<br>) ENTRE COMILLAS ("<br>")
	
		document.write("La suma de los positivos da como resultado: " +positivo+ "<br>" );
	
		document.write("La cantidad de positivos es: " +contadorPositivos+ "<br>");           
	
		document.write("La cantidad de negativos es: " +contadorNegativos+ "<br>");              
		
		document.write("La cantidad de ceros es: " +contadorCeros+ "<br>");               
		
		document.write("La cantidad de números pares es: "  +contadorPares+"<br>" );               
		
		document.write("La promedio de positivos da como resultado: " +promedioPositivos+ "<br>");
		
		document.write("La promedios de negativos da como resultado: " +promedioNegativos+ "<br>");
		
		document.write("La diferencia entre positivos y negativos da como resultado: " +diferencia+ "<br>" );







}//FIN DE LA FUNCIÓN