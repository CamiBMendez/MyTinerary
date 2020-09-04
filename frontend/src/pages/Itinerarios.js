import React from 'react'
import axios from 'axios'
import '../styles/itinerarios.css'
import Itinerario from '../components/Itinerario'
import notFound from '../imagenes/itinerary.png'
import { NavLink } from 'react-router-dom'
import goBack from '../imagenes/goBack.png'
import menuHome from '../imagenes/menuHome.png'
import loading from '../imagenes/loading-animation-2.gif'
import ciudadesActions from "../redux/actions /ciudadesActions"
import {connect} from 'react-redux'


class Itinerarios extends React.Component{
    state ={
        itinerario:null
    }
    async componentDidMount(){
        const IdABuscar = this.props.match.params.id
        this.props.ciudad(IdABuscar)
        const respuestaIt = await axios.get(`http://127.0.0.1:4000/api/itinerarios/${IdABuscar}`)
        const infoIt = respuestaIt.data.itinerario
        this.setState({
            itinerario: infoIt
        })
    }
    render(){
        if (this.state.itinerario === null){
            return <img src={loading} alt="NoTinerary" id="loading"/>
        }
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
            <div id="fondoIt" style={{backgroundImage: `url(${this.props.city.picture})`}}>
               <div id="textosIt">
                  <p key={this.props.city.city}>{this.props.city.city}<br/><span >{this.props.city.country}</span></p>
               </div>
            </div>
            <h2>Tineraries</h2>
            <p className="ratings">Everything you need to know</p>
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
const mapStateToProps = state =>{
    return {
        city: state.ciudades.city

    }
}
const mapDispatchToProps ={
    getCities: ciudadesActions.getCities,
    ciudad: ciudadesActions.ciudad
}

export default  connect(mapStateToProps, mapDispatchToProps)(Itinerarios)