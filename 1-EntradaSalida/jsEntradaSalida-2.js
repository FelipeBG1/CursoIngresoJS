/*Debemos lograr tomar un nombre con 'prompt' 
y luego mostrarlo por 'alert' al presionar el botón  'mostrar'*/
function mostrar()
{
var nombre = prompt("Please enter your name",); //promt devuelve/regresa algo,tengo que asignar una variable. Ej:Nombre= al agregar esto le asigno una variable (si no tiene el igual esta mal programado, si quiero un mensaje uso alert)
console.log("su nombre es "+ nombre);	//poner en forma litaral por ejemplo "su nombre es con un espacio entre el es y las comillas porque sino sale el nombre junto al es" agregarle un mas y nombre (que es la variable que asigne antes, que era en forma literal Pease enter your name) los espacios entre el + y la variable, en este caso,nombre no influye en nada, los espacios que influyen son en la parte literal
}

