function mostrar()
{
	var valor;
	var color;
	var contador;
	var contadorRojos;
	var contadorMayor5mil;
	var contadorMenor5mil;
	var contadorVehiculos;
	var promedioVehiculos;
	var masCaro;
	var masCaroColor;
	var sumaVehiculos;
	var respuesta;

	contador=0;
	contadorRojos=0;
	contadorVehiculos=0;
	contadorMenor5mil=0;
	contadorMayor5mil=0;
	sumaVehiculos=0;
	respuesta=true;


	while(respuesta==true)
	{
		valor=prompt("Ingrese el valor del vehículo");
		valor=parseInt(valor);

		while(valor<0 || valor>10000)
		{
			valor=prompt("Error el valor debe estar entre 0 y 10000");
			valor=parseInt(valor);	
		}

		color=prompt("Ingrese el color del vehículo");

		while(color!="rojo" && color!="amarillo" && color!="verde")
		{
			color=prompt("Error solo rojo, verde o amarillo");
		}
	

		
		if (contador==0) 
		{
			masCaro=valor;
			masCaroColor=color;
		}
		else
		{
			if (valor>masCaro) 
			{
				masCaro=valor;
				masCaroColor=color;
			}
		}


		if (color=="rojo" ) 
		{
			contadorRojos++;
			
		
			if (valor>5000 ) 
			{
				contadorMayor5mil++;
			}

		}
		else 
		{
			if ( valor<5000) 
			{
				contadorMenor5mil++;
			}
			
		}
	

		contador++;
		sumaVehiculos=sumaVehiculos+valor;
		respuesta=confirm("Haga click en Aceptar para continuar")
	}
		
	promedioVehiculos=sumaVehiculos/contador;

	document.write("La cantidad de rojos es: "+contadorRojos+ "<br>");
	document.write("La cantidad de rojos con precio mayor a 5000 es: "+contadorMayor5mil+ "<br>");
	document.write("La cantidad de vehiculos con precio inferior a 5000 es: "+contadorMenor5mil+ "<br>");
	document.write("El vehículo más caro es "+masCaro+ " y su color es "+masCaroColor+ "<br>");


}
