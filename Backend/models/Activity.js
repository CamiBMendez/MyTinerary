const mongoose = require('mongoose')

const activitySchema = new mongoose.Schema({
    activities:{type: Array},
    activityId: { type:mongoose.Schema.ObjectId, ref:"city"},
})

const Activity = mongoose.model('activity', activitySchema)

module.exports= Activity