/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
	var resultado;
	var aumento;
	var porcentaje;
	var importe;

	porcentaje=10

	importe=document.getElementById('sueldo').value;
	importe=parseInt(sueldo);

    aumento= importe*porcentaje/100
    resultado= importe+aumento

    

	
}
