//ejercicio declaración de variables dentro de bloques 4
function frutas(){
    if(true){
        var fruta1 = "manzana"; //function scope
        let fruta2 = "kiwi"; //block scope
        const fruta3 = "pera"; //block scope
    }

    console.log(fruta1);
    console.log(fruta2);
    console.log(fruta3);
}

console.log(fruta1);
frutas();
