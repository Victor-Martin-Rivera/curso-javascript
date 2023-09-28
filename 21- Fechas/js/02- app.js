const diaHoy = new Date()

moment.locale('es')

console.log( moment().format('DD-MM-YYYY HH:mm:ss'))

console.log(moment().format('LLLL', diaHoy))

// Una buena opción para en una página poner fechas de cuando expiran cupones
console.log(moment().add(3, 'days').calendar())