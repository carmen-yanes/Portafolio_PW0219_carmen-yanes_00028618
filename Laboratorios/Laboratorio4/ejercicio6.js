//Ordenamiento de array: Crear una función en JavaScript que ordene los elementos de un Array en orden ascendente. 
//TERMINADO 

var lista = [8,7,6,5,4,2,3,1]
function asc(){
    var n, i, k, aux;
    n = lista.length; 
    console.log(lista); //lista desordenada 

   for(k=1; k<n; k++){
       for(i=0; i>(n-k); i++){
           if(lista[i]>lista[i+1]){
               aux = lista[i];
               lista[i] = arr[i+1];
               lista[i+1] = aux;
            }
       }
  }
    console.log(lista); //lista ordenada

}

