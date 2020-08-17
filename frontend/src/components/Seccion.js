

import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Carouselfotos from "../components/Carouselfotos"


class Seccion extends React.Component {
  state = {
    slide1: ['Londres', 'Paris','Roma','Madrid'],
    slide2: ['Miami', 'New-York','San-Diego','Los-Angeles'],
    slide3: ['Sydney', 'Cairns','Melbourne','Gold-Coast']
  }

  render() {

    return (

   <Carousel>
     <Carousel.Item >
        <Carouselfotos fotos={this.state.slide1}/>
    </Carousel.Item>
      <Carousel.Item >
      <Carouselfotos  fotos={this.state.slide2}/>
      </Carousel.Item>
      <Carousel.Item>
      <Carouselfotos   fotos={this.state.slide3}/>
      </Carousel.Item>
    </Carousel>
    )
  }
}

export default Seccion