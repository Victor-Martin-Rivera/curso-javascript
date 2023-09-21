// Todos los eventos utilizan el método en el document de addEventListener, este registra un evento en especifico, como puede ser un click en un enlace o imagen, submit a un formulario, o cuando el usuario escribe...

// Uno que es muy común y utilizaras en todos tus proyectos es uno llamado DOMContentLoaded

console.log(1)
    document.addEventListener('DOMContentLoaded', () => {
        console.log(2);
    }) // Nota todos los eventos que hay disponibles
console.log(3);
