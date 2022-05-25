const socket = io.connect()

socket.emit('getAllProducts')
socket.emit('getAllMessages')

const formAgregarPersona = document.getElementById('formAgregarPersona')
formAgregarPersona.addEventListener('submit', e => {
    e.preventDefault()
    const persona = {
        title: formAgregarPersona[0].value,
        price: formAgregarPersona[1].value,
        thumbnail: formAgregarPersona[2].value, 
    }
    socket.emit('producto', persona);
    formAgregarPersona.reset()
})

socket.on('producto', manejarEventoPersonas);

async function manejarEventoPersonas(producto) {
    const recursoRemoto = await fetch('layouts/datos.handlebars')
    const textoPlantilla = await recursoRemoto.text()
    const functionTemplate = Handlebars.compile(textoPlantilla)
    const html = functionTemplate({ producto })
    document.getElementById('producto').innerHTML = html
}

/* ------------------------------------------------------ */
const formAgregarMensaje = document.getElementById('button')
formAgregarMensaje.addEventListener('click', e => {
    e.preventDefault()
    const user = document.getElementById('user').value
    const message = document.getElementById('mensaje').value
    socket.emit('message', { user, message });
})

socket.on('message', manejarEventoChat);

async function manejarEventoChat(mensajes) {
    const recursoRemoto = await fetch('layouts/chat.handlebars')
    const textoPlantilla = await recursoRemoto.text()
    const functionTemplate = Handlebars.compile(textoPlantilla)
    const html = functionTemplate({ mensajes })
    document.getElementById('chat').innerHTML = html
}