// Objeto
const reproductor = {
    reproducir: function(id) {
        console.log(`Reproduciendo canción con el id ${id}`)
    },
    pausar: function() {
        console.log('Pausando...')
    },
    borrar: function(id) {
        console.log(`Borrando canción... ${id}`)
    },
    crearPlayList: function(nombre) {
        console.log(`Creando la playlist de ${nombre}`)
    },
    reproducirPlayList: function(nombre) {
        console.log(`Reproduciendo la playlist ${nombre}`)
    }
}

reproductor.reproducir(30);
reproductor.reproducir(20);
reproductor.pausar();

reproductor.borrar(30);
reproductor.crearPlayList('Heavy Metal');
reproductor.crearPlayList('Rock 90s');
reproductor.reproducirPlayList('Pop');