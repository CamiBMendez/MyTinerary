const express = require('express')
const rutas= express.Router()
const cityController= require('../controllers/cityController')

rutas.route('/cities')
.get(cityController.listacity)
.post(cityController.nuevaCity)


module.exports = rutas