function examen(name, lastname, nickname) {
    var fullName = name + ' ' + lastname;
    console.log("Mi nombre es: " + fullName + ", pero prefiero que me digan " + nickname);
}

examen("Maria", "Velez", "MV");

function miFuncion(name, lastname, nickname){
    var fullName = name + ' ' + lastname;
    return "Mi nombre es: " + fullName + ", pero prefiero que me digan " + nickname;
}

console.log(miFuncion("Mario", "Pinto", "pinto"));

function oneElemento(coleccion) {
    return coleccion[0];
}

console.log(oneElemento([25, 36, 47, 58]));

function allElementos(coleccion) {
    let num = coleccion.length;
    for (let i = 0; i < num; i++) {
        console.log("Elemento de la posicion:" + i + " = " + coleccion[i]);      
    }    
}
allElementos([25, 36, 47, 58]);

function allObject(coleccion) {
    Object.values(coleccion).forEach((elem) => {
        console.log(elem);
    })    
}

let persona = {
    nombre: 'Olga',
    apellido: 'Ortega',
    edad: 28
}

allObject(persona);