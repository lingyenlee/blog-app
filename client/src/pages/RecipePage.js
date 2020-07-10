// import React, { useState, useEffect } from 'react'
// import axios from 'axios'
// import Recipe from "../components/Recipe"
// // import {getRecipe} from '../utils/utils'

// const RecipePage = ({ match }) => {

//     const id = match.params.id

//     const [recipeInfo, setRecipeInfo] = useState([])
//     const [isLoading, setIsLoading] = useState(true)
//     // const [errorMsg, setErrorMsg] = useState("")

//     // const recipeData = getRecipe(id)

//     const getRecipe = async () => {
//         const res = await axios.get(`http://localhost:5000/posts/${id}`)
//         setRecipeInfo(res.data)
//         setIsLoading(!isLoading)
//     }

//     useEffect(() => {
//         getRecipe()
//         // eslint-disable-next-line
//     }, [])


//     return (
//         <>
//             {!isLoading ? (
//                 <Recipe recipeInfo={recipeInfo} />
//             )
//                 : <p>Loading data...</p>}
//         </>
//     )
// }

// export default RecipePage
