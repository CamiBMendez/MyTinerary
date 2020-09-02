import React, {useState} from 'react';



const LogIn = () => {

    const [nuevoUsuario, setIngresoUsuario] = useState("usauario", "contraseña")

     const leerImput = e => {
        const campo = e.target.name
        const valor = e.target.value
        setIngresoUsuario ({
            ...nuevoUsuario,
            [campo]: valor
        })
    }

    const enviarInfo  = e => {
        e.preventDefault()

    }


        return (
            <div id="todoelhome">
              <div id="diiv"></div>
              <h3 id="textoMenu"> </h3>

              <div id="divFormulario">
                  <form>
                     <h3>Log In form</h3>
                     <div id="divUsuario">
                         <input onChange={leerImput} type="text" id="usuario" name="usuario" placeholder="Whrite your username here"></input>
                     </div>
                     <div id="divContraseña">
                         <input onChange={leerImput} type="text" id="contraseña" name="contraseña" placeholder="Whrite your password here"></input>
                     </div>
                     <button onClick={enviarInfo}>Log in</button>
                  </form>
              </div>

          </div>
        )

}
export default LogIn
