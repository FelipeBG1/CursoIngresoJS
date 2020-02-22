function mostrar()
{

	var contador=0; // PUEDO USAR UNA BANDERA  	var flag=true; HAGO ESTO PARA QUE ME DIGA SI PASO ALGO O NO, ES DECIR SI EL NUMERO QUE INGRESO ES EL PRIMERO, SINO PASA AL OTRO EN LA PARTE DEL IF( hago esto para ejercicios que no debo sumar numeros PERO SOLA PARA SABER NO LO DEBO AHCER PORQUE MI PROFESOR DIJO QUE LO HAGAMOS CON CONTADOR Y NO CON FLAG)
	var respuesta='si'; // para utilizar el respuesta=confirm necesito cambiar la respuesta por true.
	var mínimo; // NO SE INICIALIZAN PORQUE NO SABEMOS LOS VALORES RELATIVOS, ENTONCES EL CODIGO VA A PINCHAR EN ALGUN MOMENTO
	var máximo;
	var numeroIngresado;

	contador=0;
	
	
	while(respuesta!="no")
	{

	}





	while(respuesta=='si')
	{
		contador=contador + 1;

		numeroIngresado=prompt("Ingrese el número");
		numeroIngresado=parseInt(numeroIngresado);

		if (contador==1 /*CAMBIO ESTO POR flag */  ) // ES ==1 PORQUE PUSE contador=contador+1 ARRIBA, SINO DBERIA PONER ==0 Y LA PARTE DE CONTADOR ABAJO DEL ULTIMO IF.
		{
			mínimo=numeroIngresado;
			máximo=numeroIngresado;
		}
		else
		{
			if (/* flag== true || */numeroIngresado<mínimo) //SI EL FLAG ESTA EN FALSE VA A IR A COMPARAR CON LA CONDICION DE numeroIngresado<minimo
			{
				mínimo=numeroIngresado;
			}
			if (/* flag== true || */ numeroIngresado>máximo) 
			{
				máximo=numeroIngresado;
			}
		}	
	
		// flag = false; ENTONCES SI NNO ES EL PRIMER NUMERO VA A PASAR A LA OTRA PARTE DEL IF. flag= false NO ES EL PRIMER NUMERO QUE INGRESO.

		respuesta=prompt("¿Desea ingresar otro?");
		

		respuesta=confirm("Desea ingresar otro número") // SI QUIERO UTILIZAR ESTO EL respuesta=prompt NO VA, LO INTERCAMBIO POR ESTE
		
		/*respuesta=respuesta.toLowerCase(); // CON ESTO LO CONVIERTO EN MINUSCULA, ENTONCES SI PONGO SI MAYUSCULA LO TRANSFORMA*/


	}

		document.getElementById('maximo').value=maximo;
		document.getElementById('minimo').value=minimo;



}//FIN DE LA FUNCIÓN