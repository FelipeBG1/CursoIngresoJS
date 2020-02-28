
function mostrar()
{
	var nombre;
	var edad;
	var sexo;
	var temperatura;
	var maximaTemperatura;
	var contador;
	var nombreTemperaturaMaxima;
	var sexoTemperaturaMaxima;
	var respuesta;
	var temperaturaJoven;
	var temperaturaViejo;
	var edadJoven;
	var edadViejo; 
	var promedioEdadTotal;
	var promedioEdadMujeres;
	var contadorMujeres;
	var sumaEdad;
	var sumaEdadMujeres;
 	
 	temperaturaJoven=0;
 	temperaturaViejo=0;
 	contador=0;
 	contadorMujeres=0;
 	sumaEdad=0;
 	sumaEdadMujeres=0;
 	respuesta=true;
 

 while(respuesta==true)
 {
 	
 	nombre=prompt("Ingrese el nombre");
 	while(!isNaN(nombre))
 	{
 		nombre=prompt("Error reingrese el nombre");
 	}

 	edad=prompt("Ingrese la edad");
 	edad=parseInt(edad);
 	while(edad<1 || edad>100)
 	{
 		edad=prompt("Error reingrese la edad");
 		edad=parseInt(edad);
 	}

 	sexo=prompt("Ingrese f o m para indicar el sexo");
 	while(sexo!="f" && sexo!="m")
 	{
 		sexo=prompt("Error no corresponde con f o m ");
 	}

 	temperatura=prompt("Ingrese la temperatura corporal");
 	temperatura=parseInt(temperatura);
 	while(temperatura<34 |temperatura>42)
 	{
 		temperatura=prompt("Error reingrese la temperatura corporal");
		temperatura=parseInt(temperatura);
 	}
 

 		if (contador==0) 
 		{
	 		maximaTemperatura=temperatura;
	 		nombreTemperaturaMaxima=nombre;
	 		sexoTemperaturaMaxima=sexo;
	 		edadJoven=edad;
	 		edadViejo=edad;
			temperaturaJoven=temperatura;
			temperaturaViejo=temperatura;

		}
		else
		{

	 		if (edad<edadJoven) 
	 		{
	 			temperaturaJoven=temperatura;
	 		}
	 		else
	 		{
	 			if (edad>edadViejo) 
	 			{
	 				temperaturaViejo=temperatura;
	 			}
	 		}
		}

 		if (temperatura>38) 
 		{
 			if (edad<12 || edad>60) 
 			{
 				alert(nombre+" está en riesgo");
 			}
		}

		if (sexo=="f") 
		{
			contadorMujeres++;
			sumaEdadMujeres=sumaEdadMujeres+edad;
		}

		sumaEdad=sumaEdad+edad;
		contador++;
		respuesta=confirm("Haga click en Aceptar para continuar");

 }

 	 promedioEdadTotal=sumaEdad/contador;
	 promedioEdadMujeres=sumaEdadMujeres/contadorMujeres;

	 document.write("La temperatura de la persona más joven es: "+temperaturaJoven+ "<br>");
	 document.write("La temperatura de la persona más vieja es: "+temperaturaViejo+ "<br>");
	 document.write("El promedio de la edad total es: "+promedioEdadTotal+ "<br>");
	 document.write("El promedio de la edad de las mujeres es: "+promedioEdadMujeres+ "<br>");
	 document.write("El nombre de la persona con más temperatura es "+nombre+" y el sexo de esa persona es "+sexo+ "<br>");






}
