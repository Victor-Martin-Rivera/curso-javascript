// Object Literal
const cliente = {
    nombre: 'Juan',
    saldo: 500
}

console.log(cliente)

// Object Constructor
function Cliente(nombre, saldo) {
    this.nombre = nombre
    this.saldo = saldo
}

// Instancia del objeto
const objeto = new Cliente('Victor', 500)

console.log(objeto)