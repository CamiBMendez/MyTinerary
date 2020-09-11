import React from 'react'
import usuariosActions from '../redux/actions /usuariosActions'
import {connect} from 'react-redux'
import '../styles/user.css'
import axios from 'axios'
import { GoogleLogin } from 'react-google-login';
import swal from 'sweetalert';





class Register extends React.Component {

    state = {
        newUsuario:{
            imagen: "",
            nombre:"",
            apellido:"",
            mail: "",
            usuario:"",
            password:"",
        },
        paises:[]
    }


    leerImput = e => {
        const campo = e.target.name
        const valor = e.target.value
        this.setState ({
            newUsuario:{
            ...this.state.newUsuario,
            [campo]: valor
        }
        })
    }

    enviarInfo = async e =>{
     e.preventDefault()
     if (this.state.newUsuario.nombre === '' || this.state.newUsuario.apellido ==='' || this.state.newUsuario.imagen ===''|| this.state.newUsuario.mail ==='' || this.state.newUsuario.usuario ==='' || this.state.newUsuario.password ===''){
         swal("please complete all fields","all are require", "error"); 
     }else{
       await this.props.crearCuenta(this.state.newUsuario)
       if(this.props.success){
        swal("Good job!", "welcome!", "success"); 
        this.props.history.push('/home')
     }
     }
    }
    async componentDidMount(){
        const respuestaIt = await axios.get('https://restcountries.eu/rest/v2/all')
        const infoIt = respuestaIt.data
        this.setState({
            paises: infoIt
        })
    }
    responseGoogle = respuesta => {
        this.props.crearCuenta({
            nombre: respuesta.profileObj.givenName,
            apellido: respuesta.profileObj.familyName,
            password:'1Qa' + respuesta.profileObj.googleId,
            usuario:respuesta.profileObj.email. substr(0,respuesta.profileobj.email.indexOf('@')),
            mail:respuesta.profileObj.email,
            imagen:respuesta.profileObj.imageUrl,
            pais:"Argentina"
        })
        alert("Thank you for signing up")
        this.props.history.push("/home")  
    }

   


    render() {
        

        return (
            <div id="todoelhome">
              <div id="diiv"></div>
              <h3 id="textoMenu"> </h3>

              <div id="divFormulario">
                  <form>
                     <h3>Complete this form to register</h3>
                     <div id="logearConGoogle" >
                     <GoogleLogin id="GoogleLogin"
                        clientId="1049209162847-t7ekj9mifjrg7jgfvo6cm43o43jr0ie2.apps.googleusercontent.com"
                        buttonText="Sign up with google"
                        onSuccess={this.responseGoogle}
                        onFailure={this.responseGoogle}
                        cookiePolicy={'single_host_origin'}
                    />
                    </div>
                     <div id="divPicture" className="divsInputs">
                         <input onChange={this.leerImput} className="allInput" type="text" id="pictures" name="imagen" placeholder="load your URL image"></input>
                     </div>
                     <div id="divNombre" className="divsInputs">
                         <input onChange={this.leerImput} className="allInput" type="text" id="nombre" name="nombre" placeholder="Write your name here"></input>
                     </div>
                     <div id="divApellido" className="divsInputs">
                         <input onChange={this.leerImput} className="allInput" type="text" id="apellido" name="apellido" placeholder="Write your surname name here"></input>
                     </div>
                     <div id="mail" className="divsInputs">
                         <input onChange={this.leerImput} className="allInput" type="text" id="mail" name="mail" placeholder="example@hotmail.com"></input>
                     </div>
                     <div id="divUsuario" className="divsInputs">
                         <input onChange={this.leerImput} className="allInput" type="text" id="usuario" name="usuario" placeholder="Write your username here"></input>
                     </div>
                     <div id="divPassword" className="divsInputs">
                         <input onChange={this.leerImput} className="allInput" type="password" id="password" name="password" placeholder="password" id="password" name="password" placeholder="password with more than 3 letters, 1 upper, 1 lower and a numbre"></input>
                     </div>
                     <div className="divsInputs">
                     <select onChange={this.leerImput} className="allInput" name="pais"> 
                          <option value="All" id="boton"> All countries </option>
                          {this.state.paises.map(paises =>{
                          return <option  key={paises.name} value={paises.alpha2Code} id="opcionesPais">{paises.name}</option>
                          })}
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
