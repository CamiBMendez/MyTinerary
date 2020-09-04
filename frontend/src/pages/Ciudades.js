import React from "react"
import CiudadesFoto from "../components/CiudadesFotos"
import ciudad from '../imagenes/CityNotFound.png'
import {NavLink} from "react-router-dom"
import loading from '../imagenes/loading-animation-2.gif'
import ciudadesActions from "../redux/actions /ciudadesActions"
import {connect} from 'react-redux'

class Ciudades extends React.Component{
   
    componentDidMount(){
       this.props.getCities()
       
    }
    valores = e =>{
        const valorDeseado = e.target.value.toLowerCase().trim()
        this.props.filtrarCiudades(valorDeseado)
    }


    render(){
        if (this.props.ciudades === null){
            return  <img src={loading} alt="NoTinerary" id="loading"/>
        }
        const mensaje = () =>{
            if (this.props.ciudadesFiltradas.length===0){
                 return(
                <div id="padreImagen">
                 <img src={ciudad} alt="ciudad" id="imagenCity"/>
                 </div>
                 )
            }
        }
        return(
            <>
            <div id="diiv"></div>
            <h4>Cities</h4>
            <div id="buscador">
            <input type="text" placeholder="Search the perfect city" name="ciudad" id="ciudad"
            onChange={this.valores} />
            </div>
            <ul id="fotosCiudad">
            {mensaje()}
            {this.props.ciudadesFiltradas.map(ciudad =>{
                  return <NavLink to={`/itinerarios/${ciudad._id}`}  id="navl"><CiudadesFoto key={ciudad.city} ciudad={ciudad} /> </NavLink> 
              })}
            </ul>
            </>
        )
    }
}
const mapStateToProps = state =>{
    return {
        ciudades: state.ciudades.ciudades,
        ciudadesFiltradas: state.ciudades.ciudadesFiltradas

    }
}
const mapDispatchToProps ={
    getCities: ciudadesActions.getCities,
    filtrarCiudades: ciudadesActions.filtrarCiudades
}


export default connect(mapStateToProps, mapDispatchToProps)(Ciudades)