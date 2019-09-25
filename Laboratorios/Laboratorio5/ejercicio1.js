//Realice una función que reciba un arreglo como parámetro y liste los tipos de datos de sus elementos y cuantos de cada tipo. 

function TipodeDato(arr){

    for(i=0;i<=arr.length;i++){
        console.log(typeof arr[i]);
    }

}

TipodeDato([4, "hola", undefined])