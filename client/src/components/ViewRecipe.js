import React, { useEffect } from 'react'
import Preloader from '../layout/Preloader'
// import 'materialize-css/dist/css/materialize.min.css';
// import M from 'materialize-css/dist/js/materialize.min.js';
import Moment from 'react-moment';
import { viewRecipe } from '../actions/recipeActions'
import { connect } from 'react-redux'
import BackBtn from '../layout/BackBtn'

const ViewRecipe = ({ viewRecipe, recipeId, recipe: { recipe, loading } }) => {


    // console.log("id", recipeId)
   
    useEffect(() => {
        //initialize materialize JS
        // M.AutoInit()
        viewRecipe(recipeId)
        
    }, [recipeId])



    if (loading || recipes === null) {
        return <h4><Preloader /></h4>
    }

    return (
        <>
            <div className="row">
                <BackBtn />
                <div className="col s12 m12">
                    <div className="card horizontal hoverable">
                        <div className="card-image">
                            <img src={recipes.foodImage} />
                        </div>
                        <div className="card-stacked">
                            <h2 className="card-title">{recipes.title}</h2>
                            {/* <div className="card-content">
                                <p>{recipes.description}</p>
                                <span>Prep: {recipes.prepTime} min </span>
                                <span>Cook: {recipes.cookTime} min </span>
                                <span>Serves: {recipes.servingSize} </span>
                                <p>Added on <Moment format='MMMM Do YYYY, h:mm:ss a'>{recipes.create_date}</Moment></p>
                            </div> */}
                        </div>
                    </div>
                    <div className="row">
                        {/* <div className="col s6">
                            <ul className="collection with-header">
                                <li className="collection header"><h4>Ingredients</h4></li>
                                {recipes.ingredients.map((item,i) =>
                                    <li className="collection-item" key={i}>{item}</li>
                                )}
                            </ul>
                        </div>
                        <div className="col s6">
                            <ul className="collection with-header">
                                <li className="collection header"><h4>Method</h4></li>
                                {recipes.method.map((item, i) => (
                                    <li className="collection-item" key={i}>Step {i + 1}. {item}</li>
                                ))}
                            </ul>
                        </div> */}
                    </div>
                </div>
            </div>
        </>
    )
}


const mapStateToProps = state => ({
    recipe: state.recipe
})

export default connect(mapStateToProps, { viewRecipe })(ViewRecipe)
