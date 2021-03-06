const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
// const sass = require('node-sass-middleware');

// Objeto global de la app
const app = express()

// configuración de middlewares
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// console.log(path.join(__dirname, 'sass'))
// Configuración de sass
// app.use(sass({
//   src: path.join(__dirname, '/sass/'),    // Archivos SASS de entrada
//   dest: path.join(__dirname, '/public/styles'), // Archivos CSS de salida
//   debug: true                
// }));

app.use(express.static(path.join(__dirname, 'public')))

// Define el directorio en donde estaran tus vistas
app.set('views', path.join(__dirname, 'views'));
app.engine('html', require('ejs').renderFile);

// Agregamos el código de nuestro router (routes/index.js)
app.use('/v1', require('./routes'));

// Manejando los errores 404
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// Iniciando el servidor...
const port = 3000
const server = app.listen(process.env.PORT || port, () => {
  console.log(`Escuchando en el puerto http://localhost:${server.address().port}`)
})