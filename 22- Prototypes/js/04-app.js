// Object Constructor
function Cliente(nombre, saldo) {
    this.nombre = nombre
    this.saldo = saldo
}

// Agrega mas funciones
Cliente.prototype.tipoCliente = function(){
    let tipo

    if(this.saldo > 10000){
        tipo = 'Gold'
    } else if (this.saldo > 5000){
        tipo = 'Platinum'
    } else {
        tipo = 'Normal'
    }
    return tipo
}

Cliente.prototype.nombreClienteSaldo = function(){
    // Se puede hacer referencias a otros prototype
    return `Nombre ${this.nombre}, Saldo: ${this.saldo}, Tipo Cliente: ${this.tipoCliente()}`
}

Cliente.prototype.retiraSaldo = function(retira){
    this.saldo -= retira
}


function Persona(nombre, saldo, telefono){
    // Heredamos del constructor Cliente
    Cliente.call(this, nombre, saldo)
    this.telefono = telefono
}

// Pasamos todo el prototype de Cliente a Persona
Persona.prototype = Object.create(Cliente.prototype)

// Muestra el constructor
Persona.prototype.constructor = Cliente

// Instanciar persona
const victor = new Persona('Victor', 5000, '6413144845')
console.log(victor)
console.log(victor.nombreClienteSaldo())

Persona.prototype.mostrarTelefono = function(){
    return `El teléfono de esta persona es ${this.telefono}`
}

console.log(victor.mostrarTelefono())