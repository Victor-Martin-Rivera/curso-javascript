const puntaje = 1000;
const puntaje2= "1000";

console.log(typeof puntaje)
console.log(typeof puntaje2)
// if(puntaje != 1000) { // != diferente == igual a
//     console.log('Si es igual...')    
// }

if(puntaje !== "1000") { // != diferente == igual a
    console.log('Si es diferente...')    
} else {
    console.log('No, no es diferente')
}

// == Operador que no es estricto
// ==== Operador Estricto (Debe tener el mismo valor y tipo de dato)