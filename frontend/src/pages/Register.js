import React from 'react'
import usuariosActions from '../redux/actions /usuariosActions'
import {connect} from 'react-redux'
import '../styles/user.css'




class Register extends React.Component {

    state = {
        imagen: "",
        nombre:"",
        apellido:"",
        mail: "",
        usuario:"",
        password:""
    }


    leerImput = e => {
        const campo = e.target.name
        const valor = e.target.value
        this.setState ({
            [campo]: valor
        })
    }

    enviarInfo = async e =>{
     e.preventDefault()
     if (this.state.nombre === '' || this.state.apellido ==='' || this.state.imagen ===''|| this.state.mail ==='' || this.state.usuario ==='' || this.state.password ===''){
         alert ("please complete all fields")
     }else{
       await this.props.crearCuenta(this.state)
       if(this.props.success){
        alert ("welcome")  
        this.props.history.push('/home')
     }
     }
    }

   


    render() {
        console.log(this.state)

        return (
            <div id="todoelhome">
              <div id="diiv"></div>
              <h3 id="textoMenu"> </h3>

              <div id="divFormulario">
                  <form>
                     <h3>Complete this form to register</h3>
                     <div id="divPicture" className="divsInputs">
                         <input onChange={this.leerImput} className="allInput" type="text" id="pictures" name="imagen" placeholder="load your URL image"></input>
                     </div>
                     <div id="divNombre" className="divsInputs">
                         <input onChange={this.leerImput} className="allInput" type="text" id="nombre" name="nombre" placeholder="Whrite your name here"></input>
                     </div>
                     <div id="divApellido" className="divsInputs">
                         <input onChange={this.leerImput} className="allInput" type="text" id="apellido" name="apellido" placeholder="Whrite your surname name here"></input>
                     </div>
                     <div id="mail" className="divsInputs">
                         <input onChange={this.leerImput} className="allInput" type="text" id="mail" name="mail" placeholder="Whrite your email here"></input>
                     </div>
                     <div id="divUsuario" className="divsInputs">
                         <input onChange={this.leerImput} className="allInput" type="text" id="usuario" name="usuario" placeholder="Whrite your username here"></input>
                     </div>
                     <div id="divPassword" className="divsInputs">
                         <input onChange={this.leerImput} className="allInput" type="password" id="password" name="password" placeholder="Whrite your password here"></input>
                     </div>
                     <div className="divsInputs">
                     <select onChange={this.leerImput} class="allInput"name="pais"> 
                          <option value="All" id="boton"> All countries </option>
                          <option value="Arg">Argentina</option>
                          <option value="Usa">United States</option>
                     </select> 
                     </div>
                     <div id="botonesEnv">
                     <button onClick={this.enviarInfo} id="inputBut">Create Account</button>
                     </div>
                  </form>
              </div>
          </div>
        )
    }
}
const mapStateToProps = state =>{
    return{
        success: state.user.success
    }
}


 
const mapDispatchToProps = {
    crearCuenta: usuariosActions.crearCuenta
}
export default connect(mapStateToProps, mapDispatchToProps) (Register)
