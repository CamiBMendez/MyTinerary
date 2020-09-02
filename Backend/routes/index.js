const express = require('express')
const rutas= express.Router()
const cityController= require('../controllers/cityController')
const itinerarioController = require('../controllers/itinerarioController')
const activityController = require('../controllers/activityController')


rutas.route('/cities')
.get(cityController.listacity)
.post(cityController.nuevaCity)

rutas.route('/cities/:id')
.get(cityController.unaCity)




rutas.route('/itinerarios')
.get(itinerarioController.listaItinerarios)
.post(itinerarioController.nuevoItinerarios)

rutas.route('/itinerarios/:id')
.get(itinerarioController.itinerario)


rutas.route('/activities')
.get(activityController.listaActivity)
.post(activityController.nuevaActivity)

rutas.route('/activities/:id')
.get(activityController.activity)





module.exports = rutas