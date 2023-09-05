// Declaración de Funcion (Function Declaration)
sumar();
function sumar() {
    console.log( 2 + 2);
}
//JavaScript se ejecuta en 2 vueltas por eso puede leer la primera funcion

// Expresión de Función (Function Expression)
//No se declaró la funcion, solo es una variable
sumar2();
const sumar2 = function() {
    console.log( 3 + 3);
}
