import React, { useState, useEffect } from 'react'
// import axios from 'axios'
import RecipeList from '../components/RecipeList'
import Preloader from '../layout/Preloader'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { getRecipes } from '../actions/recipeActions'


const RecipePage = ({ recipe: { recipes, loading }, getRecipes }) => {

    // const [recipeInfo, setRecipeInfo] = useState([])
    // const [loading, setLoading] = useState(false)
    // const [errorMsg, setErrorMsg] = useState("")
    console.log(recipes)

    useEffect(() => {
        // const getRecipes = async () => {
        //     setLoading(true)
        //     const res = await axios.get('http://localhost:5000/posts')
        //     setRecipeInfo(res.data)
        //     setLoading(false)
        //     console.log(res.data)
        // }
        getRecipes()
        // eslint-disable-next-line
    }, [])

    if (loading || recipes === null) {
        return <h4><Preloader /></h4>
    }

    return (
        <>
            <ul className='collection with-header'>
                <li className='collection-header'>
                    <h4 className="center">Recipes</h4>
                </li>
                {!loading && recipes.length === 0 ? (<p className="center">No recipes to show...</p>) : (
                    recipes.map(info => <RecipeList recipe={info} key={info._id} />
                    ))}

            </ul>
        </>
    )
}

RecipePage.propTypes = {
    recipe: PropTypes.object.isRequired,
    getRecipes: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
    recipe: state.recipe
})
export default connect(mapStateToProps, { getRecipes })(RecipePage)
