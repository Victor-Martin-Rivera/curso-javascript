// Agregar metodos a las clases

// Class declaration
class Cliente {
    constructor(nombre, saldo) {
        this.nombre = nombre
        this.saldo = saldo
    }

    mostrarInformacion(){
        return `Cliente: ${this.nombre}, Tu saldo es de: ${this.saldo}`
    }

    // Propiedades estaticas
    static bienvenida(){
        return `Bienvenido al cajero`
    }
}

const victor = new Cliente('Victor', 400)
console.log(victor.mostrarInformacion())
console.log(victor)

// Las propiedades estaticas se mandan a llamar directamente desde la clase
console.log(Cliente.bienvenida())

// Class expression
const Cliente2 = class {
    constructor(nombre, saldo) {
        this.nombre = nombre
        this.saldo = saldo
    }
    mostrarInformacion(){
        return `Cliente: ${this.nombre}, Tu saldo es de: ${this.saldo}`
    }
}

const cliente = new Cliente2('Victor', 500)
console.log(victor.mostrarInformacion())
console.log(cliente)