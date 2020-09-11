import React, {useState, useEffect} from 'react';
import usuariosActions from '../redux/actions /usuariosActions'
import {connect} from 'react-redux'
import '../styles/user.css'
import { NavLink } from 'react-router-dom';
import { GoogleLogin } from 'react-google-login';
import swal from 'sweetalert';


const LogIn = (props) => {

    const [nuevoUsuario, setIngresoUsuario] = useState({})

     const leerImput = e => {
        const campo = e.target.name
        const valor = e.target.value
        setIngresoUsuario ({
            ...nuevoUsuario,
            [campo]: valor
        })
    }

    const enviarInfo  =async e => {
        e.preventDefault()
        if (props.usuario === ''|| props.password === ''){
            swal("please complete all fields","all are require", "error"); 
        }else{
            const usuarioLoguear = {usuario: nuevoUsuario.usuario, password:nuevoUsuario.password}
            await props.loguearUsuario(usuarioLoguear)
            
        }
     
    }
    useEffect(()=>{
    if(props.success){
        swal("Good job!", "welcome!", "success"); 
        props.history.push('/home')
    }
    },[props.success])

    const responseGoogle = respuesta => {
        props.loguearUsuario({
            usuario:respuesta.profileObj.email,
            password:'1Qa' + respuesta.profileObj.googleId})
        props.history.push("/home")  
    }

        return (
            <div id="todoelhome">
              <div id="diiv"></div>
              <h3 id="textoMenu"> </h3>

              <div id="divFormulario">
                  <form>
                     <h3>Log In form</h3>
                     <div id="logearConGoogle">
                     <GoogleLogin id="GoogleLogin"
                        clientId="1049209162847-t7ekj9mifjrg7jgfvo6cm43o43jr0ie2.apps.googleusercontent.com"
                        buttonText="Log in with google"
                        onSuccess={responseGoogle}
                        onFailure={responseGoogle}
                        cookiePolicy={'single_host_origin'}
                    />
                    </div>
                     <div id="divUsuario" className="divsInputs">
                         <input onChange={leerImput} type="text" className="allInput" id="usuario" name="usuario" placeholder="Write your username here"></input>
                     </div>
                     <div id="divContraseña" className="divsInputs">
                         <input onChange={leerImput} type="password" className="allInput" id="password" name="password" placeholder="Write your password here"></input>
                     </div>
                     <NavLink to="/register"><p id="textAccount">create new account</p></NavLink>
                     <div id="botonesslog">
                     <button onClick={enviarInfo} id="inputButt">Log in</button>
                     </div>
                  </form>
              </div>

          </div>
        )

}
const mapStateToProps = state =>{
    return{
        success: state.user.success
    }
}

const mapDispatchToProps = {
    loguearUsuario: usuariosActions.loguearUsuario
}
export default connect(mapStateToProps, mapDispatchToProps)  (LogIn)
