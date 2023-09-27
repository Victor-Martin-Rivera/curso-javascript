// Inspeccionar elemento -> Aplicación -> Almacenamiento Local
localStorage.setItem('nombre', 'Victor')

// sessionStorage solo se mantienen los datos mientras tienes la sesion
// sessionStorage.setItem('nombre', 'Victor')

// Objeto
const producto = {
    nombre: "Monitor 24 Pulgadas",
    precio: 300
}

// Convierte un objeto a un String(.stringify)
const productoString = JSON.stringify(producto)
// Para agregar datos se usa .setItem
localStorage.setItem('producto', productoString)


// Con arreglos
const meses = ['Enero', 'Febrero', 'Marzo', 'Abril']
localStorage.setItem('meses', JSON.stringify(meses))
