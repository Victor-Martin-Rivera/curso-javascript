const producto = 'Monitor 20 Pulgadas';

// .repeat - te va a permitir repetir una cadena de texto...

//Si le pasas un numero que no es entero se redondea
const texto = ' en promocion'.repeat(3);

console.log(texto);
console.log(`${producto} ${texto}`);

// Split, divide un String

const actividad = "Estoy aprendiendo JavaScript Moderno";
console.log(actividad.split(" "));

//Puede ayudar para mostrar un listado de categorias con recetas de cocina
const hobbies = 'Leer, caminar, escuchar música, ver anime';
console.log(hobbies.split(", "));

const tweet = "Aprendiendo JavaScript #JSModerno";
console.log(tweet.split('#'));