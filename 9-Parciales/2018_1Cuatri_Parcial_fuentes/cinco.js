function mostrar()
{
	var planetas;

	planetas=prompt("Ingrese un planeta");


	switch(planetas)
	{
		case "mercurio":
		case "venus":
		case "marte":
			alert("Aca hace más calor");
			break;

		case "júpiter":
		case "saturno":
		case "neptuno":
		case "urano":
			alert("Aca hace más frío");
			break;		

		case "tierra":
			alert("Aca vivimos");
			break;

		default:
			alert("Error no es un planeta");
			break;
	}


}
