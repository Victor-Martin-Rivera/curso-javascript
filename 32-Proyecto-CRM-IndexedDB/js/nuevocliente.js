(function(){
    let DB
    const formulario = document.querySelector('#formulario')

    document.addEventListener('DOMContentLoaded', () => {

        // Conectarme a la base de datos
        conectarDB()

        formulario.addEventListener('submit', validarCliente)
    })

    
    // Como es submit toma un evento(boton)
    function validarCliente(e){
        e.preventDefault();
        
        // Leer todos los input
        const nombre = document.querySelector('#nombre').value
        const email = document.querySelector('#email').value
        const telefono = document.querySelector('#telefono').value
        const empresa = document.querySelector('#empresa').value

        if(nombre === '' || email === '' || telefono === '' || empresa === ''){
            
            imprimirAlerta('Todos los campos son Obligatorios', 'error')
            return
        }

        // Crear un objeto con la información
        const cliente = {
            nombre,
            email,
            telefono,
            empresa,
        }

        cliente.id = Date.now()
        
        crearNuevoCliente(cliente)
    }

    // Pasa un evento porque se agrega un cliente nuevo
    function crearNuevoCliente(cliente){
        const transaction = DB.transaction(['crm'], 'readwrite')

        const objectStore = transaction.objectStore('crm')
        objectStore.add(cliente)

        transaction.onerror = function(){
            imprimirAlerta('Hubo un error', 'error')
        }

        transaction.oncomplete = function(){
            imprimirAlerta('El Cliente se agregó correctamente')
        
            // Despues de 3 segundos de agregar el cliente nos iremos a index.html
            setTimeout(() => {
                window.location.href = 'index.html'
            }, 3000)
        }
    }

    
})()