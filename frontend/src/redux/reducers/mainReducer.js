import ciudadesReducer from "./ciudadesReducer";
import userReducer from "./userReducer";
const { combineReducers } = require("redux");


const mainReducer = combineReducers({
    ciudades: ciudadesReducer,
    user: userReducer
})

export default mainReducer