//Realice una función que reciba un arreglo de datos numéricos, y muestre la suma de todos los elementos del arreglo y su promedio.
//TERMINADO

function SumaYPromedio(arr) {
  var sumatoria = 0;

  for (i = 0; i < arr.length; i++) {
    sumatoria = sumatoria + arr[i];
  }
  console.log("La sumatoria de los numeros es: "+sumatoria);
  
  var promedio = sumatoria / arr.length;
  console.log("El promedio es de: " + promedio);
}

SumaYPromedio([1, 2, 3]);
