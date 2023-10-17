// reject es cuando el promise no se cumple
// result cuando el promise se cumple
// fullfill- Cuando se cumple
//pending - Cuando aun no se cumple pero no ha sido rechazado

const paises = []

const nuevoPais = pais => new Promise(resolve =>
    {
        setTimeout(() => {
            paises.push(pais)
            resolve(`Agregado: ${pais}`)
        }, 3000)
})

nuevoPais('Alemania')
// El parametro resultado es lo que se pasa en el resolve()
    .then( resultado => {
        console.log(resultado)
        console.log(paises)
        return nuevoPais('Francia')
    })
    .then( resultado => {
        console.log(resultado)
        console.log(paises)
        return nuevoPais('Inglaterra')
    })
    .then( resultado => {
        console.log(resultado)
    })