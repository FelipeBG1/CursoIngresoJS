function mostrar()
{
	var contador;

	contador=0; //TODOS LOS CONTADORES DEBEN ESTAR INICIALIZADOS, SI NO LO HAGO LO TOMA COMO UNDEFINED
				// SE EMPIEZAN EN CERO
	while (contador<10) 
	{
		contador = contador + 1; //SUMARLE 1 AL CONTADOR, SI NO LA INICIALICE ME VA A TIRAR NaN PORQUE SI LE SUMO 1 A ALGO UNDEFINED
								 // PONER contador++; seria lo mismo. ES SOLO CUADNO SUMO DE A UNO PORQUE EL ++ ES PARA SUMAR DE A UNO.
								 // PONER contador+=2 esto apra cualquiera que no sea 1
		
		console.log(contador);  // ES EN ESTE ORDEN PORQUE SI PONGO AL REVES PRIMERO MUESTRA Y LUEGO CUENTA, ME EMPIEZA A MOSTRAR DESDE EL 0 AL 10 

	}



}//FIN DE LA FUNCIÓN