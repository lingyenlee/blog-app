import React, { useState, useEffect } from 'react'
import axios from 'axios'
import RecipeCard from './RecipeCard'

// import { Row, Col, Card, CardTitle, Icon, Link } from 'react-materialize'
//import { Link } from 'react-router-dom';

const Recipes = () => {

    const [recipeInfo, setRecipeInfo] = useState([])
    const [loading, setLoading] = useState(false)
    // const [errorMsg, setErrorMsg] = useState("")

    const getRecipes = async () => {
        setLoading(true)
        const res = await axios.get('http://localhost:5000/posts')
        console.log(res.data)
        setRecipeInfo(res.data)
        setLoading(false)
    }

    useEffect(() => {
        getRecipes()
        // eslint-disable-next-line
    }, [])

    if (loading) {
        return <h4>Loading...</h4>
    }

    return (
        <>
            <div className="col s12 m7">
                <h2 className="header center">My recipes</h2>

                {!loading && recipeInfo.length === 0 ? (<p className="center">No recipes to show...</p>) : (
                    recipeInfo.map(info => <RecipeCard recipe={info} key={info._id} />
                    ))}
            </div>
            <a class="waves-effect waves-light btn modal-trigger" href="#modal1">Modal</a>
            <div id="modal1" className="modal">
                <div class="modal-content">
                    <h4>Modal Header</h4>
                    <p>A bunch of text</p>
                </div>
                <div class="modal-footer">
                    <a href="#!" className="modal-close waves-effect waves-green btn-flat">Agree</a>
                </div>
            </div>
        </>
    )
}

export default Recipes
