// var

var primerNombre; //declaración (undefined)
primerNombre = "Daniel"; //asignación (defined)
console.log(primerNombre); //llamada a la variable

var segundoNombre = "David"; //declaración y asignación
segundoNombre = "Felipe"; //reasignación
console.log(segundoNombre);

var appellido = "Rodriguez"; //declaración y asignación 
var appellido = "Fajardo";  //redeclaración y reasignación
console.log(appellido); 

// let 

let fruta = "Manzana"; //declaración y asignación
fruta = "Kiwi"; // reasignación
console.log(fruta);

//let fruta = "Banana"; // error let no deja redeclarar

// const 

const animal = "Perro"; // declaración y asignación 
// animal = "gato"; // error const no deja reasignar ni redeclarar
console.log(animal);

const arr = []; // declaración y asignación de un arreglo 
arr.push(1); // asi este declarada con const puedo hacer uso de lo métodos de los arreglos
arr.push(2); // a esto se le llama mutabilidad
console.log(arr); 

arr[0] = 0;
console.log(arr);
arr.pop();
console.log(arr);