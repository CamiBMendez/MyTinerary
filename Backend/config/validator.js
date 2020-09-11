const Joi = require('@hapi/joi')
const validator ={
    validateDatos:(req,res,next)=>{
        const schema = Joi.object({
            nombre: Joi.string().trim().alphanum().min(3).max(15),
            apellido: Joi.string().trim().alphanum().min(3).max(15),
            usuario: Joi.string().trim().alphanum().min(3).max(15),
            password: Joi.string().trim().pattern(/(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*[!{}[\]@#$%\^&*)(+=._-]).{5,}/),
            mail: Joi.string().trim().email(),
            imagen: Joi.string().uri().required().trim(),
            pais: Joi.string().max(2)
        })
 
        const validation = schema.validate(req.body)
                
        if(validation.error !== undefined){
            return res.json({
                success: false,
                error: 'Error in validation. One or more fields dont respect the format',
                message: validation.error
            });
        }
        next();
    }
}

module.exports = validator;