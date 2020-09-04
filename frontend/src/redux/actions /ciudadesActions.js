import axios from 'axios'


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
}
}

export default ciudadesActions