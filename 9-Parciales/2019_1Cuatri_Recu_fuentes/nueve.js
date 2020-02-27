function mostrar()
{
	var nombre;
	var edad;
	var notaFinal;
	var sexo;
	var contadorVaronesAprobados;
	var promedioMenores;
	var promedioAdolescentes;
	var promedioMayores;
	var promedioMasculino;
	var promedioFemenino;
	var contador;
	var sumaMenores;
	var sumaAdolescentes;
	var sumaMayores;
	var sumaMasculino;
	var sumaFemenino;
	var respuesta;
	var contadorMenores;
	var contadorAdolescentes;
	var contadorMayores;
	var contadorMasculino;
	var contadorFemenino;

	respuesta=true;
	contador=0;
	contadorVaronesAprobados=0;
	sumaFemenino=0;
	sumaMasculino=0;
	sumaMenores=0;
	sumaAdolescentes=0;
	sumaMayores=0;
	contadorMenores=0;
	contadorAdolescentes=0;
	contadorMayores=0;
	contadorMasculino=0;
	contadorFemenino=0;


	while(respuesta==true)
	{
		nombre=prompt("Ingrese el nombre");

		while(!isNaN(nombre))
		{
			nombre=prompt("Error reingrese el nombre");
		}
	
		edad=prompt("Ingrese la edad");
		edad=parseInt(edad);

		while(edad<1 && edad>110)
		{
			edad=prompt("Error reingrese la edad");
			edad=parseInt(edad);
		}

		sexo=prompt("Ingrese f o m para indicar el sexo");
		while(sexo!="f" && sexo!="m")
		{
			sexo=prompt("Error reingrese f o m para indicar el sexo");
		}

		notaFinal=prompt("Ingrese la nota del final");
		notaFinal=parseInt(notaFinal);

		while(notaFinal<1 && notaFinal>10)
		{
			notaFinal=prompt("Error reingrese la nota del final");
			notaFinal=parseInt(notaFinal);
		}


		if (notaFinal>5 && sexo=="m") 
		{
			contadorVaronesAprobados++;
		}

		if (edad>17) 
		{
			contadorMayores++;
			sumaMayores=sumaMayores+notaFinal;
		}
		else
		{
			if (edad>12 && edad<18) 
			{
				contadorAdolescentes++;
				sumaAdolescentes=sumaAdolescentes+notaFinal;
			}
			else
			{
				contadorMenores++;
				sumaMenores=sumaMenores+notaFinal;
			}
		
		}
	
		if (sexo=="f") 
		{
			contadorFemenino++;
			sumaFemenino=sumaFemenino+notaFinal;
		}
		else
		{
			contadorMasculino++;
			sumaMasculino=sumaMasculino+notaFinal;
		}

		contador++;
		respuesta=confirm("Haga click en Aceptar para continuar");

	}	

	promedioFemenino=sumaFemenino/contadorFemenino;
	promedioMasculino=sumaMasculino/contadorMasculino;
	promedioMenores=sumaMenores/contadorMenores;
	promedioAdolescentes=sumaAdolescentes/contadorAdolescentes;
	promedioMayores=sumaMayores/contadorMayores;


	document.write("La cantidad de varones aprobados es: "+contadorVaronesAprobados+ "<br>");
	document.write("El promedio de notas de los menores de edad es: "+promedioMenores+ "<br>");
	document.write("El promedio de notas de los adolescentes es: "+promedioAdolescentes+ "<br>");
	document.write("El promedio de notas de los mayores es: "+promedioMayores+ "<br>");
	document.write("El promedio de notas del sexo masculino es: "+promedioMasculino+ "<br>");
	document.write("El promedio de notas del sexo femenino es: "+promedioFemenino+ "<br>");

}
