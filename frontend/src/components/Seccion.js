

import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Carouselfotos from "../components/Carouselfotos"


class Seccion extends React.Component {
  state = {
    slide:[
      ['Londres', 'Paris','Roma','Madrid'],
      ['Miami', 'New-York','San-Diego','Los-Angeles'],
      ['Sydney', 'Cairns','Melbourne','Gold-Coast']
    ]
  }

  render() {

    return (
    <Carousel>
    {this.state.slide.map(conjunto => {
     return(
    <Carousel.Item >
       <Carouselfotos fotos={conjunto}/>
   </Carousel.Item>
   )
  })}
  </Carousel>
  )
}
}
  


export default Seccion