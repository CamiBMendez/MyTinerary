const Activity = require('../models/Activity')

const activityController = {
    listaActivity: async (req, res) => {
        
        const lista = await Activity.find()

        
        res.json({
            success: true,
            itinerarios: lista
        })
        
    },
    nuevaActivity:(req, res) => {
        
        const {activities, activityId} = req.body 
        const nuevaActivity = new Activity({
            activities,
            activityId

        })
        nuevaActivity.save()
        .then(user =>{
            res.json({success:true, user:user})
        })
        .catch(error =>{
            res.json({success: false, error:error})
        })
        
    }
}


module.exports= activityController