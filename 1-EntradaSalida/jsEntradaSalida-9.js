/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
	var sueldo;
	var porcentaje;
	var aumento;
	var resultadofinal;

	porcentaje=10

	sueldo=document.getElementById('sueldo').value;
	sueldo=parseInt(sueldo);

	

    aumento= sueldo*porcentaje/100
    resultadofinal= sueldo + aumento

    resultadofinal=document.getElementById('resultado').value=resultadofinal;
	resultadofinal=parseInt(resultadofinal).value;

    



    

	
}
