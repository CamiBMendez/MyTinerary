const initialState= {
    usuario: '',
    imagen:'',
    token:'',
    success: false
}
const userReducer = (state = initialState, action) =>{
 switch (action.type){
     case 'LOG_USER':
        localStorage.setItem('token', action.payload.token)
         return {
             ...state,
             usuario: action.payload.usuario,
             imagen: action.payload.imagen,
             token: action.payload.token,
             success: action.payload.success
             
         }
      case 'DESLOG_USER':
          localStorage.clear()
           return {
               ...state,
               ...initialState
           }
    default:
        return state 
 }
}

export default userReducer