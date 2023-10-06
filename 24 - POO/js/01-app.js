// Class declaration
class Cliente {
    constructor(nombre, saldo) {
        this.nombre = nombre
        this.saldo = saldo
    }
}

const victor = new Cliente('Victor', 400)
console.log(victor)

// Class expression
const Cliente2 = class {
    constructor(nombre, saldo) {
        this.nombre = nombre
        this.saldo = saldo
    }
}

const cliente = new Cliente2('Victor', 500)
console.log(cliente)