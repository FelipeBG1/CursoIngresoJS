function mostrar()
{
	var numero;
	
	numero = prompt("ingrese un número entre 0 y 10.");
	numero=parseInt(numero);

	while(isNaN(numero)) // EL WHILE PAR VERIFICAR CON EN NaN VA DESPUES DEL PROMPT Y EL PARSEINT.
		{
			numero = prompt("Error solo numeros");
			numero = parseInt(numero);
		} 

	
	// while(!(numero>0 && numero<10)) // es lo mismo que lo de abajo pero mas complicado
	while(numero<0 || numero>10)
	{
		numero = prompt("ingrese un número entre 0 y 10.");
		numero = parseInt(numero);
		
		

	}

	document.getElementById('Numero').value=numero;


}//FIN DE LA FUNCIÓN