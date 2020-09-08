const Usuario = require('../models/Usuario')
const bcryptjs = require('bcryptjs')
const jwt = require('jsonwebtoken')

const usuarioController = {
 nuevoUsuario: async (req, res) => {
   const {nombre, apellido, imagen, mail, usuario, password, pais} = req.body
   const passwordhash = bcryptjs.hashSync(password, 10)
   const userExist = await Usuario.findOne({usuario: usuario})
   if (userExist){
     res.json({success:false, error:"username already used"})
   }else{
      const usuarioNuevo = new Usuario({
          nombre, 
          apellido, 
          usuario, 
          password: passwordhash, 
          pais, 
          mail, 
          imagen
      })
      var user = await usuarioNuevo.save()
      jwt.sign({...usuarioNuevo}, process.env.SECRETORKEY, {}, (error,token)=>{
        if (error){
          res.json({success:false, error})
        }else{
          res.json({success:true, token, nombre:user.nombre, imagen: user.imagen})
        }
      })
   }
 },
 validarDatos: (req,res,next) =>{
    //validacion (clase que dio ale)
     if (req.body.nombre === "hola"){
         res.json({success: false, error:"no se puede"})
     }else{
         next()
     }
 },
 loguearUsuario: async (req, res) => {
   const {usuario, password} = req.body
   const userExist = await Usuario.findOne({usuario})
   if(!userExist){
     res.json({sucess: false, mensaje: "user and/or password incorrects" })
   }else{
     const passwordMatches = bcryptjs.compareSync(password, userExist.password)
     if(!passwordMatches){
       res.json({success: false, mensaje: "user and/or password incorrects"})
     }else{
        jwt.sign({...userExist}, process.env.SECRETORKEY, {}, (error, token)=>{
          if(error){
            res.json({success:false, error:"there has been a mistake"})
          }else{
            res.json({success:true, token, nombre:userExist.nombre, imagen: userExist.imagen})
          }
        })
     }
   }
 }
}
module.exports = usuarioController