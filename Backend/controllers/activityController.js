const Activity = require('../models/Activity')

const activityController = {
    listaActivity: async (req, res) => {
        
        const lista = await Activity.find()

        
        res.json({
            success: true,
            activities: lista
        })
        
    },
    nuevaActivity:(req, res) => {
        
        const {title, picture, description, itineraryId} = req.body 
        const nuevaActivity = new Activity({
            title,
            picture,
            description,
            itineraryId

        })
        nuevaActivity.save()
        .then(user =>{
            res.json({success:true, user:user})
        })
        .catch(error =>{
            res.json({success: false, error:error})
        })
        
    },
    activity: async (req, res) => {
        
        const lista = await Activity.find({itineraryId: req.params.id})
       
        res.json({
            success: true,
            actividad: lista
        })

    }
}


module.exports= activityController