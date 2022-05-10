var buscar = document.querySelector('#buscartext');
var contenedor = document.querySelector("#contenedor");

class libro {
    constructor(nombre,autor,editorial,genero){
        this.nombre=nombre;
        this.autor=autor;
        this.editorial=editorial;
        this.genero=genero;
    }
    mostrarLibro = function (){
        return ("Nombre del libro: "+this.nombre +" Autor: "+ this.autor +" Editorial: "+ this.editorial+" Genero: "+ this.genero)
    }
}

// Instanciar Los {Libros}
var libro1 = new libro("El Economista Callejero", "axel kaiser","Ediciones El Mercurio","Economia")
var libro2 = new libro("Guia De Los Hongos Microscopicos", "maria muntañola","Omega ","Ciencias Agrarias Y De La Naturaleza")
var libro3 = new libro("Factotum (C)", "charles bukowski","Anagrama","Novela")
 
console.log(libro1.mostrarLibro())
console.log(libro2.mostrarLibro())
console.log(libro3.mostrarLibro())

// arreglo que contiene los {libros}
var libros = [libro1, libro2, libro3];

// Filtrar por autor
function filtrarPorAutor(){
    for(i = 0; i< libros.length; i++){
        if ( buscar.value == libros[i].autor){
            // Creamos el li del autor y se añade el autor
            let liAutor = document.createElement('li');
            liAutor.innerText = "Autor(a): "+libros[i].autor;
            // Creamos el li del los libros y se añade el nombre
            let liLibros = document.createElement('li');
            liLibros.innerText = "Sus libros: "+libros[i].nombre;
            // Colocamos los li al ul contenedor en el html
            contenedor.appendChild(liAutor)
            contenedor.appendChild(liLibros)

            // al buscar dejar el campo vacio y color verde si fue correcto
            buscar.value = "";
            buscar.style.backgroundColor="#77dd77"; 
        } 
    }
}

// Evento que llama a la funcion de filtrar por un autor
buscar.addEventListener("keyup", function(info){
    if(info.key == "Enter"){
        filtrarPorAutor()
    } 
});