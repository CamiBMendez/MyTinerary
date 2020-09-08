const initialState= {
    nombre: '',
    imagen:'',
    token:'',
    success: false
}
const userReducer = (state = initialState, action) =>{
 switch (action.type){
     case 'LOG_USER':
         return {
             ...state,
             nombre: action.payload.nombre,
             imagen: action.payload.imagen,
             token: action.payload.token,
             success: action.payload.success
             
         }
      case 'DESLOG_USER':
           return {
               ...state,
               ...initialState
           }
    default:
        return state 
 }
}

export default userReducer