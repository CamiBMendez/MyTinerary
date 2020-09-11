import React from 'react'
import '../styles/itinerarios.css'
import ciudadesActions from '../redux/actions /ciudadesActions'
import {connect} from 'react-redux'
import rubish from '../imagenes/tacho.png'
import modify from '../imagenes/modify.png'
import save from '../imagenes/save.png'
import swal from 'sweetalert'

class Comments extends React.Component{
    state = {
        modificar: true,
        comments:{
            imagen:this.props.usuario.imagen,
            usuario:this.props.usuario.usuario,
            token:this.props.usuario.token,
            comment:""
        }
}
    
    render(){
        const readImput = e => {
            this.props.comment.comment = e.target.value
            const campo = e.target.name
            const valor = e.target.value
            this.setState ({
                comments: {
                   ...this.state.comments,
                    [campo]: valor
                  }
                  
              })
          }

           const borrarComentario = async e =>{
            e.preventDefault()
            await this.props.eliminarComentario(this.props.idItinerario, this.props.index)
            this.props.itinerario.comments.push(this.state.comments)
           }

          const cambiarInfo = async e =>{
            e.preventDefault()
            if (this.state.comments.comment === ''){
                this.setState({modificar: !this.state.modificar})
            }else{
            await this.props.cambiarComentario(this.state.comments, this.props.idItinerario, this.props.index)
                   this.setState({modificar: !this.state.modificar})
                   this.setState({
                      comments: {
                        ...this.state.comments,
                         comment: ""
                       }
                  })
                   }
           }
        
        const modificartexto = e =>{
            this.setState({modificar: !this.state.modificar})
        }

        return(
            <>
            <div id="commentsFlex">
                <div id="imagen"  style={{ width: "6vw", height:"5.4vw", border:"2.5px solid #000000",backgroundImage: `url(${this.props.comment.imagen})`, backgroundSize: "cover", backgroundPosition:"center"}}>
                </div>
                <div>
                <p id="userName">{this.props.comment.usuario}</p>
                {this.state.modificar 
                ? <p id="commentName">{this.props.comment.comment}</p>
                :<div id="divModificar">
                <input onChange={readImput} type="text"  value={this.props.comment.comment} id="textoModificado"name="comment" ></input>
                <button onClick={cambiarInfo}className="botonesModify"><img alt="save" src={save} className="imagenesModify"/></button>
                </div>
                }
                </div>
                <div id="botonesModificar">
                {this.props.usuarioLogueado !== this.props.comment.usuario
                ?( <>
                   </>
                )
                :(<>
                    <button onClick={borrarComentario} className="botonesModify"><img alt="eliminar"src={rubish} className="imagenesModify"/></button>
                    <button onClick={modificartexto}className="botonesModify"><img alt="modificar" src={modify} className="imagenesModify"/></button>
                    </>
                )}
                </div>
            </div>
                   
            </>
        )
    }


}
const mapStateToProps = state => {
    return{
        usuario: state.user,
        tokenLogueado: state.user.token,
        usuarioLogueado: state.user.usuario,
    }
}

const mapDispatchToProps = {
    cambiarComentario: ciudadesActions.cambiarComentario,
    eliminarComentario: ciudadesActions.eliminarComentario
 }

export default connect(mapStateToProps,mapDispatchToProps)(Comments)