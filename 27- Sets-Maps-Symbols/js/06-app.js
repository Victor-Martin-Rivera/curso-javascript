// Iteradores
function crearIterador(carrito){

    let i = 0
    return {
        siguiente: () => {
            // Elementos que vamos a iterar
            const fin = (i >= carrito.length)
            // Si aun no llegamos al final del iterador sigue ejecutando
            const valor = !fin ? carrito[i++]: undefined

            return {
                fin,
                valor
            }
        }
    }
}

const carrito = ['Producto 1', 'Producto 2', 'Producto 3']

// Utilizar el iterador
const recorrerCarrito = crearIterador(carrito)

console.log(recorrerCarrito.siguiente())
console.log(recorrerCarrito.siguiente())
console.log(recorrerCarrito.siguiente())
console.log(recorrerCarrito.siguiente())
