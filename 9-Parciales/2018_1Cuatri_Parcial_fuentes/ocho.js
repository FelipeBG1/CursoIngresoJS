function mostrar()
{

	var numero;
	var letra;
	var	contadorPositivos
	var contadorPares;
	var contadorImpares;
	var contadorCeros;
	var promedioPositivos;
	var sumaPositivos;
	var sumaNegativos;
	var numeroMaximo;
	var numeroMinimo;
	var letraMaximo;
	var letraMinima;
	var respuesta;
	var contador;

	contadorPositivos=0;
 	contadorPares=0;
 	contadorImpares=0;
 	contadorCeros=0;
 	promedioPositivos=0;
 	sumaPositivos=0;
 	sumaNegativos=0;
 	contador=0;
	respuesta=true;

	while(respuesta==true)
	{
		numero=prompt("Ingrese el número deseado");
		numero=parseInt(numero);

		while(numero< -100 || numero>101)
		{
			numero=prompt("Error reingrese un número");
			numero=parseInt(numero);
		}

		letra=prompt("Ingrese a letra deseada");

		while(!isNaN(letra))
		{
			letra=prompt("Error ingrese una letra");
		}


		if ((numero % 2)==0) 
		{
			contadorPares++;

		}
		else
			{
				contadorImpares++;
			}
		


		if (numero>0) 
		{
			contadorPositivos++;
			sumaPositivos=sumaPositivos+numero;
		}
		else
		{
			if (numero<0) 
			{
				sumaNegativos=sumaNegativos+numero;
			}
			else
			{
				contadorCeros++;
			}
		}


		if (contador==0) 
		{
			numeroMinimo=numero;
			numeroMaximo=numero;
			letraMinima=letra;
			letraMaximo=letra;
		}
		else
		{
			if (numero<numeroMinimo) 
			{
				numeroMinimo=numero;
				letraMinima=letra;
			}
			else
			{
				if (numero>numeroMaximo) 
				{
					numeroMaximo=numero;
					letraMaximo=letra;
				}
			}

		}

		contador++;
		respuesta=confirm("Haga click en aceptar para continuar");

	}

	promedioPositivos=sumaPositivos/contadorPositivos;
	document.write("La cantidad de numeros pares es: "+contadorPares+ "<br>");
	document.write("La cantidad de numeros impares es: "+contadorImpares+ "<br>");
	document.write("La cantidad de ceros es: "+contadorCeros+ "<br>");
	document.write("El promedio de todos los números positivos ingresados es: "+promedioPositivos+ "<br>");
	document.write("La suma de todos los números negativos es: "+sumaNegativos+ "<br>");
	document.write("El número máximo es "+numeroMaximo+ " y su correspondiente letra es "+letraMaximo+ "<br>");
	document.write("El número mínimo es "+numeroMinimo+ " y su correspondiente letra es "+letraMinima+ "<br>");
	







}











