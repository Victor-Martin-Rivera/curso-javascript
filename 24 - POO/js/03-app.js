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

// Herencia
class Empresa extends Cliente {
    constructor(nombre, saldo, telefono, categoria){
        super( nombre, saldo )
        this.telefono = telefono
        this.categoria = categoria
    }

    mostrarInformacion(){
        return `Cliente: ${this.nombre}, Tu saldo es de: ${this.saldo}, Telefono: ${this.telefono}, Categoria: ${this.categoria}`
    }

    static bienvenida(){ // Reescribir un metodo
        return `Bienvenido al cajero de empresas`
    }
}

const victor = new Cliente('Victor', 400)
const empresa = new Empresa('Victor', 400, 63123894, 'Aprendiendo javascript en línea')
console.log(empresa)
console.log(empresa.mostrarInformacion())

console.log(Cliente.bienvenida())
console.log(Empresa.bienvenida())
