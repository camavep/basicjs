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