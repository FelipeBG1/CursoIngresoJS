function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	var notaRandom;

	notaRandom=Math.floor(Math.random() * 10) + 1;
	console.log(notaRandom);
	alert(notaRandom);

	

	if (notaRandom>8) 
		{
			alert("EXCELENTE");
	
		}else
			{

			if (notaRandom<4) 
			{
				alert("Vamos, la proxima se puede");
			
			}else

				{
					alert("APROBÓ");
				
				}


		}




	/*if (notaRandom>8) // No hay neceidad de poner entre 8 y 11 porque no me puede dar nunca 11
	{
		alert("EXCELENTE");
	}

	if (notaRandom<9 && notaRandom>3)  //ESTOY REQUIERE MUCHO RPOCESADOR PORQUE EL USO DE MUCHOS IF ESTA MAL
	{
		alert("APROBÓ");
	}
	if (notaRandom<4) //No es necesario poner entre 4 y 0 porque nunca me puede dar 0
	{
		alert("Vamos, la proxima se puede");*/

	}

}//FIN DE LA FUNCIÓN