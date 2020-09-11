const mongoose = require('mongoose')
const { array } = require('@hapi/joi')

const usuarioSchema = new mongoose.Schema({
    nombre: {type: String, required:true},
    apellido:{type: String,required:true},
    mail: {type: String, required:true},
    imagen: {type: String, required:true},
    usuario:{type: String, required:true},
    password:{type: String, required:true},
    pais: {type: String, required:true},
    likeados: {type: Array, default:[]},
    deslikeados: {type: Array, default:[]}
})

const Usuario = mongoose.model('usuario', usuarioSchema)

module.exports = Usuario
