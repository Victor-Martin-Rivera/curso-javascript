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

// Instanciarlo
const angel = new Cliente('Angel', 6000)
console.log(angel.tipoCliente())
console.log(angel.nombreClienteSaldo())

angel.retiraSaldo(1000)
console.log(angel.nombreClienteSaldo())

console.log(angel)
