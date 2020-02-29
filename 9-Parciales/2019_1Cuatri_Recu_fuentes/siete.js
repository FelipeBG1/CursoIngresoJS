function mostrar()
{
	var bolsaAlimentoKilos;
	var sabor;
	var contador;
	var sumaKilos;
	var masLiviano;
	var contadorCarne;
	var sumaKilosCarne;
	var saborMasLiviano;
	var promedioKilosTotales;
	var promedioCarne;
	

	contador=0;
	sumaKilos=0;
	sumaKilosCarne=0;
	contadorCarne=0;

	while(contador<10)
	{
		bolsaAlimentoKilos=prompt("Ingrese la cantidad de kilos de la bolsa");
		bolsaAlimentoKilos=parseInt(bolsaAlimentoKilos);

		while(bolsaAlimentoKilos<0 || bolsaAlimentoKilos>500)
		{
			bolsaAlimentoKilos=prompt("Error solo valores de 0 a 500");
			bolsaAlimentoKilos=parseInt(bolsaAlimentoKilos);
		}
	

		sabor=prompt("Ingrese el sabor del alimento que se encuentra en la bolsa");

		while(sabor!="carne" && sabor!="vegetales" && sabor!="pollo")
		{
			sabor=prompt("Error solo carne, vegetales o pollo como sabores");
		}


		if (contador==0) 
		{
			masLiviano=bolsaAlimentoKilos;
			saborMasLiviano=sabor;
		}
		else
		{
			if (bolsaAlimentoKilos<masLiviano) 
			{
				masLiviano=bolsaAlimentoKilos;
				saborMasLiviano=sabor;
			}
		}


		if (sabor=="carne") 
		{
			contadorCarne++;
			sumaKilosCarne=sumaKilosCarne+bolsaAlimentoKilos;
		}  

		contador++;
		sumaKilos=sumaKilos+bolsaAlimentoKilos;
		
	}


	promedioKilosTotales=sumaKilos/contador;
	promedioCarne=sumaKilosCarne/contadorCarne;

	alert("El promedio de los kilos totales es: "+promedioKilosTotales);
	alert("El alimento mas liviano es "+masLiviano+ " y su sabor es "+saborMasLiviano);
	alert("La cantidad de alimentos sabor carne es "+contadorCarne+ " y el promedio de kilos de sabor carne es "+promedioCarne);






}
