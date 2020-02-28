function mostrar()
{
   	var nombre;
   	var cantidadPersonas;
   	var cantidadDias;
   	var formaDePago;
   	var	respuesta;
   	var contador;
   	var contadorDias;
   	var sumaDias;
   	var nombreMayorPersonas;
   	var mayorPersonas;
   	var contadorEfectivo;
   	var contadorTarjeta;
   	var contadorQR;
   	var personasMasDias;
   	var masDias;
   	var promedioDias;
   	var pagoMasUtilizado;
   	var tarjeta;
   	var efectivo;
   	var QR;
   	var noMasUtilizado;

   	noMasUtilizado="No hay un metodo de pago más utilizado";
   	efectivo="efectivo";
   	tarjeta="tarjeta";
   	QR="QR";
   	contadorEfectivo=0;
   	contadorQR=0;
   	contadorTarjeta=0;
   	contador=0;
   	contadorDias=0;
   	sumaDias=0;
   	respuesta=true;

   	while(respuesta==true)
   	{
   		nombre=prompt("Ingrese el nombre del huésped");
   		
   		while(!isNaN(nombre))
   		{
   			nombre=prompt("Error reingrese el nombre del huésped");
   		}

   		cantidadPersonas=prompt("Ingrese la cantidad de personas");
   		cantidadPersonas=parseInt(cantidadPersonas);

   		while(isNaN(cantidadPersonas))
   		{
   			cantidadPersonas=prompt("Error reingrese la cantidad de personas");
   			cantidadPersonas=parseInt(cantidadPersonas);
   		}

   		cantidadDias=prompt("Ingrese la cantidad de dias de la estadia");
   		cantidadDias=parseInt(cantidadDias);

   		while(isNaN(cantidadDias))
   		{
   			cantidadDias=prompt("Error reingrese la cantidad de dias de la estadia");
   			cantidadDias=parseInt(cantidadDias);
   		}

   		formaDePago=prompt("Ingrese efectivo,tarjeta o QR para indicar la forma de pago");

   		while(formaDePago!="efectivo" && formaDePago!="tarjeta" && formaDePago!="QR")
   		{

   			formaDePago=prompt("Error solo efectivo,tarjeta o QR como forma de pago");

   		}
   

   		if (contador==0) 
   		{
   			mayorPersonas=cantidadPersonas;
   			nombreMayorPersonas=nombre;
   			masDias=cantidadDias;
   			personasMasDias=cantidadPersonas;
   		}
   		else
   		{
   			if (cantidadPersonas>mayorPersonas) 
   			{
   				mayorPersonas=cantidadPersonas;
   				nombreMayorPersonas=nombre;
   			}
   			
   			
   			if (masDias<cantidadDias) 
   			{
   				masDias=cantidadDias;
				personasMasDias=cantidadPersonas;
			}
   			
   		}


   		if (formaDePago=="efectivo") 
   		{
   			contadorEfectivo++;
   		}
   		else
   		{
   			if (formaDePago=="tarjeta") 
   			{
   				contadorTarjeta++;
   			}
   			else
   			{
   				contadorQR++;
   			}
   		}

   		contadorDias++;
   		sumaDias=sumaDias+cantidadDias;
   	 	respuesta=confirm("Haga click en Aceptar para continuar");

   	}

 	if (contadorEfectivo>contadorTarjeta && contadorEfectivo>contadorQR) 
 	{
 		pagoMasUtilizado=efectivo;
 	}
 	else
 	{
 		if  (contadorTarjeta>contadorQR) 
 		{
 			pagoMasUtilizado=tarjeta;
 		}
 		else
 		{
 			 pagoMasUtilizado=QR;
 		}
 	}
 	



 	promedioDias=sumaDias/contadorDias;

 	document.write("El huesped que trajo más personas es: "+nombreMayorPersonas+ "<br>");
 	document.write("La cantidad de personas que se quedaron más días es: "+personasMasDias+ "<br>");
 	document.write("La forma de pago más utilizada es: "+pagoMasUtilizado+ "<br>");
 	document.write("El promedio de cantidad de días por reserva es: "+promedioDias+ "<br>");





}
