// const meses = ['Enero', 'Febrero', 'Marzo'];

// // Agregar al final del arreglo(Metodos de los arreglos)
// meses.push('Abril');
// meses.push('Mayo')

// console.table(meses);

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
carrito.push(producto2);
carrito.push(producto);

const producto3 = {
    nombre: 'Teclado',
    precio: 50
}

// Agrega al principio del arreglo
carrito.unshift(producto3);

console.table(carrito);