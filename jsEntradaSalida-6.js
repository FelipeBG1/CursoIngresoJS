/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{ 
	var primernumero; //creo las variables
    var segundonumero;
    var suma;
  
   


   primernumero=document.getElementById('numeroUno').value;// busca elementos del documento,en este caso,el id
   primernumero=parseInt(primernumero); // para que me transforme de literal a un numero


   segundonumero=document.getElementById('numeroDos').value;// 
   segundonumero=parseInt(segundonumero);

   suma=primernumero+segundonumero
   console.log(suma);//para que me muestre tanto este como el alert
   alert(suma);
   



}

