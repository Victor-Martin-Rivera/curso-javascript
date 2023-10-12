// El set puede almacenar cualquier tipo de valor no solamente objetos y se puede iterar con un forEach y los WeakSet no 

const weakSet = new WeakSet()

const cliente = {
    nombre: 'Victor',
    saldo: 100
}

// Los weakSet solo aceptan objetos, no valores
// const nombre = 'Victor'
// weakSet.add(nombre)

weakSet.add(cliente)

// console.log(weakSet.has(cliente2))
// weakSet.delete(cliente)


// console.log(cliente.size)

console.log(weakSet)