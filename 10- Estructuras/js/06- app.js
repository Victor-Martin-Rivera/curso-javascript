const usuario = false;
const puedePagar = false;

// Cumplir 2 o más condiciones
if(usuario && puedePagar) {
    console.log('Si puedes comprar')
} else if(!puedePagar && !usuario) {
    console.log('No no puedes comprar')
} else if(!usuario) {
    console.log('Inicia Sesión o crea una cuenta')
} else if(!puedePagar) {
    console.log('Fondos Insuficientes')
}