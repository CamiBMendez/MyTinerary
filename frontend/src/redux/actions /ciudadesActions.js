import axios from 'axios'
import swal from 'sweetalert';


const ciudadesActions = {
  getCities: ()=> {
   return async (dispatch, getState)=> {
      const respuesta = await axios.get('http://127.0.0.1:4000/api/cities') 
      const info = respuesta.data.cities
      dispatch ({
          type: 'GET_CITIES',
          payload: info
      })
   }
  },
  filtrarCiudades: (filtro) => {
    return (dispatch,getState)=>{
        dispatch({
            type:'FILTER_CITIES', 
            payload: filtro
        })
    }
},
ciudad: (unaCity) => {
    return async(dispatch,getState)=>{
        const respuesta = await axios.get(`http://127.0.0.1:4000/api/cities/${unaCity}`)
        const info = respuesta.data.city
        dispatch({
            type:'UNA_CITY', 
            payload: info
        })
    }
},

nuevoComentario: (nuevoComentario, idItinerario) =>{
    return async (dispatch, getState) => {
     const respuesta = await axios.put(`http://127.0.0.1:4000/api/itinerarios/${idItinerario}`, nuevoComentario)
     if (!respuesta.data.success) {
       swal(`${respuesta.data.error}`)
     }else{
       dispatch({
        type: 'NEW_COMENT',
        payload: {
          imagen:respuesta.data.imagen,
          usuario:respuesta.data.usuario,
          token:respuesta.data.token,
          comments:respuesta.data.comments,
          success: respuesta.data.success
        }
    })
    }    
    }

  },
  cambiarComentario: (cambiarComentario, idComentario, indexCmment) =>{
    return async (dispatch, getState) => {
      const infoComentarios = {cambiarComentario, indexCmment}
      const respuesta = await axios.put(`http://127.0.0.1:4000/api/modificarcomentarios/${idComentario}`, infoComentarios)
      
          
     }
  },
  eliminarComentario: (idItinerario, index) =>{
    return async (dispatch, getState) => {
        const infoindex = {index}
        const respuesta = await axios.put(`http://127.0.0.1:4000/api/eliminarcomentario/${idItinerario}`, infoindex)
        if (!respuesta.data.success) {
          swal("deleted")
          
        }
    }
  },

  sumarLike: (idItinerario, rating, token, usuario) =>{
    return async (dispatch, getState) => {
      const likeYToken = {rating, token, usuario}
        const respuesta = await axios.put(`http://127.0.0.1:4000/api/sumarLike/${idItinerario}`, {likeYToken})
        if (!respuesta.data.success) {
          swal(`${respuesta.data.error}`)
        }
    }

  },
  restarLike: (idItinerario, rating, token, usuario) =>{
    return async (dispatch, getState) => {
      const likeYToken = {rating, token, usuario}
        const respuesta = await axios.put(`http://127.0.0.1:4000/api/restarLike/${idItinerario}`, {likeYToken})
        if (!respuesta.data.success) {
          swal(`${respuesta.data.error}`)
        }
    }

  }
}

export default ciudadesActions