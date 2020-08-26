import React from 'react'
import '../styles/ciudadesFotos.css'


class  CiudadesFoto extends React.Component{
    render(){
        return(
                <li  id="listaa">
                    <div id="textos">
                    <p >{this.props.ciudad.city}<br/><span>{this.props.ciudad.country}</span></p>
                    </div>
                    <img src={this.props.ciudad.picture} alt="ciudades" id="imagenesCiudad"/>
                </li>
        )
    }
}

export default CiudadesFoto