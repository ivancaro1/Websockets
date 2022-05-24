const socket = io.connect()

socket.emit('getAllProducts')

const formAgregarPersona = document.getElementById('formAgregarPersona')
formAgregarPersona.addEventListener('submit', e => {
    // prevengo que el formulario recargue la pagina al hacer submit
    e.preventDefault()

    // armo la persona extrayendo los datos de los campos del formulario

    const persona = {
        title: formAgregarPersona[0].value, // document.getElementById('txtNombre').value
        price: formAgregarPersona[1].value, // document.getElementById('txtApellido').value
        thumbnail: formAgregarPersona[2].value, // document.getElementById('txtApellido').value
    }

    // envio la persona al servidor via socket
    socket.emit('producto', persona);

    // limpio el contenido de los campos del formulario
    formAgregarPersona.reset()
})

socket.on('producto', manejarEventoPersonas);

async function manejarEventoPersonas(producto) {
    // console.log(personas)

    // busco la plantilla del servidor
    const recursoRemoto = await fetch('layouts/datos.handlebars')

    //extraigo el texto de la respuesta del servidor
    const textoPlantilla = await recursoRemoto.text()

    //armo el template con handlebars
    const functionTemplate = Handlebars.compile(textoPlantilla)

    // relleno la plantilla con las personas recibidas
    const html = functionTemplate({ producto })

    // reemplazo el contenido del navegador con los nuevos datos
    document.getElementById('producto').innerHTML = html
}