const mongoose = require('mongoose')

const activitySchema = new mongoose.Schema({
    activities:{type: Array},
    ItineraryId: { type:mongoose.Schema.ObjectId, ref:"itinerario"},
})

const Activity = mongoose.model('activity', activitySchema)

module.exports= Activity