import React from 'react'
import '../styles/itinerarios.css'
import heart from '../imagenes/heart.png'
import heart2 from '../imagenes/heart2.png'
import bill from '../imagenes/bill.png'
import bill2 from '../imagenes/bill2.png'
import Activities from './Activities'
import ciudadesActions from '../redux/actions /ciudadesActions'
import {connect} from 'react-redux'
import Comments from './Comments'
import swal from 'sweetalert';
class Itinerario extends React.Component{
    state = {
            rating:this.props.itinerario.rating,
            viewMore: false,
            cambiarColor:true,
            comments:{
                imagen:this.props.usuario.imagen,
                usuario:this.props.usuario.usuario,
                token:this.props.usuario.token,
                comment:""
        }
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
    
    const leerImput = e => {
        const campo = e.target.name
        const valor = e.target.value
        this.setState ({
            comments: {
               ...this.state.comments,
                [campo]: valor
              }
              
          })
      }
      const cambiar = async e =>{
        e.preventDefault()
        this.setState({cambiarColor: !this.state.cambiarColor})
        const likesumado = this.state.rating +1
        const likerestado = this.state.rating -1
        if (this.state.cambiarColor){
            this.setState({rating: likesumado})
            await this.props.sumarLike(this.props.itinerario._id, likesumado, this.props.tokenLogueado, this.props.usuario)
        }else{
            this.setState({rating: likerestado})
            await this.props.restarLike(this.props.itinerario._id, likerestado, this.props.tokenLogueado,this.props.usuario)

        }

        this.setState({
            ...this.state,
            rating: this.state.rating
             
        })
         }
    


     const enviarInfo = async e =>{
          e.preventDefault()
             if (this.state.comments.comment === ""){
                 swal("please write your coment","", "error"); 
                 
             }else{
                 await this.props.nuevoComentario(this.state.comments, this.props.itinerario._id)
                 this.props.itinerario.comments.push(this.state.comments)
                 this.setState({
                    comments: {
                      ...this.state.comments,
                       comment: ""
                     }
                })
            }
         }
    
        return(
        <div id="itinerario">
            <div id="itinerarios">
                  <div  id="imagen" style={{backgroundImage: `url(${this.props.itinerario.profilePic})`}}/>
               <div id="todosLosP">
               <div id="primerP">
                  <div id="likes">
                    <div onClick={cambiar} id="hearts">
                    {this.state.cambiarColor
                    ?<img alt="heart" src={heart} id="heart"/> 
                    :<img alt="heart" src={heart2} id="heart"/>}
                    </div>
                    <p className="ratings">{this.state.rating}</p>
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
            <div id="todoDeComments">
            <div className="comentariosButt">
                {this.props.itinerario.comments.map((comment, index)=>{
                return <Comments comment={comment} index={index} idItinerario={this.props.itinerario._id} itinerario={this.props.itinerario}/> 
                })}
            </div>
            <div id="commentsButt">
            {!this.props.tokenLogueado
              ?( <>
                </>
                )
              :(<>
              <div  className="divsInputs">
              <input onChange={leerImput} className="allInput" type="text"  value={this.state.comments.comment} name="comment" placeholder="Write your comments here"></input>
              </div>
              <div id="botonesComments">
              <button onClick={enviarInfo} id="inputBut">send</button>
              </div>
              </>
              )}
            </div>
            </div>
        </div>
        )
    }
}
const mapStateToProps = state => {
    return{
        usuario: state.user,
        tokenLogueado: state.user.token
    }
}

const mapDispatchToProps = {
    nuevoComentario: ciudadesActions.nuevoComentario,
    sumarLike: ciudadesActions.sumarLike,
    restarLike: ciudadesActions.restarLike
 }


export default connect(mapStateToProps,mapDispatchToProps)(Itinerario)