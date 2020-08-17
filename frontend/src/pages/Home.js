import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Seccion from '../components/Seccion'
import foto from '../imagenes/fondouno.jpg'
import arrow from '../imagenes/arrow.png'


class Home extends React.Component{
    render(){
       
        return (
        <>
        <Header />

        <div id="fondos" >
        <img src={foto} />
        <h2>Come to know us</h2> 
        <p>Find your perfect trip, designed by </p>
        <p>insiders who know and love their cities</p>
        </div>
        <div id="masTodo">
        <h3 id="mas">view all the cities</h3>
        <p id="texto">Learn about the best places in the world</p>
        <hr/>
        <button id="boton"><img src={arrow}  id="arrow"/></button>
        </div>
        <p id="textos">Every place has its own magic! <br/> if you love to travel you came to the right page</p>
        <Seccion />
        <Footer />
        </>
        )
    }
}

export default Home 