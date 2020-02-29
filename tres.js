function mostrar()
{
	var kilosPorBolsa;
	var marca;
	var cantidadDeBolsas;
	var sumaKilos;
	var importePorBolsa;
	var marcaMasKilos;
	var maximoKilos;
	var maximoBolsas;
	var marcaMasBolsas;
	var mayorImportePorBolsa;
	var marcaBolsaMasCara;
	var importeMinimoKilos;
	var cantidadMenosPesada;
	var respuesta;
	var minimoKilos;
	var marcaMinimoKilos;
	var contador;

	respuesta=true;
	sumaKilos=0;
	contador=0;

	while(respuesta==true)
	{
		kilosPorBolsa=prompt("Ingrese la cantidad de kilos por bolsa deseada");
		kilosPorBolsa=parseInt(kilosPorBolsa);

		while(isNaN(kilosPorBolsa))
		{
			kilosPorBolsa=prompt("Error reingrese la la cantidad de kilos");
			kilosPorBolsa=parseInt(kilosPorBolsa);
		}
	
		marca=prompt("Ingrese la marca de la comida");

		while(!isNaN(marca))
		{
			marca=prompt("Error reingrese la marca de la comida");
		}
	
		cantidadDeBolsas=prompt("Ingrese la cantidad de bolsas");
		cantidadDeBolsas=parseInt(cantidadDeBolsas);

		while(isNaN(cantidadDeBolsas))
		{
			cantidadDeBolsas=prompt("Error reingrese la cantidad de bolsas");
			cantidadDeBolsas=parseInt(cantidadDeBolsas);
		}

		importePorBolsa=prompt("Ingrese el precio por bolsa");
		importePorBolsa=parseInt(importePorBolsa);

		while(isNaN(importePorBolsa))
		{
			importePorBolsa=prompt("Error reingrese el precio por bolsa");
			importePorBolsa=parseInt(importePorBolsa);
		}


		if (contador==0) 
		{
			maximoKilos=kilosPorBolsa;
			minimoKilos=kilosPorBolsa 
			marcaMasKilos=marca;
			marcaMinimoKilos=marca;			
			maximoBolsas=cantidadDeBolsas;	
			marcaMasBolsas=marca;			
			mayorImportePorBolsa=importePorBolsa; 
			marcaBolsaMasCara=marca;
			importeMinimoKilos=importePorBolsa;
										
		}
		else
		{
			if (kilosPorBolsa>maximoKilos) 
			{
				maximoKilos=kilosPorBolsa;
				marcaMasKilos=marca;
			}
			else
			{
				if (kilosPorBolsa<minimoKilos) 
				{
					minimoKilos=kilosPorBolsa;
					marcaMinimoKilos=marcaMinimoKilos;
					importeMinimoKilos=importePorBolsa;
				}
			}
			
			
			if (cantidadDeBolsas>maximoBolsas) 
			{
				maximoBolsas=cantidadDeBolsas;
				marcaMasBolsas=marca;
			}
				
				
			if (importePorBolsa>mayorImportePorBolsa) 
			{
				mayorImportePorBolsa=importePorBolsa;
				marcaBolsaMasCara=marca;
			}
				
			
		}			
		
		contador++;
		sumaKilos=sumaKilos+(cantidadDeBolsas*kilosPorBolsa);
		respuesta=confirm("Haga click en Aceptar para continuar");			
			
	}

	document.write("La marca que tiene mas kilos en el contenedor es: "+marcaMasKilos+ "<br>");
	document.write("La marca que tiene mas bolsas de alimento en el contenedor es: "+marcaMasBolsas+ "<br>");
	document.write("La marca que tiene el mayor importe or bolsa es: "+marcaBolsaMasCara+ "<br>");
	document.write("El importe de la bolsa menos pesada es "+importeMinimoKilos+" y su marca es "+marcaMinimoKilos+ "<br>");



		/*if (contador==0) 
		{
			maximoKilos=kilosAlimentoCanino; // ya esta
			marcaMasKilos=marca;			// ya esta
			maximoBolsas=cantidadDeBolsas;	// ya esta
			marcaMasBolsas=marca;			// ya esta
			mayorImportePorBolsa=importePorBolsa; // ya esta
			marcaBolsaMasCara=marca;			// ya esta
			importeMinimoKilos=importePorBolsa;

		}
		else
		{
			if (kilosAlimentoCanino>maximoKilos) 
			{
				maximoKilos=kilosAlimentoCanino;
				marcaMasKilos=marca;
			}
			else
			{
				if (cantidadDeBolsas>maximoBolsas) 
					{
						maximoBolsas=cantidadDeBolsas;
						marcaMasBolsas=marca;
					}
					else
					{
						if (importePorBolsa>mayorImportePorBolsa) 
						{
							mayorImportePorBolsa=importePorBolsa;
							marcaBolsaMasCara=marca;

						}
						else
						{
							if (importePorBolsa<importeMinimoKilos) 
							{
								importeMinimoKilos=importePorBolsa;
								marcaMenosPesada=marca;
							}
						}
					}
				}
			}
			*/
				


}		
