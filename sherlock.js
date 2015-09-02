//Input Example

//_INPUT = "2\n3 9\n17 24";

//Expected Output
/*
2
0
*/

//Second Input Example (Remember to comment the first example in order
//and uncomment the next line in order test this case)

//_INPUT = "4\n1 8\n2 4\n10 13\n11 20";

//Expected Output
/*
2
1
0
1
*/

//----- Start your code here -------
/*solo se puede utilizar un rango con un número de un caracter y otro
de dos a la vez para que funcione correctamente */

_INPUT = "2\n3 9\n17 24";
_INPUT2= "4\n1 8\n2 4\n10 13\n11 20";

function raices(_INPUT) //funcion
{
	parts=_INPUT.split("\n"); /* Se separa el /n para encontrar el numero
	de casos */
	casos=parts[0]; //Se le asigna la parte 0 del arreglo al numero de casos
	console.log("El número de casos es: ", casos);
	caso=1; /*se utiliza posteriormente para imprimir el numero de caso de
	cada total de raices perfectas */
	for (var i = 1; i <= casos; i++) 
	{
		part=parts[i];
		numeros=part.split(" "); /*Se separa el espacio para encontrar los 
		numeros del rango */
		numero1=numeros[0] //Primer numero
		numero2=numeros[1]; //Segundo numero
		total=0; //Se inicializa la variable para el total de raices perfectas
		for (var y = numero1; y <= numero2; y++)
		{
			/* En este for se va a sacar la raiz de cada numero del rango
			para posteriormente comparar el numero sacado por la raiz cuadrada
			con el redondeo del mismo, si es igual a total se le suma 1 */
			raiz=Math.sqrt(y);
			if(raiz == Math.round(raiz))
			{
				total+=1;
			}
		}
		console.log("Total de raíces perfectas caso", caso,":", total)
		caso+=1; //Se le aumenta 1 a caso para la impresion del caso que sigue
	}
}

raices(_INPUT);
raices(_INPUT2);

