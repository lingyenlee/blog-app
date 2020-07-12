import { GET_RECIPE, SET_LOADING, RECIPE_ERROR, ADD_RECIPE, VIEW_RECIPE } from './types'
import axios from 'axios'

//have to make asynchronous calls to the backend from here
//use redux thunk to return a function and then pass in the dispatch method into the function 
//then dispatch to the reducer
// export const getRecipes = () => {

//     return async (dispatch) => {
//         SET_LOADING();

//         const res = await axios.get('http://localhost:5000/posts')

//         dispatch({
//             type: GET_RECIPE,
//             payload: res.data
//         })
//     }

// }

//get recipes from reducers
export const getRecipes = () => async dispatch => {

    try {
        setLoading();
        const res = await axios.get('http://localhost:5000/posts')
        // console.log(res.data)

        const result = await dispatch({
            type: GET_RECIPE,
            payload: res.data
        })
        return result
    } catch (err) {
        // console.log(err.response)
        await dispatch({
            type: RECIPE_ERROR,
            payload: err.response
        })
    }
}

//no need asynchronous call
//set loading to true
export const setLoading = () => {
    //return to the reducer the action type of SET LOADING
    return {
        type: SET_LOADING
    }
}


//add recipe
export const addRecipes = (formData) => async dispatch => {

    try {
        const res = await axios.post('http://localhost:5000/posts/add', formData,
            {
                config: {
                    headers:
                    {
                        // 'Content-Type': 'multipart/form-data',
                        'Content-Type': 'application/json'
                    }
                }
            }

        )
        // console.log("res.data", res.data)
        const result = await dispatch({
            type: ADD_RECIPE,
            payload: res.data
        })
        return result
    } catch (err) {
        console.log(err.response.statusText)
        await dispatch({
            type: RECIPE_ERROR,
            payload: err.response.statusText
        })
    }
}

//view one recipe
export const viewRecipe = (recipeId) => async dispatch => {

    try {
        setLoading();
        const res = await axios.get(`http://localhost:5000/posts/${recipeId}`)
        console.log(res.data)

        const result = await dispatch({
            type: VIEW_RECIPE,
            payload: res.data
        })
        return result;

    } catch (error) {
        await dispatch({
            type: RECIPE_ERROR,
            payload: error.response
        })
    }
}

