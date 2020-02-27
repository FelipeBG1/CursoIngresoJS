function mostrar()
{
	var numeroIngresado;
	var numeroAnterior;
	var flag;

	flag=0;

	numeroIngresado=prompt("Ingrese un número");
	numeroIngresado=parseInt(numeroIngresado);
	//validar

	for(numeroAnterior=2;numeroAnterior<numeroIngresado;numeroAnterior++) //no me sirve que empice ni en 0 ni en 1
	{
		if ((numeroIngresado%numeroAnterior)==0) 
		{
			flag=1;
			break; //PARA QUE NO ME SIGA BUSCANDO DIVISORES CUANDO YA ENCONTRE UNO QUE ME DIGA QUE ES PRIMO USO EL break
		}
	}

	if (flag!=1) 
	{
		//no es primo
		alert("El "+numeroIngresado+" es primo");
	}



	/*var contador;
	contador=0;

	while(contador<10)					//ESTO ES WHILE
	{
		console.log(contador);
		contador++;
	}


	var contador;
	contador=0;

	do
										//ESTO ES do while
		console.log(contador);
		contador++;

	while(contador<10);
	*/

	






}//FIN DE LA FUNCIÓN