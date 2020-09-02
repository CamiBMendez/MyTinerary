const mongoose = require('mongoose')

const activitySchema = new mongoose.Schema({
    title:{type: String},
    picture:{type: String, required:true},
    description: {type: String},
    itineraryId: { type:mongoose.Schema.ObjectId, ref:"itinerario"},
})

const Activity = mongoose.model('activity', activitySchema)

module.exports= Activity