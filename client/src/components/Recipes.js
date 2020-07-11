import React, { useState, useEffect } from 'react'
import axios from 'axios'
import RecipeCard from './RecipeCard'
import Preloader from '../layout/Preloader'

// import { Row, Col, Card, CardTitle, Icon, Link } from 'react-materialize'
//import { Link } from 'react-router-dom';

const Recipes = () => {

    const [recipeInfo, setRecipeInfo] = useState([])
    const [loading, setLoading] = useState(false)
    // const [errorMsg, setErrorMsg] = useState("")



    useEffect(() => {
        const getRecipes = async () => {
            setLoading(true)
            const res = await axios.get('http://localhost:5000/posts')
            setRecipeInfo(res.data)
            setLoading(false)
            console.log(res.data)
        }
        getRecipes()
        // eslint-disable-next-line
    }, [])

    if (loading) {
        return <h4><Preloader /></h4>
    }

    return (
        <>
            <div className="row">
                <div className="col s12">
                    <h3 className="header center">My recipes</h3>
                    {!loading && recipeInfo.length === 0 ? (<p className="center">No recipes to show...</p>) : (
                        recipeInfo.map(info => <RecipeCard recipe={info} key={info._id} />
                        ))}
                </div>
            </div>
        </>
    )
}

export default Recipes
