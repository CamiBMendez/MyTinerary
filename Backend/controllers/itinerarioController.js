const Itinerario = require('../models/Itinerario')
const Usuario = require('../models/Usuario')

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
        
    },
    itinerario: async (req, res) => {
        
        const lista = await Itinerario.find({cityId: req.params.id})
       
        res.json({
            success: true,
            itinerario: lista
        })

    },
    nuevoComentario: async(req,res) => {
        const modificacion = req.body
       const agregarcomentario = await Itinerario.findOneAndUpdate({_id: req.params.id}, {$push:{comments:modificacion}})
        res.json({success:true})  
    },
    
    cambiarComentario: async(req,res) => {
        const {cambiarComentario, indexCmment} = req.body
        
        const itinerarioViejo = await Itinerario.findOne({ _id : req.params.id })

        itinerarioViejo.comments.map((comment, index) => {
            if(index == indexCmment) {
                comment.comment = cambiarComentario.comment
            }
        })
        
         const itinerarioModificado = await Itinerario.findOneAndUpdate(
            { _id : req.params.id },
            {
                hashtag: itinerarioViejo.hashtag,
                        comments: itinerarioViejo.comments,
                        title: itinerarioViejo.title,
                        profilePic: itinerarioViejo.profilePic,
                        rating: itinerarioViejo.rating,
                        duration: itinerarioViejo.duration,
                        price: itinerarioViejo.price,
                        cityId: itinerarioViejo.cityId
                        
            },
            { returnNewDocument : true }
        )
        
        res.json({
            itinerarioModificado
        })
    },
    eliminarcomentario: async(req,res) => {
        let {infoindex} = req.body

        const itinerarioViejo = await Itinerario.findOne({ _id : req.params.id})
       
        itinerarioViejo.comments.splice(infoindex, 1) 
                 
                
        const itinerarioModificado = await Itinerario.findOneAndUpdate(
                { _id : req.params.id },
                {
                    hashtag: itinerarioViejo.hashtag,
                    comments: itinerarioViejo.comments,
                    title: itinerarioViejo.title,
                    profilePic: itinerarioViejo.profilePic,
                    rating: itinerarioViejo.rating,
                    duration: itinerarioViejo.duration,
                    price: itinerarioViejo.price,
                    cityId: itinerarioViejo.cityId
                },
                { returnNewDocument : true }
                )
                
                res.json({
                    itinerarioModificado
                })
    },

    sumarLike: async(req,res) => {
        const {rating, token, usuario} = req.body
        await Itinerario.findOneAndUpdate({_id: req.params.id}, {rating:rating}, {$push:{likeados:token}})
        await Usuario.findOneAndUpdate({usuario: usuario}, {$push:{likeados:token}})
            res.json({success:true})  
    },

    restarLike: async(req,res) => {
        const {rating, token, usuario} = req.body
        await Itinerario.findOneAndUpdate({_id: req.params.id}, {rating:rating})
        await Usuario.findOneAndUpdate({usuario: usuario}, {$push:{deslikeados:token}})
            res.json({success:true})  
    },

}


module.exports= itinerarioController