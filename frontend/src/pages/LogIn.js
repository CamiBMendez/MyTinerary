import React, {useState, useEffect} from 'react';
import usuariosActions from '../redux/actions /usuariosActions'
import {connect} from 'react-redux'
import '../styles/user.css'
import { NavLink } from 'react-router-dom';


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
            alert("please complete all fields")
        }else{
            const usuarioLoguear = {usuario: nuevoUsuario.usuario, password:nuevoUsuario.password}
            await props.loguearUsuario(usuarioLoguear)
            
        }
     
    }
    useEffect(()=>{
    if(props.success){
        alert ("welcome")  
        props.history.push('/home')
    }
    },[props.success])


        return (
            <div id="todoelhome">
              <div id="diiv"></div>
              <h3 id="textoMenu"> </h3>

              <div id="divFormulario">
                  <form>
                     <h3>Log In form</h3>
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
