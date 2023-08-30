// Object Literal
const producto = {
    nombre: "Monitor 20 Pulgadas",
    precio: 300,
    disponible: true,
}

//Muestra las llaves del objeto que son nombre, precio y disponible
console.log( Object.keys(producto));

//Muestra solo los valores del objeto que son Monitor, 300 y true
console.log( Object.values(producto));

//Muestra todo el objeto
console.log(Object.entries(producto));