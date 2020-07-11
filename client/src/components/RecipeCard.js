import React, { useEffect } from 'react'
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';
import Moment from 'react-moment';


const RecipeCard = ({ recipe }) => {
    useEffect(() => {
        //initialize materialize JS
        M.AutoInit()
    })

    const { _id, ingredients, method, title, prepTime, cookTime, description, servingSize, foodImage, create_date } = recipe

    return (
        <div className="col s12 m6">
            <div className="card hoverable">
                <div className="card-image">
                    <img src={foodImage} />
                </div>

                <div className="card-content">
                    <span className="card-title grey-text text-darken-4">{title}</span>
                    <p>{description}</p>
                    <span>Prep: {prepTime} min </span>
                    <span>Cook: {cookTime} min </span>
                    <span>Serves: {servingSize} </span>
                    <p>Added on <Moment format='MMMM Do YYYY, h:mm:ss a'>{create_date}</Moment></p>
                </div>
                <div className="card-action">
                    <i className="material-icons grey-text">delete</i>
                    <a href="#edit-recipe-modal" className='modal-trigger'>
                        <i className="material-icons blue-text">edit</i>
                    </a>
                </div>
                <ul className="collapsible">
                    <li>
                        <div className="collapsible-header"><i className="material-icons">view_list</i>See recipe</div>
                        <div className="collapsible-body">
                            <span>
                                <ul className="collection with-header">
                                    <li className="collection header"><h4>Ingredients</h4></li>
                                    {ingredients.map((item, i) => (
                                        <li className="collection-item" key={i}>{item}</li>
                                    ))}
                                </ul>
                                <ul className="collection with-header">
                                    <li className="collection header"><h4>Method</h4></li>
                                    {method.map((item, i) => (
                                        <li className="collection-item" key={i}>Step {i + 1}. {item}</li>
                                    ))}
                                </ul>
                            </span>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default RecipeCard
