
// Es una funcion que retorna un Iterador.
// Se indican con un asterisco después de  la palabra function

// Un Generador es una funcion que retorna un iterador

function *crearGenerador(){
    yield 1
    yield 'Victor'
    yield 3+3
    yield true
}

// Acceder a los valores
// const iterador = crearGenerador()

// console.log(iterador)
// console.log(iterador.next().value)
// console.log(iterador.next())
// console.log(iterador.next().value)
// console.log(iterador.next())
// console.log(iterador.next())

// console.log(iterador)

// Generador para carrito de compras
function *generadorCarrito( carrito ){
    for(let i = 0; i < carrito.length; i++) {
        yield carrito[i]
    }
}

const carrito = ['Producto 1', 'Producto 2', 'Producto 3']

const iterador = generadorCarrito( carrito );

console.log(iterador.next())
console.log(iterador.next())
console.log(iterador.next())
console.log(iterador.next())
