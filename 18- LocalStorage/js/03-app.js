// Eliminamos un elemento del localStorage(por medio de la key)
localStorage.removeItem('nombre')

// Actualizar un registro
const mesesArray = JSON.parse(localStorage.getItem('meses'))
console.log(mesesArray)
mesesArray.push('Nuevo Mes')
console.log(mesesArray)
localStorage.setItem('meses', JSON.stringify(mesesArray))

// Limpiar localStorage
localStorage.clear()