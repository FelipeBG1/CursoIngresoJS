function mostrar()
{

	var contador=0;
	var respuesta='si';
	var mínimo;
	var máximo;
	var numeroIngresado;

	contador=0
	
	while()





	while(respuesta=='si')
	{
		contador=contador + 1;

		numeroIngresado=prompt("Ingrese el número");
		numeroIngresado=parseInt(numeroIngresado);

		if (contador==1) 
		{
			mínimo=numeroIngresado;
			máximo=numeroIngresado;
		}
		else
		{
			if (numeroIngresado<mínimo) 
			{
				mínimo=numeroIngresado;
			}
			if (numeroIngresado>máximo) 
			{
				máximo=numeroIngresado;
			}
		}	
	
		respuesta=prompt("Ingrese si para continuar");


	}




}//FIN DE LA FUNCIÓN