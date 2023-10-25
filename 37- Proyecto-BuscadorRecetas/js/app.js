function iniciarApp(){

    const selectCategorias = document.querySelector('#categorias')
    const resultado = document.querySelector('#resultado')
    const modal = new bootstrap.Modal('#modal', {})

    selectCategorias.addEventListener('change', seleccionarCategoria)

    obtenerCategorias()

    function obtenerCategorias(){
        const url = 'https://www.themealdb.com/api/json/v1/1/categories.php'
        fetch(url)
            .then( respuesta => respuesta.json())
            .then( resultado => mostrarCategorias(resultado.categories))
    }

    function mostrarCategorias(categorias = []){
        categorias.forEach( categoria => {

            const { strCategory } = categoria
            const option = document.createElement('OPTION');
            option.value = strCategory
            option.textContent = strCategory
            selectCategorias.appendChild(option) 
           
        })
    }

    function seleccionarCategoria(e){
        const categoria = e.target.value
        const url = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${categoria}`
        fetch(url)
            .then( respuesta => respuesta.json())
            .then( resultado => mostrarRecetas(resultado.meals))
    }

    function mostrarRecetas(recetas = []){
        
        // Limpia el HTML previo y carga nuevas recetas del select
        limpiarHTML(resultado)

        const heading = document.createElement('h2')
        heading.classList.add('text-center', 'text-black', 'my-5')
        heading.textContent = recetas.length ? 'Resultados' : 'No hay Resultados'
        resultado.appendChild(heading)

        // Iterar en los resultados
        recetas.forEach( receta => {
            const { idMeal, strMeal, strMealThumb } = receta

            const recetaContenedor = document.createElement('DIV')
            // Se mostrará en columnas
            recetaContenedor.classList.add('col-md-4')
            
            const recetaCard = document.createElement('DIV')
            recetaCard.classList.add('card', 'mb-4')

            const recetaImagen = document.createElement('IMG')
            recetaImagen.classList.add('card-img-top')
            recetaImagen.alt = `Imagen de la Receta ${strMeal}`
            recetaImagen.src = strMealThumb

            const recetaCardBody = document.createElement('div')
            recetaCardBody.classList.add('card-body')

            const recetaHeading = document.createElement('h3')
            recetaHeading.classList.add('card-title', 'mb-3')
            recetaHeading.textContent = strMeal

            const recetaButton = document.createElement('button')
            recetaButton.classList.add('btn', 'btn-danger', 'w-100')
            recetaButton.textContent = 'Ver Receta'
            // recetaButton.dataset.bsTarget = '#modal'
            // recetaButton.dataset.bsToggle = 'modal'
            recetaButton.onclick = function(){
                seleccionarReceta(idMeal)
            }


            // Inyectar en el codigo HTML
            recetaCardBody.appendChild(recetaHeading)
            recetaCardBody.appendChild(recetaButton)

            recetaCard.appendChild(recetaImagen)
            recetaCard.appendChild(recetaCardBody)

            recetaContenedor.appendChild(recetaCard)
            resultado.appendChild(recetaContenedor)
        })
    }

    function seleccionarReceta(id){
        const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
        fetch(url)
            .then(respuesta => respuesta.json())
            .then(resultado => mostrarRecetaModal(resultado.meals[0]))
    }

    function mostrarRecetaModal(receta){
        
        const { idMeal, strInstructions, strMeal, strMealThumb} = receta
        
        // Añadir contenido al modal
        const modalTitle = document.querySelector('.modal .modal-title')
        const modalBody = document.querySelector('.modal .modal-body')

        modalTitle.textContent = strMeal
        modalBody.innerHTML = `
            <img class=img-fluid" src="${strMealThumb}" alt="Receta ${strMeal}"/>
            <h3 class="my-3">Instrucciones</h3>
            <p>${strInstructions}</p>
        `

        // Muestra el modal
        modal.show()
    }

    function limpiarHTML(selector){
        while(selector.firstChild){
            selector.removeChild(selector.firstChild)
        }
    }
}

document.addEventListener('DOMContentLoaded', iniciarApp)