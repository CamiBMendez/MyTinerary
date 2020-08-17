import React from 'react';
import '../styles/carouselFotos.css'

class Carouselfotos extends React.Component {
    render() {
        return (
             <div id="Carouselimg"> 
             {this.props.fotos.map(ciudad => {
                 const ciudadFoto = require(`../imagenes/${ciudad}.jpg`)
                 return (
                    <div className="imagenesCrousel" style={{backgroundImage: `url(${ciudadFoto})`}} key={ciudad}>
                    <h3>{ciudad}</h3>
                    </div>
                 )
             }) } 
             </div>
        )
    }
}

export default Carouselfotos