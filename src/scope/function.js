//declaramos una función con una lógica muy básica

function saludo(){
    let nombreUsuario = 'Ana';
    console.log(nombreUsuario);
    if (nombreUsuario === 'Ana'){
        console.log(`Hola ${nombreUsuario}!`);
    }
}

saludo();
console.log(nombreUsuario); //trato de acceder a la variable