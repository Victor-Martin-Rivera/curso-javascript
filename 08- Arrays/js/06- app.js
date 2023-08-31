const carrito = [];

// Objeto
const producto = {
    nombre: "Monitor 32 Pulgadas",
    precio: 400
}

const producto2 = {
    nombre: "Celular",
    precio: 800
}

const producto3 = {
    nombre: 'Teclado',
    precio: 50
}

// Forma declarativa
resultado = [...carrito, producto];
resultado = [...resultado, producto2];

//Agrega al inicio del arreglo
resultado = [producto3, ...resultado];

console.table(resultado);