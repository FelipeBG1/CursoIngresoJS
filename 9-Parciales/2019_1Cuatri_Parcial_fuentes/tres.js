function mostrar()
{
	var kilosAlimentoCanino;
	var marca;
	var cantidadDeBolsas;
	var importePorBolsa;
	var marcaMasKilos;
	var maximoKilos;
	var maximoBolsas;
	var marcaMasBolsas;
	var mayorImportePorBolsa;
	var marcaBolsaMasCara:
	var marcaMenosPesada;
	var importeMenosPesada;
	var importeMinimoKilos;
	var respuesta;

	respuesta=true;

	while(respuesta==true || contador<1000)
	{
		kilosAlimentoCanino=prompt("Ingrese la cantidad de kilos deseada");
		kilosAlimentoCanino=parseInt(kilosAlimentoCanino);

		while(kilosAlimentoCanino<1 || kilosAlimentoCanino>1000)
		{
			kilosAlimentoCanino=prompt("Error solo de 1 a 1000 kilos");
			kilosAlimentoCanino=parseInt(kilosAlimentoCanino);
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
			maximoKilos=kilosAlimentoCanino; // ya esta
			marcaMasKilos=marca;			// ya esta
			maximoBolsas=cantidadDeBolsas;	// ya esta
			marcaMasBolsas=marca;			// ya esta
			mayorImportePorBolsa=importePorBolsa; // ya esta
			marcaBolsaMasCara=marca;			// ya esta
			minimoKilos=kilosAlimentoCanino;	// ya esta
			marcaMinimoKilos=marca;				// ya esta
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

		contador=contador+kilosAlimentoCanino;
		respuesta=confirm("Haga click en Aceptar para continuar");
	}

	document.wtite("La marca que tiene mas kilos en el contenedor es: "+marcaMasKilos+ "<br>");
	document.wtite("La marca que tiene mas bolsas de alimento en el contenedor es: "+marcaMasBolsas+ "<br>");
	document.wtite("La marca que tiene el mayor importe or bolsa es: "+marcaBolsaMasCara+ "<br>");
	document.wtite("El importe de la bolsa menos pesada es "+importeMenosPesada+" y su marca es "+marcaMenosPesada+ "<br>");



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
