// Crea un objeto libro que contenga varias propiedades y un método para imprimir la información básica del libro

let libro = {
    titulo: "El Juego Infinito",
    autor: "Simon Sinek",
    anio: 2017,
    estado: "Disponible",
    describirLibro: function(){
        console.log(`Libro titulado "${this.titulo}", escrito por ${this.autor}, en el año ${this.anio}, el estado es ${this.estado}`)
    }
}

libro.describirLibro()

// Agregar una propiedad que contenga la lista de capítulos del libro y métodos que permitan agregar y eliminar capítulos
let libro1 = {
    titulo1: "Los lideres comen al final",
    autor1: "Simon Sinek",
    anio1: 2020,
    estado1: "Disponible",
    capitulos: [],
    describirLibros: function(){
        console.log(`Libro titulado "${this.titulo1}", escrito por ${this.autor1}, en el año ${this.anio1}, el estado es ${this.estado1}`)
    },
    // Método para agregar capitulos
    agregarCapitulo:
    function (tituloCapitulo){
        this.capitulos.push(tituloCapitulo);
        console.log(`Capitulo "${tituloCapitulo}" agregado`);
    },
    // Método para eliminar un capítulo
    eliminarCapitulo:
    function (capituloEliminado){
        let indice = this.capitulos.indexOf(capituloEliminado);
        if (indice !== -1){
            this.capitulos.splice(indice, 1);
            console.log(`Capitulo eliminado ${capituloEliminado}`);
        } else {
            console.log(`El capitulo ${capituloEliminado} no existe en la lista.`)
        }
    }
}
libro1.describirLibros()
libro1.agregarCapitulo("Introducción");
libro1.agregarCapitulo("Capitulo 1: Lider");
libro1.agregarCapitulo("Capitulo 2: Inspiración");
libro1.eliminarCapitulo("Capitulo 2: Inspiración");