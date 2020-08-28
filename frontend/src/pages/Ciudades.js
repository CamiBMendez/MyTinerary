import React from "react"
import CiudadesFoto from "../components/CiudadesFotos"
import axios from 'axios'
import ciudad from '../imagenes/CityNotFound.png'
import {NavLink} from "react-router-dom"

class Ciudades extends React.Component{
    state={
       ciudades:[],
       ciudadesFiltradas: []
    }
    async componentDidMount(){
        const respuesta = await axios.get('http://127.0.0.1:4000/api/cities')
        const info = await respuesta.data.cities
        this.setState({
            ciudades: info,
            ciudadesFiltradas:info
        })
    }
    valores = e =>{
        const valorDeseado = e.target.value.toLowerCase().trim()
        const filtro = this.state.ciudadesFiltradas.filter(ciudad => ciudad.city.toLowerCase().indexOf(valorDeseado) === 0)
        this.setState({
            ciudades: filtro
        })
    }


    render(){
        const mensaje = () =>{
            if (this.state.ciudades.length===0){
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
            {this.state.ciudades.map(ciudad =>{
                  return <NavLink to={`/itinerarios/${ciudad._id}`}  id="navl"><CiudadesFoto key={ciudad.city} ciudad={ciudad} /> </NavLink> 
              })}
            </ul>
            </>
        )
    }
}



export default Ciudades