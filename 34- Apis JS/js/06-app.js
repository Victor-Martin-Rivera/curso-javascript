// Este tiene un error en Opera GX

const salida = document.querySelector('#salida');
const microfono = document.querySelector('#microfono');
 
microfono.addEventListener('click', ejecutarSpeechAPI);
 
//perdir permiso al usuario
function ejecutarSpeechAPI() {
    const SpeechRecognition = webkitSpeechRecognition;
    const recognition = new SpeechRecognition();
 
    recognition.start();//aqui comenzamos
 
    recognition.onstart = function() {
        salida.classList.add('mostrar');
        salida.textContent = 'Escuchando...';
    };
 
    recognition.onspeechend = function() {
        salida.textContent = 'se dejo de grabar...';
        recognition.stop();
    };
    
    
    recognition.onresult = function(e) {
        console.log(e.results[0][0]);
 
        const confidence = e.results[0][0].confidence;
        const transcript = e.results[0][0].transcript;
 
        const speech = document.createElement('p');
        speech.innerHTML = `Grabado: ${transcript} `;
        
        const seguridad = document.createElement('p');
        seguridad.innerHTML = `Seguridad: ${ parseInt ( confidence * 100 ) } %`;
        
        salida.appendChild(speech);
        salida.appendChild(seguridad);
 
    }
 
};
 