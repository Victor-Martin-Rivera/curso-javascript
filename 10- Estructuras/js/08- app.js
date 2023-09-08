const autenticado = true;

// En el caso de un login
if (autenticado) {
    console.log('El usuario esta autenticado')
}

// En el caso de un videojuego
const puntaje = 450;

function revisarPuntaje(){
    if(puntaje > 400) {
        console.log('Excelente')
        return;
    }
    
    if(puntaje > 300 ) {
        console.log('Buen puntaje... Felicidades')
        return;
    }
}

revisarPuntaje();

