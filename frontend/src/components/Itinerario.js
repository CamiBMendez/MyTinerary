import React from 'react'
import '../styles/itinerarios.css'


class Itinerario extends React.Component{
   
    render(){
        return(
        <div id="itinerario">
            <div id="itinerarios">
              <div  id="imagen" style={{backgroundImage: `url(${this.props.hola.profilePic})`}}/>
               <div id="todosLosP">
               <div id="primerP">
                  <p class="ratings">{this.props.hola.rating}/5 rating</p>
                  <p class="ratings">{this.props.hola.duration} hs </p> 
                  <p class="ratings">{this.props.hola.duration}/5 price</p>
               </div>
               <p id="titulo">{this.props.hola.title}</p>
               {this.props.hola.hashtag.map(hashtag =>{
                   return<p id="hash">{hashtag}</p>
               })}
               </div>
            </div>
            <div id="botons">
            <button>read more</button>
            </div>
        </div>
        )
    }
}

export default Itinerario