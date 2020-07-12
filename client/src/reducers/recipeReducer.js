import { GET_RECIPE, SET_LOADING, RECIPE_ERROR, ADD_RECIPE, VIEW_RECIPE } from '../actions/types'

//create an initial state
const initialState = {
    recipe: null,
    current: null,
    loading: false,
    error: null
}

//reducer takes in the initial state and action and evalute the action using switch
export default (state = initialState, action) => {

    switch (action.type) {
        case GET_RECIPE:
            return {
                ...state,
                recipes: action.payload,
                loading: false
            };
        case ADD_RECIPE:
            console.log(action.payload)
            return {
                ...state,
                recipes: [...state.recipes, action.payload],
                loading: false
            }
        case VIEW_RECIPE:
            console.log("reducer", action.payload)
            return {
                recipes: action.payload,
                loading: false
            }
        case SET_LOADING:
            return {
                ...state,
                loading: true
            };
        case RECIPE_ERROR:
            console.error(action.payload)
            return {
                ...state,
                error: action.payload
            }
        default:
            return state;
    }
}