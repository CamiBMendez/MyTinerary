
import Axios from "axios"

const usuariosActions = {
    crearCuenta: nuevoUsuario =>{
        return async (dispatch, getState)=>{
            //envio nuevo usuario a api
            const respuesta = await Axios.post('http://127.0.0.1:4000/api/user', nuevoUsuario)
            if(!respuesta.data.success){
                alert(respuesta.data.error)
            }else{
                dispatch({
                    type: 'LOG_USER',
                    payload: {
                        token: respuesta.data.token,
                        nombre: respuesta.data.nombre,
                        imagen: respuesta.data.imagen,
                        success: respuesta.data.success
 
                    }
                })
            }

        }  
    
    },
    loguearUsuario: usuario =>{
        return async (dispatch, getState) =>{
            const respuesta = await Axios.post('http://127.0.0.1:4000/api/logIn', usuario)
            if (!respuesta.data.success){
                alert(respuesta.data.mensaje)
            }else{
                dispatch({
                    type: 'LOG_USER',
                    payload: {
                        token: respuesta.data.token,
                        nombre: respuesta.data.nombre,
                        imagen: respuesta.data.imagen,
                        success: respuesta.data.success
                    }
                })
            }
        }
    },
    desloguearUsuario: () =>{
       return (dispatch, setState) =>{
           dispatch({
               type: 'DESLOG_USER'
           })
       }
    }
}

export default usuariosActions