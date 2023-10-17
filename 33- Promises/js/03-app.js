const aplicarDescuento = new Promise( (resolve, reject) => {

    const descuento = true

    if(descuento){
        resolve('Descuento Aplicado')
    } else {
        reject('No se pudo aplicar')
    }
})

aplicarDescuento
    .then(resultado => descuento(resultado)
    )
    // Si el promise falla
    .catch(error => console.log(error)
    )

// Hay 3 valores posibles
// fullfilled - El promise se cumplió
// rejected - El promise no se cumplió

function descuento(mensaje){
    console.log(mensaje)
}