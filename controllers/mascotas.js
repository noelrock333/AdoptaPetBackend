const knexFile = require('../knexfile')
const knex = require('knex')(knexFile.development);
const Mascota = require('../models/Mascota');

async function crearMascota(req, res) {
  // Instanciaremos una nueva mascota utilizando la clase Mascota
  // var mascota = new Mascota(req.body)
  console.log(req.body)
  await knex('mascotas').insert(req.body);
  res.status(201).send(true)
}

async function obtenerMascotas(req, res) {
  // Simulando dos mascotas y respondiendolas
  // var mascota1 = new Mascota(1, 'Roky', 'Lanudo', 'https://cdn.sentidoanimal.es/wp-content/uploads/2020/01/HuskySiberiano.jpeg', 'Es muy docil', 'Pedro', 'Jasmin 123, Las flores, Colima, Colima')
  // var mascota2 = new Mascota(2, 'Boby', 'Lanudo', 'https://cdn.shopify.com/s/files/1/0268/6861/files/dog-1919406_960_720_grande.jpg?v=1530792114', 'No le agrada la gente', 'Pablo', 'Onix 345, Cantera, Colima, Colima')
  // res.send([mascota1, mascota2])
  // res.render('pets_list', { mascotas: [mascota1, mascota2] })
  // res.render('pets_list.html')
  const mascotas = await knex.select('*').from('mascotas');
  res.json(mascotas)
}

module.exports = {
  crearMascota,
  obtenerMascotas
}