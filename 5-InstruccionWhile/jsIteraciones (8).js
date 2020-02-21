function mostrar()
{

	var contador=0;
	var positivo=0;
	var negativo=1;
	var respuesta='si';
	var numeroIngresado;

	while(respuesta=="si")
	{
		contador=contador+1; // ESTO LE SUMA 1 AL CONTADOR
		numeroIngresado=prompt("Ingrese número");
		numeroIngresado=parseInt(numeroIngresado);
		
		/*if (numeroIngresado<0)*/ //SI LO PONGO ASI EN VEZ DE SUMAR ME LOS VA A MULTIPLICAR ¿POR QUÉ? PORQUE CUANDO USO WHILE TENGO QUE PONER/PENSAR LO CONTARRIO A LO QUE ME PIDE EL EJERCICIO.
		if(numeroIngresado>0)
		{
			positivo=positivo+numeroIngresado;		//LA ESTRUCTURA ES EJ: contador=contador +1
		}else
		{	
			/*if (numeroIngresado>0)*/ // SI LO PONGO ASI EN VEZ DE MULTIPLICAR ME LOS VA A SUMAR ¿POR QUÉ? PORQUE CUANDO USO WHILE TENGO QUE PONER/PENSAR LO CONTARRIO A LO QUE ME PIDE EL EJERCICIO.
			if(numeroIngresado<0) 
			{
				negativo=negativo*numeroIngresado; // VA ASI PORQUE SI PONGO negativo= numero ingresado*numero ingresado solo me guarda el ultimo numero y los demas que ponga no.
			}
		}
		respuesta=prompt("ingrese si para continuar");
	}


	document.getElementById('suma').value=positivo;
	document.getElementById('producto').value=negativo;

}//FIN DE LA FUNCIÓN