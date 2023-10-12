// Un set permite crear una lista de valores sin duplicados
const carrito = new Set()

carrito.add('Camisa')
carrito.add('Disco #1')
carrito.add('Disco #2')
carrito.add('Disco #3')

// No se agrega porque es un duplicado
carrito.add('Camisa')

// Elimina un elemento del set y si no esta marca un false en consola
console.log(carrito.delete('Guitarra'))

// Existe ese elemento en el set
// console.log(carrito.has('Camisa'))

// No existe ese elemento
// console.log(carrito.has('Guitarra'))

console.log(carrito.size)

// Iterar en los elementos del set
carrito.forEach( (producto, index, setPertenece) => {
    // console.log(producto)
    // console.log(index)
    // console.log(setPertenece)
})
// carrito.clear()

console.log(carrito)

// Del siguiente arreglo, eliminar los duplicados
const numeros = [10,20,30,40,50,10,20]

const noDuplicados = new Set(numeros)

console.log(noDuplicados)