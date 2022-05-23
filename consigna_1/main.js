const express = require('express');
const { webRouter } = require('./router/webRouter.js')

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}));

/* ------------------------------------------------------ */
app.set('view engine', 'ejs')
app.set('views', './views')

app.use(webRouter)

/* ------------------------------------------------------ */
/* Server Listen */

const PORT = 8080
const server = app.listen(PORT, ()=>{
    console.log(`Servidor escuchando en el puerto ${server.address().port}`)
});
server.on('error',error => console.log(`Error en el servidor ${error}`))
