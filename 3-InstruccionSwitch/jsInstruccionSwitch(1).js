function mostrar()
{
//tomo la edad  
var mesDelAño = document.getElementById('mes').value;

	/*switch(mesDelAño) 			//ESTA ES SIN USAR EL DEFAULT, FUNCIONA PERO ESTA MAL PROGRAMADA
	{
		case "Enero":
			alert("Que comiences bien el año!!!");
			break;
		case 2:
			break;	
			
		case "Marzo":			
			alert("A clases");
			break;
		case 4:
			break;
		case 5:
			break;
		case 6:
			break;
			

		case "Julio":
			alert("Se vienen las vacaciones!!!");
			break;
		case 8:
			break;
		case 9:
			break;
		case 10:
			break;
		case 11:
			break;
			

		case "Diciembre":
			alert("Felices fiestas!!!");
			break;

	}*/



switch(mesDelAño) //CON EL DEFAULT Y FUNCIONA, ESTA BIEN PROGRAMADO. EL DEFAULT NO ES NECESARIO PONERLO VARIAS VECES PORQUE EN DEFAULT ENTRA TODO LO QUE NO ENTRA EN LOS DEMAS CASE, EN ESTE CASO; LOS DEMAS MESES QUE NO SEAN NI ENERO, NI MARZO, NI JULIO, NI DICIEMBRE.
	{
		case "Enero":
			alert("Que comiences bien el año!!!");
			break;
		
		case "Marzo":			
			alert("A clases");
			break;
		
		case "Julio":
			alert("se vienen las vacaciones!!!");
			break;
		
		case "Diciembre":
			alert("Felices fiestas!!!");
			break;

		default:
			break;
	}











}//FIN DE LA FUNCIÓN