var objeto = {};

var miAuto = {
    marca: "Nissan",
    modelo: "March",
    annio: 2020,
    detallesAuto: function() {
        console.log('Auto ${this.modelo} ${this.annio}');
    }
}

//Dentro de un objeto pueden haber varios atributos del objeto.
//Entre esos atributos puede estar una funcion.
//la forma de acceder a un atributo es la funcion.propiedad y si es una funcion usar ().
//ejemplo miAuto.marca  o miAuto.detallesAuto()

//Objetos: Funciones Contructoras

function auto(marca, modelo, annio) {
    this.marca = marca;
    this.modelo = modelo;
    this.annio = annio
}

var autoNuevo = new auto("Tesla", "Model 3", 2020);

//Métodos de recorridos de Arrays
var articulos = [
    { nombre: 'Bicicleta', costo: 3000 },
    { nombre: 'TV', costo: 2500 },
    { nombre: 'Libro', costo: 320 },
    { nombre: 'Celular', costo: 10000 },
    { nombre: 'laptop', costo: 20000 },
    { nombre: 'teclado', costo: 500 },
    { nombre: 'audifonos', costo: 1700 }
]

// Metodo Filter  
/* Válida si es un true o false para poder meterlos al nuevo array, 
éste método no modifica el array original */

var articulosFiltrados = articulos.filter(function(articulo){
    return articulo.costo <= 500  /* Menor o igual a 500 */ 
});

console.log(articulosFiltrados);

 // Metodo Map
 /*Mapea alguna propiedad del arreglo y la lleva 
 a otro array nuevo, ejemplo la propiedad nombre de todos*/

 var nombreArticulos = articulos.map(function(articulo){
    return articulo.nombre  
});

console.log(nombreArticulos);

 // Metodo Find
 /* De igual forma, con este método se valida un true o false 
 para encontrar un elemento y si está lo regresa y si no, no pasa nada */

var encuentraArticulos = articulos.find(function(articulo){
    return articulo.nombre === 'laptop';
});

console.log(encuentraArticulos);

// Metodo forEach
/*Para cada elemento devuelve alguna propiedad que se requiera*/

articulos.forEach(function(articulo){
    console.log(articulo.nombre);
});

// Metodo Some
/* Este método nos regresa un false o un true para validar 
si hay o no artículos que cumplan la validación */

var articulosBaratos = articulos.some(function(articulo){
    return articulo.costo <= 700;
});

console.log(articulosBaratos); 

// Metodo Every
/* Este método valida que todos los elementos en el array cumplan 
con la validación que ponemos, y al final nos regresa un true o un false */

var articulosBaratos = articulos.every(function(articulo){
    return articulo.costo <= 700;
});

console.log(articulosBaratos);

//   Metodo Reduce
/* Este método corre una función en cada elemento del array, para comenzar a sumar los costos de cada elemento. */

var costoTotal = articulos.reduce(function(totalActual, articulo){
    return articulo.costo + totalActual;
}, 0); // El 0 será la cantidad inicial con la que comenzará el totalActual

console.log(costoTotal); 

//   Metodo Includes

var numeros = [1, 2, 3, 4, 5, 6];

var incluyeNumero = numeros.includes(2); 

console.log(incluyeNumero);

//Estudiar los siguientes metodos
/*
metodo .push() permite agregar uno o más elementos al final de un array
metodo .shift() eliminar el primer elemento de un array, es decir, el que esté en el índice 0.
metodo .pop() eliminará el último elemento de un array, indice n */

/* Un objeto es una colección de propiedades, y una propiedad es una 
asociación de key (nombre, o clave) y valores.*/

var objecto = {}; // Object Literal Syntax 

var miAuto = {
    marca: "Toyota",  // key - value 
    modelo: "Corolla",
    annio: 2020,
    detallesDelAuto: function() {   // Metodo de un objeto (una función dentro de un objeto)
      return `Auto ${this.modelo} ${this.annio}`;
  }
};

miAuto.annio 
miAuto.modelo 

miAuto.detallesDelAuto(); 


// Función constructora 

function auto(marca, modelo, annio) {  // Creas una función con los parametros que va a recibir, 
    this.marca = marca;   // Utilizamos el "this" para asignar valores a las propiedades del objeto 
    this.modelo = modelo;
    this.annio = annio;
}

var newAuto = new auto("Tesla", "Model 3", 2020);
