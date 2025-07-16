// Clasificación de Frutas

// Arreglo llamado frutas con varios tipos de frutas
let frutas = ['manzana','mandarina','kiwi','manzana','banana','durazno','mandarina'];

// Objeto para almacenar la cantidad de cada tipo de fruta
let cantidadFrutas = {};

// Ciclo for para contar las frutas
for (let i = 0; i < frutas.length; i++){
    let tipoFruta = frutas[i];
    if (cantidadFrutas[tipoFruta]){
        cantidadFrutas[tipoFruta] = cantidadFrutas[tipoFruta] + 1;
    } else {
        cantidadFrutas[tipoFruta] = 1;
    }
}

console.log("Cantidad de cada tipo de fruta: ")
for (let tipo in cantidadFrutas){
    console.log(tipo +": "+ cantidadFrutas[tipo])
}

// Clasificación de Frutas

// Arreglo llamado frutas con varios tipos de frutas
let frutas2 = ['manzana','mandarina','kiwi','manzana','banana','durazno','mandarina'];

// Objeto para almacenar la cantidad de cada tipo de fruta
let cantidadFrutas2 = {};

// Contador
i = 0;

// Ciclo while para contar las frutas
while (i < frutas.length){
    let tipoFruta2 = frutas2[i];
    if (cantidadFrutas2[tipoFruta2]){
        cantidadFrutas2[tipoFruta2] = cantidadFrutas2[tipoFruta2] + 1;
    } else {
        cantidadFrutas2[tipoFruta2] = 1;
    }
    i++;
}

console.log("Cantidad de cada tipo de fruta: ")
for (let tipo2 in cantidadFrutas2){
    console.log(tipo2 +": "+ cantidadFrutas2[tipo2])
}