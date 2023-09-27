// Variables
const resultado = document.querySelector('#resultado')
const year = document.querySelector('#year')

const max = new Date().getFullYear()
const min = max - 10



// Eventos
document.addEventListener('DOMContentLoaded', () => {
    // Una vez que cargue el HTML mostramos la funcion
    mostrarAutos() // Muestra los uatos al cargar

    // Llena las opciones de años
    llenarSelect()
})

// Funciones
function mostrarAutos() {
    autos.forEach( auto => {
        const autoHTML = document.createElement('p')

        // Destructuring
        const { marca, modelo, year, puertas, transmision, precio, color} = auto
        autoHTML.textContent = `
        ${marca} ${modelo} - ${year} - ${puertas} Puertas - Tranmisión: ${transmision} - Precio: ${precio} - Color: ${color}`

        // Insertar en el HTML
        resultado.appendChild(autoHTML)
    })
}

// Genera los años del select
function llenarSelect(){
    
    for(let i = max; i > min; i--){
        const opcion = document.createElement('option')
        opcion.value = i
        opcion.textContent = i
        year.appendChild(opcion) // Agrega las opciones del año al Select
    }
}