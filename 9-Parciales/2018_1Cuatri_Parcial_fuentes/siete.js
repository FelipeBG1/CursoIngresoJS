function mostrar()
{
	var nota;
	var sexoMinimo;
	var	promedio;
	var contador;
	var suma;
	var notaMinima;
	var contadorVarones;


	promedio=0
	contadorVarones=0;
	contador=0; // SI PONGO EL CONTADOR ACA, EN EL IF LA CONDICION VA A SER contador==1, Y SI PPONGO EL CONTADOR ABAJO DE LOS IF VA contador==0
	suma=0;


	while(contador<5)
	{
		nota=prompt("Ingrese la nota deseada");
		nota=parseInt(nota);

		while(nota<0 && nota>10)
		{
			nota=prompt("Error solo notas del 0 al 10");
			nota=parseInt(nota);
		}

			sexoAlumno=prompt("Ingrese el sexo de la persona a la que le corresponda la nota anteriormente pedida, f o m");
	
		while(sexoAlumno!="f" && sexoAlumno!="m")
		{
			sexoAlumno=prompt("Ingrese el sexo de la persona a la que le corresponda la nota anteriormente pedida, f o m");
 		}

		
		if (contador==0) 
	 		{
				notaMinima=nota; //SE LEE DE DERCHA A IZQUIERDA EN ESTE CASO REEPLAZO notaMinima por el valor de nota
				sexoMinimo=sexoAlumno;
			}
			else
			{
				if (nota<notaMinima) 
				{
					notaMinima=nota;
					sexoMinimo=sexoAlumno
				}
			}

			if (nota>5 && sexoAlumno=="m") 
			{
				contadorVarones++;
			}

			suma=suma + nota;	
			contador++;
	}
	
	promedio=suma/contador;
	
	alert("El promedio de todos los alumnos es de : "+promedio);
	alert("La nota mínima es "+notaMinima+ " y el sexo de la persona es "+sexoMinimo);
	alert("La cantidad de varones que obtuvieron una nota mayor o igual a 6 es "+contadorVarones);
}













/*
function mostrar()
{
	//VARIABLES
	var nota1;
	var nota2;
	var nota3;
	var sexo;
	var suma;
	var supersuma;
	supersuma=0;
	var contador;
	contador=0;
	var valorMinimo;
	valorMinimo=20;
	var sexominimo;
	var promedio;
	var promediototal;
	promediototal=0;
	var contadorvarones;
	contadorvarones=0;
	var promediovarones;
	//VARIABLES Y WHILE
	while(contador<5)
	{
						nota1=prompt("ingrese nota 1");
						nota1=parseInt(nota1);
						while(!(nota1>-1 && nota1<11))
						{
							nota1=prompt("debe ingresar una nota entre 0 y 10");
							nota1=parseInt(nota1);		
						}
						nota2=prompt("ingrese nota 2");+
						nota2=parseInt(nota2);
						while(!(nota2>-1 && nota2<11))
						{
								nota2=prompt("debe ingresar una nota entre 0 y 10");
								nota2=parseInt(nota2);
						}
						nota3=prompt("ingrese nota 3");
						nota3=parseInt(nota3);
						while(!(nota3>-1&&nota3<11))
						{
							nota3=prompt("debe ingresar una nota entre 0 y 10");
							nota3=parseInt(nota3);
						}
						sexo=prompt("ingrese el sexo del alumno");
						while(!(sexo=='m'||sexo=='f'))
						{
							sexo=prompt("ingrese un sexo valido(con la letra m para masculino o la letra f para femenino)");
						}
						suma=nota1+nota2+nota3;
					
													
						//minimo PRIMERA VEZ     
						if (contador==0) 
						{
							if (nota1<nota2&&nota1<nota3) 
							{
									valorMinimo=nota1;
									sexominimo=sexo;
							}
							else
							{
									if (nota2<nota1&&nota2<nota3) 
									{
											valorMinimo=nota2;
											sexominimo=sexo;	
									}
									else
									{
											if (nota3<nota2&&nota3<nota1) 
											{		
													valorMinimo=nota3;
													sexominimo=sexo;
											}
									}	
							}				
						}
						else
						{
							
													 	 
						//maximo y minimo PRIMERA VEZ       
								if (nota1<valorMinimo&&nota1<nota2&&nota1<nota3) 
								{
										valorMinimo=nota1;
										sexominimo=sexo;
								}
								else
								{
										if (nota2<valorMinimo&&nota2<nota1&&nota2<nota3) 
										{
												valorMinimo=nota2;
												sexominimo=sexo;
										}
										else
										{
												if (nota3<valorMinimo&&nota3<nota1&&nota3<nota2) 
												{
														valorMinimo=nota3;
														sexominimo=sexo;
												}
												else
												{
														valorMinimo=valorMinimo;
														
												}	
										}
								}
								
									
						}
						//tomo el valor minimo y luego lo comparo con el proximo alumno	
						promediovarones=suma/3;
						promediovarones=parseInt(promediovarones);
						if (promediovarones>5 && sexo=='m') 
						{
							contadorvarones++;
						}
						promedio=suma/3;//promedio alumno1
						promediototal=promediototal+promedio;
						contador++;
	}
	promediototal=promediototal/contador
	alert("a.el promedio de todos los alumnos es de :"+promediototal);
	alert("b.el valor minimo es "+valorMinimo+" y el sexo de esa persona es "+sexominimo);
	alert("c.los HOMBRES MACHOS SUPERIORES son: "+contadorvarones);
	}
*/