const Itinerario = require('../models/Itinerario')

const itinerarioController = {
    listaItinerarios: async (req, res) => {
        
        const lista = await Itinerario.find()

        
        res.json({
            success: true,
            itinerarios: lista
        })
        
    },
    nuevoItinerarios:(req, res) => {
        
        const {hashtag, title, profilePic, rating,duration, price, cityId, comments} = req.body 
        const nuevoItinerarios = new Itinerario({
            hashtag,
            title,
            profilePic,
            rating,
            duration,
            price,
            cityId,
            comments
        })
        nuevoItinerarios.save()
        .then(user =>{
            res.json({success:true, user:user})
        })
        .catch(error =>{
            res.json({success: false, error:error})
        })
        
    }
}


module.exports= itinerarioController