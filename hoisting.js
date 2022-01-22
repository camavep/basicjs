var miVariable;
miVariable = "Inicializar variable";

//hoisting - primero se llama una variable que despues se declara
//sucede que al no tener la variable creada e inicializada, se crea con undefined
//tambien sucede con funciones, cuando invocan variables que no esten declaradas
console.log(newVariable);
var newVariable = "contenido de la variable";

hey();
function hey() {
    console.log("hola " + nombre);
}

var nombre = "name";

/* Hoisting es cuando las declaraciones de variables y 
funciones se procesan antes de ejecutar cualquier código, al momento de que 
se genere el hosting, las funciones se declarán primero, y despues las variables.*/


// Qué resultado esperas que nos aparezca si corremos este ejemplo? "undefined"
console.log(miNombre);

var miNombre = "Diego";

// Lo que sucede con el hoisting

var miNombre = undefined;

console.log(miNombre + "soy hoisting");

miNombre = "Diego";


// ===  Hoisting con funcionts  ===

hey();

function hey() {
    console.log('Hola ' + miNombre);
};

var miNombre = 'Diego';

// Lo que sucede con hoisting 

function hey() {  //La función se declara hasta arriba, y después se declaran las variables.
    console.log('Hola ' + miNombre);
};

var miNombre;

hey();

miNombre = 'Diego';