/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
	var primernumero; //se pone el punto y como para cerrar y en este caso para crear la variable
	var segundonumero;
	var resultadoDeLasuma;


    primernumero=document.getElementById('numeroUno').value;// entrada y tranformacion si es necesario
    primernumero=parseInt(primernumero);

    segundonumero=document.getElementById('numeroDos').value;
    segundonumero=parseInt(segundonumero);
    
    resultadoDeLasuma=primernumero+segundonumero// lo unico que hace es realizar la operación
    
    alert(resultadoDeLasuma);
    console.log(resultadoDeLasuma);
}

function restar()
{
	var primernumero; 
	var segundonumero;
	var reesultadoDeLaresta;

	primernumero=document.getElementById('numeroUno').value;
    primernumero=parseInt(primernumero);

    segundonumero=document.getElementById('numeroDos').value;
    segundonumero=parseInt(segundonumero);
    
    reesultadoDeLaresta=primernumero-segundonumero
   
    alert(reesultadoDeLaresta);
    console.log(resultadoDeLaresta);
	
}

function multiplicar()
{ 
	var primernumero; 
	var segundonumero;
	var resultadoDeLamultiplicacion;

	primernumero=document.getElementById('numeroUno').value;
    primernumero=parseInt(primernumero);

    segundonumero=document.getElementById('numeroDos').value;
    segundonumero=parseInt(segundonumero);
    
    resultadoDeLamultiplicacion=primernumero*segundonumero
    
    alert(resultadoDeLamultiplicacion);
	console.log(resultadoDeLamultiplicacion);
}

function dividir()
{
	var primernumero; 
	var segundonumero;
	var resultadoDeLadivision;

	primernumero=document.getElementById('numeroUno').value;
    primernumero=parseInt(primernumero);

    segundonumero=document.getElementById('numeroDos').value;
    segundonumero=parseInt(segundonumero);
    
    resultadoDeLadivision=primernumero/segundonumero
    
    alert(resultadoDeLadivision);
    console.log(resultadoDeLadivision);
}

