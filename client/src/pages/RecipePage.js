import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Recipe from "../components/Recipe"

const RecipePage = ({ match }) => {

    const id = match.params.id

    const [recipe, setRecipe] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [errorMsg, setErrorMsg] = useState("")


    const getRecipe = async () => {
        const res = await axios.get(`http://localhost:5000/posts/${id}`)
        setRecipe(res.data)
        console.log(res.data)
        setIsLoading(!isLoading)
    }

    useEffect(() => {
        getRecipe()
    }, [])


    return (
        <>
            {!isLoading ? (
             <Recipe recipe={recipe} /> 
            )
             : <p>Loading data...</p>}
        </>
    )
}

export default RecipePage
