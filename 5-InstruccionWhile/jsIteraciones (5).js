function mostrar()
{
	var sexo;
	
	sexo = prompt("ingrese f ó m ."); // PROMPT ES PARA QUE ME SALTE UN CUADRO EN PANTALLA EN EL CUAL ESCRIBIR, EN ESTE ASO EL CUADRO QUE VA A SALTAR ES UNO QUE DIGA "INGRESE F O M". PROMPT ES SOLO PARA ESO

	while(!(sexo=="f"|| sexo=="m"))
	{
		sexo = prompt("No corresponde a f o m, intente de nuevo");
		
	}

	document.getElementById('Sexo').value=sexo;








}//FIN DE LA FUNCIÓN