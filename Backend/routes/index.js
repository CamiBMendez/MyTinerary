const express = require('express')
const rutas= express.Router()
const cityController= require('../controllers/cityController')
const itinerarioController = require('../controllers/itinerarioController')
const activityController = require('../controllers/activityController')
const usuarioController = require('../controllers/usuarioController')
const validator = require('../config/validator')
const passport = require("../config/passport")

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
.put(itinerarioController.nuevoComentario)

rutas.route('/modificarcomentarios/:id')
.put(itinerarioController.cambiarComentario)

rutas.route('/eliminarcomentario/:id')
    .put(itinerarioController.eliminarcomentario)

rutas.route('/sumarLike/:id')
    .put(itinerarioController.sumarLike)

rutas.route('/restarLike/:id')
    .put(itinerarioController.restarLike)

rutas.route('/activities')
.get(activityController.listaActivity)
.post(activityController.nuevaActivity)

rutas.route('/activities/:id')
.get(activityController.activity)

rutas.route('/user')
.post(validator.validateDatos, usuarioController.nuevoUsuario)

rutas.route('/logIn')
.post(usuarioController.loguearUsuario)

rutas.route('/verificarToken')
    .get(passport.authenticate('jwt', {session:false}), usuarioController.verificarToken)


module.exports = rutas