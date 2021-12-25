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