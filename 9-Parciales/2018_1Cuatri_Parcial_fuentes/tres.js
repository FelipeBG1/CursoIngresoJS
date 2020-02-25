function mostrar()
{

	var precio;
	var descuento;
	var precioFinal;

	precio=prompt("Ingrese el precio");
	precio=parseInt(precio);

	descuento=prompt("Ingrese el descuento deseado");
	descuento=parseInt(descuento);

	precioFinal= precio*descuento/100;


	document.getElementById('elPrecioFinal').value=precioFinal; //¡¡¡¡APRENDERRRR!!! para que parezca algo en cuadro de la página debo usar el id pero no poniendo la varible antes del document sino despues del value












}
