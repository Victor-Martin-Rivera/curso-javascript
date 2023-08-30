"use strict";

// Object literal
const producto = {
    nombre: "Monitor 20 Pulgadas",
    precio: 300,
    disponible: true
}

// seal-> no se puede agregar ni eliminar propiedades pero si se pueden modificar
Object.seal(producto);

// producto.disponible = false;
// producto.imagen = "imagen.jpg";

console.log(producto);
console.log(Object.isSealed(producto));