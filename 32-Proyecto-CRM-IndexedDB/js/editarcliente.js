(function() {

    let DB
    let idCliente

    // Selectores de inputs
    const nombreInput = document.querySelector('#nombre')
    const emailInput = document.querySelector('#email')
    const telefonoInput = document.querySelector('#telefono')
    const empresaInput = document.querySelector('#empresa')

    const formulario = document.querySelector('#formulario')

    document.addEventListener('DOMContentLoaded', () => 
    {
        conectarDB()

        // Actualiza el registro al editar los datos de un cliente
        formulario.addEventListener('submit', actualizarCliente)


        // Verificar el ID de la URL
        const parametrosURL = new URLSearchParams(window.location.search)
        idCliente = parametrosURL.get('id')

        if(idCliente){
            setTimeout(() =>
            {
                obtenerCliente(idCliente)
            },1000)
        }
    })

    function actualizarCliente(e){
        e.preventDefault();
        
        if(nombreInput.value === '' || emailInput.value === '' || telefonoInput === '' || empresaInput.value === '')
        {
            imprimirAlerta('Todos los campos son obligatorios', 'error')
            return
        }

        // Si pasa la validación se actualiza el cliente
        const clienteActualizado = {
            nombre: nombreInput.value,
            email: emailInput.value,
            telefono: telefonoInput.value,
            empresa: empresaInput.value,
            // Le pongo Number porque al actualizar el id viene en String y se necesita en Int
            id: Number(idCliente)
        }

        const transaction = DB.transaction(['crm'], 'readwrite')
        const objectStore = transaction.objectStore('crm')

        objectStore.put(clienteActualizado)

        transaction.oncomplete = function(){
            imprimirAlerta('Editado Correctamente')

            setTimeout(() => {
                window.location.href = 'index.html'
            }, 3000)
        }

        transaction.onerror = function(){
            imprimirAlerta('Hubo un error', 'error')
        }
    }

    function obtenerCliente(id){
        const transaction = DB.transaction(['crm'], 'readwrite')
        const objectStore = transaction.objectStore('crm')

        const cliente = objectStore.openCursor()
        cliente.onsuccess = function(e){
            const cursor = e.target.result

            // Iteramos por medio de cursores
            if(cursor){
                // El que sea igual lo extraemos
                if(cursor.value.id === Number(id)){
                    llenarFormulario(cursor.value)
                }
                cursor.continue()
            }
        }
    }

    function llenarFormulario(datosCliente){
        const { nombre, email, telefono, empresa } = datosCliente

        nombreInput.value = nombre
        emailInput.value = email
        telefonoInput.value = telefono
        empresaInput.value = empresa

    }

    function conectarDB()
    {
        const abrirConexion = window.indexedDB.open('crm', 1)

        abrirConexion.onerror = function(){
            console.log('Hubo un error')
        }

        abrirConexion.onsuccess = function(){
            DB = abrirConexion.result
        }
    }
})()