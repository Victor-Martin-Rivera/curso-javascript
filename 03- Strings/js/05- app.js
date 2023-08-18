const producto = 'Monitor 20 Pulgadas';

console.log(producto);

//Reemplaza las palabras(Ayuda mucho asi te ahorras de modificar en la base de datos y lo hace dentro del codigo)
console.log(producto.replace('Pulgadas', '"'))
console.log(producto.replace('Monitor', 'Monitor Curvo'))

//Permite cortar una cadena de texto(Posicion 0 hasta el 10)
// console.log(producto.slice(0, 10));
console.log(producto.slice(2, 1))

// Alternativa a slice
console.log(producto.substring(0,10));
console.log(producto.substring(2, 1));

const usuario = "Victor";
console.log(usuario.substring(0,1))
//Corta la primer letra
console.log(usuario.charAt(0));