// Variables
const formulario = document.querySelector('#formulario')
const listaTweets = document.querySelector('#lista-tweets')
// Arreglo que almacena todos los tweets
let tweets = []

// Event Listeners

eventListeners()

function eventListeners(){
     // Cuando el usuario agrega un nuevo tweet 
     formulario.addEventListener('submit', agregarTweet)

     // Cuando el documento esta listo
     document.addEventListener('DOMContentLoaded', () => {
          tweets = JSON.parse( localStorage.getItem('tweets')) || []

          console.log(tweets)

          // Volvemos a llamar a crearHTML para mostrar el contenido de nuevo
          crearHTML()
     })
}



// Funciones
function agregarTweet(e){
     e.preventDefault();
     
     // TextArea donde el usuario escribe(.value para obtener el texto al presionar el boton de Agregar)
     const tweet = document.querySelector('#tweet').value

     // Validación..
     if(tweet === ''){
          mostrarError('El mensaje no puede estar vacio')
          
          return // Evita que se ejecuten mas lineas de codigo
     } 

     const tweetObj = {
          id: Date.now(),
          tweet
     }
     
     // Añadir al arreglo de Tweets para mostrar en el DOM
     tweets = [...tweets, tweetObj]
     
     // Una vez agregado vamos a crear el HTML
     crearHTML()

     // Reiniciar el formulario
     formulario.reset()
}

// Mostrar mensaje de error
function mostrarError(error){
     // Generar codigo HTML para el error
     const mensajeError = document.createElement('p')
     mensajeError.textContent = error
     // En la carpeta custom.css esta error
     mensajeError.classList.add('error')

     // Insertarlo en el contenido(en el div del HTML con id contenido)
     const contenido = document.querySelector('#contenido')
     contenido.appendChild(mensajeError)

     // Elimina la alerta después de 3 segundos
     setTimeout(() => {
          mensajeError.remove()
     }, 3000)
}

// Muestra un Listado de los twweets
function crearHTML(){

     limpiarHTML()

     if(tweets.length > 0){
          tweets.forEach( tweet => {
               // Agregar un boton de eliminar
               const btnEliminar = document.createElement('a')
               // En la carpeta custom.css esta borrar-tweet
               btnEliminar.classList.add('borrar-tweet')
               btnEliminar.innerText = 'X'

               // Añadir la función de eliminar
               btnEliminar.onclick = () => {
                    // Borrando por medio del id
                    borrarTweet(tweet.id)
               }

               // Crear el HTML
               const li = document.createElement('li');

               // Añadir el texto
               li.innerText = tweet.tweet

               // Asignar el botón
               li.appendChild(btnEliminar)

               // Insertarlo en el HTML
               listaTweets.appendChild(li)
          })
     } else {
          // Crear el HTML
          const vacio = document.createElement('p')
          vacio.classList.add('vacio')
          vacio.textContent = 'No hay Tweets Disponibles'

          // Insertarlo en el DOM
          listaTweets.appendChild(vacio)
          
     }

     sincronizarStorage()
}

// Agrega los tweets actuales a LocalStorage
function sincronizarStorage(){
     localStorage.setItem('tweets', JSON.stringify(tweets))
}

// Eliminar un Tweet
function borrarTweet(id){
     // Array Method para eliminar (.filter)
     tweets = tweets.filter( tweet => tweet.id !== id)

     // Volvemos a llamar a crearHTML para mostrar el contenido despues de borrar un tweet
     crearHTML()
}

// Limpiar el HTML para evitar duplicados al agregar Tweets
function limpiarHTML(){
     while(listaTweets.firstChild){
          listaTweets.removeChild(listaTweets.firstChild)
     }
}