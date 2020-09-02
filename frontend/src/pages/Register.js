import React from 'react'



class Register extends React.Component {

    state = {
        nombre:"",
        apellido:"",
        usuario:"",
        conreaseña:""
    }


    leerImput = e => {
        const campo = e.target.name
        const valor = e.target.value
        this.setState ({
            [campo]: valor
        })
    }

    enviarInfo = e =>{
     e.preventDefault()

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
                     <div id="divNombre">
                         <input onChange={this.leerImput} type="text" id="nombre" name="nombre" placeholder="Whrite your name here"></input>
                     </div>
                     <div id="divApellido">
                         <input onChange={this.leerImput} type="text" id="apellido" name="apellido" placeholder="Whrite your surname here"></input>
                     </div>
                     <div id="divUsuario">
                         <input onChange={this.leerImput} type="text" id="usuario" name="usuario" placeholder="Whrite your username here"></input>
                     </div>
                     <div id="divContraseña">
                         <input onChange={this.leerImput} type="text" id="contraseña" name="contraseña" placeholder="Whrite your password here"></input>
                     </div>
                     <button onClick={this.enviarInfo}>Create Account</button>
                  </form>
              </div>
          </div>
        )
    }
}
export default Register
