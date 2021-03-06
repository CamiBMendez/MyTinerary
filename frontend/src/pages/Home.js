import React from 'react'
import Seccion from '../components/Seccion'
import arrow from '../imagenes/arrow.png'
import {NavLink} from "react-router-dom"

class Home extends React.Component{
    render(){
const foto = require('../imagenes/fondouno.jpg')
        return (
        <>
        <div id="fondos" >
        <img src={foto} alt="fondo"/>
        </div>
        <div id="masTodo">
        <h3 id="mas">view all the cities</h3>
        <p id="texto">Learn about the best places in the world</p>
        <hr/>
        <div id="centrarBoton">
        <button id="boton"><NavLink to="/ciudades" className="navs"><img src={arrow} alt="flecha" id="arrow"/></NavLink></button>
        </div>
        </div>
        <p id="textoss">Every place has its own magic! <br/> <span id="spann">if you love to travel you came to the right page</span></p>
        <Seccion />
        </>
        )
    }
}

export default Home 