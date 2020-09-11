const passport = require('passport')
const jwtstrategy = require('passport-jwt').Strategy
const ExtractJwt = require('passport-jwt').ExtractJwt

const Usuario = require('../models/Usuario')

//defino la estrategia

module.exports = passport.use(new jwtstrategy({
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: "mysecretkey" 
}, (payload, done)=>{
    Usuario.findById(payload._doc._id)
    .then(user =>{
         if(!user) {
             return done(null, false)
         }else{
             return done(null, user)
         }
    })
    .catch(error =>{
         done(error, false)
    })
}))