"use strict";

// Object literal
const producto = {
    nombre: "Monitor 20 Pulgadas",
    precio: 300,
    disponible: true
}

// Prohibe modificar las propiedades de un objeto
Object.freeze(producto);

//producto.disponible = false;
//producto.imagen = "imagen.jpg";

console.log(producto);
console.log(Object.isFrozen(producto));