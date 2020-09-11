
import Axios from "axios"
import swal from 'sweetalert';

const usuariosActions = {
    crearCuenta: nuevoUsuario =>{
        return async (dispatch, getState)=>{
            //envio nuevo usuario a api
            const respuesta = await Axios.post('http://127.0.0.1:4000/api/user', nuevoUsuario)
            if(!respuesta.data.success){
                swal(`${respuesta.data.error}`);
            }else{
                dispatch({
                    type: 'LOG_USER',
                    payload: {
                        token: respuesta.data.token,
                        usuario: respuesta.data.usuario,
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
                swal(`${respuesta.data.mensaje}`);
            }else{
                dispatch({
                    type: 'LOG_USER',
                    payload: {
                        token: respuesta.data.token,
                        usuario: respuesta.data.usuario,
                        imagen: respuesta.data.imagen,
                        success: respuesta.data.success
                    }
                })
            }
        }
    },
    forcedLogIn: tokenLS => {
        return async (dispatch, getState) => {
           const respuesta = await Axios.get('http://127.0.0.1:4000/api/verificarToken', {
              headers: {
                 Authorization: `Bearer ${tokenLS}`
              }
           })
           if(respuesta.data.success){
              dispatch({
                 type: 'LOG_USER',
                 payload: {token: tokenLS, usuario: respuesta.data.usuario, imagen: respuesta.data.imagen, success:respuesta.data.success}
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
     },
}

export default usuariosActions