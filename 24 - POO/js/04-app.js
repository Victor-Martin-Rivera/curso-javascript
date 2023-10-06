// Class declaration
class Cliente {
    // Propiedad privada
    #nombre

    setNombre(nombre){
        this.#nombre = nombre
    }

    getNombre(){
        return this.#nombre
    }
}

const victor = new Cliente()
victor.setNombre('Victor')
console.log(victor.getNombre())
