
// MAPS
// Listas ordenadas en llave - valor, donde el tipo y el valor pueden ser cualquier tipo, a diferencia de un objeto puede tener la llave de cualquier tipo de dato...

// y en cuanto a performance los maps tienen mejor performance que los objetos, son especialmente diseñados para agregar o quitar elementos así como recorrer, también cuando son muy grandes tienen mejor performance que un objeto

const cliente = new Map()

cliente.set('nombre', 'Karen')
cliente.set('tipo', 'Premium')
cliente.set('saldo', 3000)
// cliente.set([0], true)


console.log(cliente.size)

console.log(cliente.has('nombre2'))

console.log(cliente.get('nombre'))

cliente.delete('saldo')

console.log(cliente.has('saldo'))
console.log(cliente.get('saldo'))

cliente.clear()
console.log(cliente)

const paciente = new Map([['nombre', 'paciente'], ['cuarto', 'no definido'] ])

paciente.set('dr', 'Dr Asignado')
paciente.set('nombre', 'Juan')

console.log(paciente)

paciente.forEach((datos, index) => {
    console.log(index)
})