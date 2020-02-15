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
	}
	else
	{
		if (notaRandom<4) 
		{
			alert("Vamos, la proxima se puede");
	
		}
		else
		{
			alert("APROBÓ");  		//EN ESTE ELSE NO LE PONGO CONDICION PORQUE ES POR DESCARTE, ENTRARIAN LOS NUMEROS QUE NO ENTRAN EN LOS ANTERIORES, NO HAY QUE ACLARA HASTA QUE NUMERO ABARCA PORQUE EN ESTE CASO SOLO ES DEL 1 AL 10 EN EL PRIMERO ESTAN 9 Y 10, EN EL SEGUNDO ESTAN DEL 3 AL 1 (incluidos) , Y LOS QUE FALTAN QUE SERIAN 4,5,6,7 y 8 ESTAN EN EL ULTIMO.
		
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



   // CASO CON SWITCH

   switch(notaRandom)

   case 1:
   case 2:
   case 3:
   		alert("Vamos, la proxima se puede");
   		break;
   case 9:
   case 10:
   		alert("EXCELENTE");
   		break;
   default:
    	alert("APROBÓ");





}//FIN DE LA FUNCIÓN



			