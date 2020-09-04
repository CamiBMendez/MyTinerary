import ciudadesReducer from "./ciudadesReducer";
const { combineReducers } = require("redux");

const mainReducer = combineReducers({
    ciudades: ciudadesReducer
})

export default mainReducer