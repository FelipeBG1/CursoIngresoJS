function mostrar()
{	
	var marca;
	var peso;
	var temperaturaAlmacenamiento;
	var contadorTemperaturasPares;
	var marcaPesado;
	var contadorConservados0;
	var promedioPeso;
	var sumaPeso;
	var pesoMaximo;
	var pesoMinimo;
	var respuesta;
	var contador;

	respuesta=true;
	contadorConservados0=0
	contadorTemperaturasPares=0
	contador=0;
	sumaPeso=0;

	while(respuesta==true)
	{
		marca=prompt("Ingrese la marca del producto");
		
		while(!isNaN(marca))
		{
			marca=prompt("Error vuelva a ingresar la marca");	
		}

		peso=prompt("Ingrese el peso del producto");
		peso=parseInt(peso);	
		
		while(peso<1 && peso>100)
		{
			peso=prompt("Error solo entre 1 y 100");
			peso=parseInt(peso);
		}

		temperaturaAlmacenamiento=prompt("Ingrese la temperatura de almacenamiento");
		temperaturaAlmacenamiento=parseInt(temperaturaAlmacenamiento);

		while(temperaturaAlmacenamiento<-30 && temperaturaAlmacenamiento>30)
		{
			temperaturaAlmacenamiento=prompt("Error la temperatura solo entre -30 y 30");
			temperaturaAlmacenamiento=parseInt(temperaturaAlmacenamiento);	
		}
	
			if (contador==0) 
			{
				pesoMaximo=peso;
				pesoMinimo=peso;
				marcaPesado=marca;
			}
			else
			{
				if (peso>pesoMaximo) 
				{
					pesoMaximo=peso;
					marcaPesado=marca;
				}
				else
				{
					if (peso<pesoMinimo) 
					{
						pesoMinimo=peso;
					}
				}
			}


			if ((temperaturaAlmacenamiento%2)==0) 
			{
				contadorTemperaturasPares++;
			}

			if (temperaturaAlmacenamiento<0) 
			{
				contadorConservados0++;
			}



		
		contador++;
		sumaPeso=sumaPeso+peso;
		
		respuesta=confirm("Haga click en Aceptar para continuar");

	}
	promedioPeso=sumaPeso/contador;
	document.write("La cantidad de temperaturas pares es: "+contadorTemperaturasPares+ "<br>");
	document.write("La marca del producto más pesado es: "+marcaPesado+ "<br>");
	document.write("La cantidad de productos que se conservan a menos de 0 grados es: "+contadorConservados0+ "<br>");
	document.write("El promedio del peso de todos los productos es: "+promedioPeso+ "<br>");
	document.write("El peso máximo es: "+pesoMaximo+ "<br>");
	document.write("El peso mínimo es: "+pesoMinimo+ "<br>");








}
