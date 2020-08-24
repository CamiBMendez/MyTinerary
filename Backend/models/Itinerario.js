const mongoose = require('mongoose')

const itinerarioSchema = new mongoose.Schema({
    hashtag:{type: Array},
    title: {type: String, required:true},
    profilePic:{type: String},
    rating: {type: Number, required:true},
    duration: {type: Number, required:true},
    price: {type: Number, required:true},
    cityId: { type:mongoose.Schema.ObjectId, ref:"city"},
    comments:{type: Array}
})

const Itinerario = mongoose.model('itinerario', itinerarioSchema)

module.exports= Itinerario

