//root reducer file
import { combineReducers } from 'redux'
import recipeReducer from './recipeReducer'

//put all other reducers in here
export default combineReducers({
    recipe: recipeReducer
})