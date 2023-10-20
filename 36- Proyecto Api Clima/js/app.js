
const container = document.querySelector('.container')
const resultado = document.querySelector('#resultado')
const formulario = document.querySelector('#formulario')

window.addEventListener('load', () => {
  formulario.addEventListener('submit', buscarClima)
})

function buscarClima(e){
  e.preventDefault();

  // console.log('Buscando el Clima')
  
  // Validar
  const ciudad = document.querySelector('#ciudad').value
  const pais = document.querySelector('#pais').value

  if(ciudad === '' || pais === ''){
    // Hubo un error
    mostrarError('Ambos campos son Obligatorios')

    return
  }

  // Consultar la API
  consultarAPI(ciudad, pais)
}

function mostrarError(mensaje){
  // Estilos de Tailwind
  const alerta = document.querySelector('.bg-red-100')
  
  // Si no hay una alerta entonces agregala(no se duplica)
  if(!alerta)
  {
    // Crear una alerta
    const alerta = document.createElement('div')
      
    alerta.classList.add('bg-red-100', 'border-red-400', 'text-red-700', 'px-4', 'py-3', 'rounded', 'max-w-md', 'mx-auto', 'mt-6', 'text-center')

    alerta.innerHTML = `
      <strong class="font-bold">Error!</strong>
      <span class="block">${mensaje}</span>
      `

      // Agregamos nuestra alerta al contenedor(HTML)
      container.appendChild(alerta)

      // La alerta desaparecera despues de 5 segundos
      setTimeout(() => {
        alerta.remove()
      }, 5000);
  }
}

function consultarAPI(ciudad, pais){

  const appID = 'e944b3d7689589345fd365d59f50eef4'

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${appID}`

  fetch(url)
    .then( respuesta => respuesta.json())
    .then( datos => {
      console.log(datos)
      if( datos.cod === '404') {
        mostrarError('Ciudad no encontrada')
      }
    })
}