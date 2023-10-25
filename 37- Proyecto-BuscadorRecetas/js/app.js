function iniciarApp(){

    const selectCategorias = document.querySelector('#categorias')
    const resultado = document.querySelector('#resultado')
    const modal = new bootstrap.Modal('#modal', {})

    if(selectCategorias){
        selectCategorias.addEventListener('change', seleccionarCategoria)
        obtenerCategorias()
    }
    const favoritosDiv = document.querySelector('.favoritos')
    if(favoritosDiv){
        obtenerFavoritos()
    }

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
            recetaImagen.alt = `Imagen de la Receta ${strMeal ?? receta.titulo}`
            // Si no encuentra la imagen en la api entonces revisa en LS
            recetaImagen.src = strMealThumb ?? receta.img

            const recetaCardBody = document.createElement('div')
            recetaCardBody.classList.add('card-body')

            const recetaHeading = document.createElement('h3')
            recetaHeading.classList.add('card-title', 'mb-3')
            recetaHeading.textContent = strMeal ?? receta.titulo

            const recetaButton = document.createElement('button')
            recetaButton.classList.add('btn', 'btn-danger', 'w-100')
            recetaButton.textContent = 'Ver Receta'
    
            recetaButton.onclick = function(){
                seleccionarReceta(idMeal ?? receta.id)
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
            <h3 class="my-3">Ingredientes y Cantidades</h3>
        `
        const listGroup = document.createElement('UL')
        listGroup.classList.add('list-group')
        // Mostrar cantidades e ingredientes
        for(let i = 1;  i<= 20; i++){
            if(receta[`strIngredient${i}`]){
                // Estos datos son mapeados de la API (con console.log(receta))
                const ingrediente = receta[`strIngredient${i}`]
                const cantidad = receta[`strMeasure${i}`]
                
                // Renderizar ingrediente y cantidad en el HTML
                const ingredienteLi = document.createElement('li')
                ingredienteLi.classList.add('list-group-item')
                ingredienteLi.textContent = `${ingrediente} - ${cantidad}`
            
                listGroup.appendChild(ingredienteLi)
            }
        }

        modalBody.appendChild(listGroup)

        const modalFooter = document.querySelector('.modal-footer')
        limpiarHTML(modalFooter)

        // Botones de cerrar y favorito
        const btnFavorito = document.createElement('button')
        btnFavorito.classList.add('btn', 'btn-danger', 'col')
        btnFavorito.textContent = existeStorage(idMeal) ? 'Eliminar Favorito' : 'Guardar Favorito'

        // localStorage
        btnFavorito.onclick = function () {

            if(existeStorage(idMeal)){
                eliminarFavorito(idMeal)
                btnFavorito.textContent = 'Guardar Favorito'
                mostrarAlerta('Eliminado Correctamente')
                return
            }

            agregarFavorito({
                id: idMeal,
                titulo: strMeal,
                img: strMealThumb
            })
            btnFavorito.textContent = 'Eliminar Favorito'
            mostrarAlerta('Agregado Correctamente')
        }

        const btnCerrarModal = document.createElement('button')
        btnCerrarModal.classList.add('btn', 'btn-secondary', 'col')
        btnCerrarModal.textContent = 'Cerrar'
        btnCerrarModal.onclick = function(){
            modal.hide()
        }

        modalFooter.appendChild(btnFavorito)
        modalFooter.appendChild(btnCerrarModal)

        // Muestra el modal
        modal.show()
    }

    function agregarFavorito(receta){
        const favoritos = JSON.parse(localStorage.getItem('favoritos')) ?? []
        localStorage.setItem('favoritos', JSON.stringify([...favoritos, receta]))
    }

    function eliminarFavorito(id){
        const favoritos = JSON.parse(localStorage.getItem('favoritos')) ?? []
        const nuevosFavoritos = favoritos.filter(favorito => favorito.id !== id)
        localStorage.setItem('favoritos', JSON.stringify(nuevosFavoritos))
    }

    // Función que evita elementos duplicados de localstorage
    function existeStorage(id){
        const favoritos = JSON.parse(localStorage.getItem('favoritos')) ?? []
        // .some itera sobre los elementos de un arreglo y retorna si al menos uno cumple con la condicion
        return favoritos.some(favorito => favorito.id === id)
    }

    function mostrarAlerta(mensaje){
        const toastDiv = document.querySelector('#toast')
        const toastBody = document.querySelector('.toast-body')
        const toast = new bootstrap.Toast(toastDiv)
        toastBody.textContent = mensaje

        toast.show()
    }

    function obtenerFavoritos(){
        const favoritos = JSON.parse(localStorage.getItem('favoritos')) ?? []
        if(favoritos.length){
            mostrarRecetas(favoritos)
            return
        }

        // Muestra si no hay favoritos
        const noFavoritos = document.createElement('p')
        noFavoritos.textContent = 'No hay Favoritos aún'
        noFavoritos.classList.add('fs-4', 'text-center', 'font-bold', 'mt-5')
        favoritosDiv.appendChild(noFavoritos)
    }

    function limpiarHTML(selector){
        while(selector.firstChild){
            selector.removeChild(selector.firstChild)
        }
    }
}

document.addEventListener('DOMContentLoaded', iniciarApp)