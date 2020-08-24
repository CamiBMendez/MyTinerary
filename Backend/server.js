const express= require('express')
const cors= require ('cors')
const rutas = require('./routes/index')

require ('dotenv').config()
require ('./config/db')

const servidor = express()


servidor.use(cors()) 
servidor.use(express.json()) 


servidor.use('/api', rutas)


servidor.listen(4000, () => console.log("app listening on port 4000"))