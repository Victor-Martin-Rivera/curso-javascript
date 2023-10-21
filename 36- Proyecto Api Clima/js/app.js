
const container = document.querySelector('.container')
const resultado = document.querySelector('#resultado')
const formulario = document.querySelector('#formulario')

window.addEventListener('load', () => {
  formulario.addEventListener('submit', buscarClima)
})

function buscarClima(e){
  e.preventDefault();
  
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

  // El spinner aparecera cuando presiones el boton y luego carga la informacion
  
  Spinner() // Muestra un spinner de carga
  
  setTimeout(() => {
    fetch(url)
    .then( respuesta => respuesta.json())
    .then( datos => {
        limpiarHTML() // Limpiar el HTML previo
        if( datos.cod === '404') {
          mostrarError('Ciudad no encontrada')
          return
        }

        // Imprime la respuesta en el HTML
        mostrarClima(datos)
    })
  }, 1000);
}
  

function mostrarClima(datos){
  // Destructuring a un objeto
  const { name, main: { temp, temp_max, temp_min} } = datos

  const centigrados = Math.round(temp - 273.15);
  const max = Math.round(temp_max - 273.15);
  const min = Math.round(temp_min - 273.15);
 
  const nombreCiudad = document.createElement("p");
  nombreCiudad.textContent = `Clima en ${name}`;
  nombreCiudad.classList.add("text-2xl", "font-bold", "mb-2");
 
  const actual = document.createElement("p");
  actual.textContent = `${centigrados} °C`;
  actual.classList.add("font-bold", "text-6xl");
 
  const tempMaxima = document.createElement("p");
  tempMaxima.textContent = `Max: ${max} °C`;
  tempMaxima.classList.add("text-xl");
 
  const tempMinima = document.createElement("p");
  tempMinima.textContent = `Min: ${min} °C`;
  tempMinima.classList.add("text-xl");
 
  const resultadoDiv = document.createElement("div");
  resultadoDiv.classList.add("text-center", "text-white");
  resultadoDiv.appendChild(nombreCiudad);
  resultadoDiv.appendChild(actual);
  resultadoDiv.appendChild(tempMaxima);
  resultadoDiv.appendChild(tempMinima);
 
  resultado.appendChild(resultadoDiv);
}

function limpiarHTML(){
  while(resultado.firstChild){
    resultado.removeChild(resultado.firstChild)
  }
}

function Spinner(){
  
  limpiarHTML()

  const divSpiner = document.createElement('div')
  divSpiner.classList.add('sk-fading-circle')

  divSpiner.innerHTML = `
  <div class="sk-fading-circle">
  <div class="sk-circle1 sk-circle"></div>
  <div class="sk-circle2 sk-circle"></div>
  <div class="sk-circle3 sk-circle"></div>
  <div class="sk-circle4 sk-circle"></div>
  <div class="sk-circle5 sk-circle"></div>
  <div class="sk-circle6 sk-circle"></div>
  <div class="sk-circle7 sk-circle"></div>
  <div class="sk-circle8 sk-circle"></div>
  <div class="sk-circle9 sk-circle"></div>
  <div class="sk-circle10 sk-circle"></div>
  <div class="sk-circle11 sk-circle"></div>
  <div class="sk-circle12 sk-circle"></div>
  </div>
  `

  resultado.appendChild(divSpiner)
}