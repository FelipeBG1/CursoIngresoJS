function mostrar()
{

	var contador;
	var acumulador;
	var numeroIngresado;


	contador=0;
	acumulador=0;
	
	while(contador<500)
	{
		contador=contador+1;
		numeroIngresado=prompt("Ingrese número");
		numeroIngresado=parseInt(numeroIngresado);
		acumulador=acumulador+numeroIngresado;

	}
	


	document.getElementById('suma').value=acumulador;
	document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN