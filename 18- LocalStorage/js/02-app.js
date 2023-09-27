// Para obtener los datos es .getItem
const nombre = localStorage.getItem('nombre');
console.log(nombre)

// Obtener un Objeto
const productoJSON = localStorage.getItem('producto')
// Convierte String a un objeto
console.log(JSON.parse(productoJSON))

// Para arreglos
const meses = localStorage.getItem('meses')
const mesesArray = JSON.parse(meses)
console.log(mesesArray)