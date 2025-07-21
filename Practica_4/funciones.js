let librosLeidos = []

function agregarLibro(titulo){
    librosLeidos.push(titulo);
}

function mostrarLibrosLeidos(){
    for (let i = 0; i < librosLeidos.length; i++){
        console.log(librosLeidos[i])
    }
}

agregarLibro("El juego infinito");
agregarLibro("Start with Why");
agregarLibro("Poder sin límites")
mostrarLibrosLeidos();
