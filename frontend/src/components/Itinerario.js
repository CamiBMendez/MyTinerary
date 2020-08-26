import React from 'react'
import '../styles/itinerarios.css'
import heart from '../imagenes/heart.png'
import bill from '../imagenes/bill.png'

class Itinerario extends React.Component{
   
    render(){
    const billete = []
    const billetes = () =>{
    for (var i=0; this.props.itinerario.price >i; i++){
        billete.push(this.props.itinerario.price)
    }
     }
    {billetes()}
        return(
        <div id="itinerario">
            <div id="itinerarios">
              <div  id="imagen" style={{backgroundImage: `url(${this.props.itinerario.profilePic})`}}/>
               <div id="todosLosP">
               <div id="primerP">
                  <div id="likes">
                    <div id="hearts">
                         <img src={heart} id="heart"/> 
                    </div>
                    <p class="ratings">{this.props.itinerario.rating}</p>
                  </div>
                  <p class="ratings">{this.props.itinerario.duration} hs </p> 
                  <p class="ratings">{billete.map(billete => <img alt="billete" src={bill} id="bill"/> )}/5</p>
               </div>
               <p id="titulo">{this.props.itinerario.title}</p>
               {this.props.itinerario.hashtag.map(hashtag =>{
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