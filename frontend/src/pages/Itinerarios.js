import React from 'react'
import axios from 'axios'
import '../styles/itinerarios.css'
import Itinerario from '../components/Itinerario'
import notFound from '../imagenes/itinerary.png'
import { NavLink } from 'react-router-dom'
import goBack from '../imagenes/goBack.png'
import menuHome from '../imagenes/menuHome.png'


class Itinerarios extends React.Component{
    state ={
        city:{},
        itinerario: []
    }
    async componentDidMount(){
        const IdABuscar = this.props.match.params.id
        const respuesta = await axios.get(`http://127.0.0.1:4000/api/cities/${IdABuscar}`)
        const info = respuesta.data.city
        const respuestaIt = await axios.get(`http://127.0.0.1:4000/api/itinerarios/${IdABuscar}`)
        const infoIt = respuestaIt.data.itinerario
        console.log(respuestaIt)
        this.setState({
            city: info,
            itinerario: infoIt
        })
    }
    render(){
        const mensaje = () =>{
            if (this.state.itinerario.length===0){
                 return(
                <div id="TineraryPadre">
                 <img src={notFound} alt="NoTinerary" id="noTinerary"/>
                 </div>
                 )
            }
        }
        return(
            <>
            <div id="diivDos"></div>
            <div id="fondoIt" style={{backgroundImage: `url(${this.state.city.picture})`}}>
               <div id="textosIt">
                  <p>{this.state.city.city}<br/><span>{this.state.city.country}</span></p>
               </div>
            </div>
            <h2>Tineraries</h2>
            <p>Everything you need to know</p>
            <hr/>
            {mensaje()}
            {this.state.itinerario.map(itinerario =>{
                  return  <Itinerario key={itinerario.title} itinerario={itinerario}/>
              })}
            <div id="MiBack">
                <div id="Back">
                  <NavLink to="/ciudades" id="goBack"><img src={goBack} alt="goBack"/></NavLink>
                </div>
                <div id="goHome">
                  <NavLink to="/home" id="menuHome"><img src={menuHome} alt="goMenu"/></NavLink>
                </div>
            </div>
            </>
        )
    }
}

export default Itinerarios