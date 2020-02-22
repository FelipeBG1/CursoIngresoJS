function mostrar()
{

	var contador;
	var acumulador;
	var numeroIngresado;


	contador=0;
	acumulador=0;
	
	while(contador<5)
	{
		contador=contador+1;
		numeroIngresado=prompt("Ingrese número"); //NO TENGO UN CAUDRO DE TEXTO DONDE INGRESAR EL SUMERO, ENTONCES TENGO QUE UTILIZAR PROMPT
		numeroIngresado=parseInt(numeroIngresado);
		acumulador=acumulador+numeroIngresado;

	}
	
	


	document.getElementById('suma').value=acumulador; // VA AFUERA PORQUE, EN ESTE CASO, LO QUE ME PIDE ES LA SUMA TOTAL, SI QUIERO LA SUMA PARCIAL A MEDIDA QUE INGRESO NUMEROS VA ADENTRO DEL WHILE.
	document.getElementById('promedio').value=acumulador/contador; // DIVIDO POR EL CONTADOR NO POR EL MAXIMO QUE TENGA PORQUE, SI TENGO EL CASO DE PODER INGRESAR MENOS NUMEROS Y ASI ME DIVIDE POR LA CANTIDAD DE NUMEROS QUE PUSE.

}//FIN DE LA FUNCIÓN