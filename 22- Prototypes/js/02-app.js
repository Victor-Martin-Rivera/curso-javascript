// Object Constructor
function Cliente(nombre, saldo) {
    this.nombre = nombre
    this.saldo = saldo
}

// Instancia del Cliente
const objeto = new Cliente('Victor', 500)

function formatearCliente(cliente){
    const {nombre, saldo} = cliente
    return `El Cliente ${nombre} tiene un saldo de ${saldo}`
}

function formatearEmpresa(cliente){
    const {nombre, saldo, categoria} = cliente
    return `El Cliente ${nombre} tiene un saldo de ${saldo} y pertenece a la categoría ${categoria}`
}

console.log(formatearCliente(objeto))

function Empresa(nombre, saldo, categoria){
    this.nombre = nombre
    this.saldo = saldo
    this.categoria = categoria
}


const empresa = new Empresa('Codigo con Victor', 4000, 'Aprendiendo JavaScript')
console.log(formatearEmpresa(empresa))