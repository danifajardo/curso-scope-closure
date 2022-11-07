// variables

var a; // declarando 
var b = 'b'; // declarando y asignando al mismo tiempo 
b = 'bb'; //reasignación
var a = 'aa'; // redeclaración

//Scope global

var fruta = 'Manzana'; // global

function leerFruta() {
    console.log(fruta);
}

leerFruta();

function mostrarPais(){
    pais = 'Colombia'; //como no se declara (var,let o const) es global
    console.log(pais);
};

mostrarPais();
console.log(pais); //podemos acceder a la variable pais fuera de la función