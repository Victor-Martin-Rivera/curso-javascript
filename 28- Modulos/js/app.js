import nuevaFuncion, { nombreCliente, ahorro, mostrarInformacion, tieneSaldo, Cliente } from './cliente.js'
// Importar empresa
import { Empresa } from './empresa.js'

nuevaFuncion()

console.log(nombreCliente)
console.log(ahorro)

console.log(mostrarInformacion(nombreCliente, ahorro))
tieneSaldo(ahorro)

// Instanciar una clase exportada
const cliente = new Cliente(nombreCliente, ahorro)
console.log(cliente.mostrarInformacion())

const empresa = new Empresa('Aprendiendo JS', 100, 'Online')
console.log(empresa.mostrarInformacion())