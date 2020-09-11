const initialState = {
    ciudades:null,
    ciudadesFiltradas: [],
    city:{}
}

const ciudadesReducer = (state = initialState, action)=>{
 switch (action.type) {
     case 'GET_CITIES':
         return {
             ...state,
             ciudades: action.payload,
             ciudadesFiltradas:action.payload

         }
     case 'FILTER_CITIES':
        const filtro = state.ciudades.filter(ciudad => ciudad.city.toLowerCase().indexOf(action.payload) === 0)
        return {
            ...state,
            ciudadesFiltradas: filtro
        }
     case 'UNA_CITY':
        return {
            ...state,
            city: action.payload
        }
        
     
    default:
        return state
 }
 
}


export default ciudadesReducer