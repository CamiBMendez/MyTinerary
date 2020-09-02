import React from 'react'
import '../styles/itinerarios.css'
import heart from '../imagenes/heart.png'
import bill from '../imagenes/bill.png'
import bill2 from '../imagenes/bill2.png'
import Activities from './Activities'

class Itinerario extends React.Component{
    state = {
        VerMas: false
    }
   
    render(){
    const billete = []
    const billeteVacioCuenta= 5 - (this.props.itinerario.price)
    const billeteVacio= []
   
    const billetes = (destino, caja) =>{
    for (var i=0; caja >i; i++){
        destino.push(caja)
    }
     }
    billetes(billeteVacio, billeteVacioCuenta)
    billetes(billete, this.props.itinerario.price)
    
    const mostrarInfo = e =>{
        this.setState({verMas: !this.state.verMas})
    }
    
        return(
        <div id="itinerario">
            <div id="itinerarios">
                  <div  id="imagen" style={{backgroundImage: `url(${this.props.itinerario.profilePic})`}}/>
               <div id="todosLosP">
               <div id="primerP">
                  <div id="likes">
                    <div id="hearts">
                         <img alt="heart" src={heart} id="heart"/> 
                    </div>
                    <p className="ratings">{this.props.itinerario.rating}</p>
                  </div>
                  <p className="ratings" >{this.props.itinerario.duration} hrs </p>
                  <div id="billetePadre">
                     <p>{billete.map(billete => <img alt="billete" src={bill} className="bill"/> )}</p>
                     <p>{billeteVacio.map(billeteVacio => <img alt="billete" src={bill2} className="bill"/> )}</p>
                  </div>
               </div>
               <p id="titulo">{this.props.itinerario.title}</p>
               {this.props.itinerario.hashtag.map(hashtag =>{
                   return<p id="hash">{hashtag}</p>
               })}
               </div>
            </div>
            <div id="botons">
            {this.state.verMas && <Activities itinerary={this.props.itinerario._id}/>}
            <button onClick={mostrarInfo}>{this.state.verMas ? "view less" : "view more"}</button>
            </div>
        </div>
        )
    }
}

export default Itinerario