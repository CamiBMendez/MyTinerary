const City = require('../models/City')

const cityController = {
    listacity: async (req, res) => {
        
        const lista = await City.find()

        
        res.json({
            success: true,
            cities: lista
        })
        
    },
    nuevaCity:(req, res) => {
        
        const {city, country, picture} = req.body 
        const nuevaCity = new City({
            city: city,
            country: country,
            picture: picture,
        })
        nuevaCity.save()
        .then(user =>{
            res.json({success:true, user:user})
        })
        .catch(error =>{
            res.json({success: false, error:error})
        })
        
    },
    
    unaCity: async (req, res) => {
        
        const Itinerario = await City.findOne({_id: req.params.id})
       
        res.json({
            success: true,
            city: Itinerario
        })
    }

}

module.exports= cityController