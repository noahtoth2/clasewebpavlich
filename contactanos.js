document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('chat-form');
    const nombreInput = document.getElementById('nombre');
    const mensajeInput = document.getElementById('chat-input');
    const chatMensajes = document.getElementById('chat-mensajes');
    const errorNombre = document.getElementById('error-nombre');
    const errorMensaje = document.getElementById('error-mensaje');

    form.addEventListener('submit', function (e) {
        e.preventDefault(); 

        const nombre = nombreInput.value.trim();
        const mensaje = mensajeInput.value.trim();

        let valido = true;

        
        errorNombre.textContent = '';
        errorMensaje.textContent = '';

        
        if (nombre === '') {
            errorNombre.textContent = 'Por favor, ingresa tu nombre.';
            valido = false;
        }

        
        if (mensaje === '') {
            errorMensaje.textContent = 'Por favor, escribe un mensaje.';
            valido = false;
        }

        if (!valido) return;

        
        const mensajeElemento = document.createElement('div');
        mensajeElemento.textContent = `${nombre}: ${mensaje}`;
        mensajeElemento.style.marginBottom = '5px';

        
        chatMensajes.appendChild(mensajeElemento);
        chatMensajes.scrollTop = chatMensajes.scrollHeight; // auto scroll

        
        mensajeInput.value = '';
    });
});
