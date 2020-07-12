import React, { useEffect } from 'react'
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';
import Moment from 'react-moment';
import { Link } from 'react-router-dom'


const RecipeList = ({ recipe }) => {
    // console.log(recipe)
    useEffect(() => {
        //initialize materialize JS
        M.AutoInit()
    })

    const { _id, title, prepTime, cookTime, description, servingSize, create_date } = recipe

    return (

        <li className='collection-item'>
            <div>
                <h5 className="grey-text">{title}</h5>
                <span>
                    <span className="black-text">{description}</span>
                    <br />
                    <span><i>Prep: {prepTime} min</i> </span>
                    <span><i>Cook: {cookTime} min</i> </span>
                    <span><i>Serves: {servingSize}</i> </span>
                    <br />
                    <span>Added on <Moment format='MMMM Do YYYY, h:mm:ss a'>{create_date}</Moment></span>
                </span>
                <span className="icons-wrapper">
                    <a href="#!" className='secondary-content'>
                        <i className="material-icons red-text">delete</i>
                    </a>
                    <Link to={`/recipes/${_id}`} className="secondary-content">
                        <i className="material-icons -text">visibility</i>
                    </Link>
                </span>
            </div>
        </li>
        // <div className="col s12 m6">
        //     <div className="card hoverable">
        //         <div className="card-image">
        //             <img src={foodImage} />
        //         </div>

        //         <div className="card-content">
        //           
        //            
        //            
        //         </div>
        //         <div className="card-action">
        //           
        //             <a href="#edit-recipe-modal" className='modal-trigger'>
        //                 <i className="material-icons blue-text">edit</i>
        //             </a>
        //         </div>
        //         <ul className="collapsible">
        //             <li>
        //                 <div className="collapsible-header"><i className="material-icons">view_list</i>See recipe</div>
        //                 <div className="collapsible-body">
        //                     <span>
        //                         <ul className="collection with-header">
        //                             <li className="collection header"><h4>Ingredients</h4></li>
        //                             {ingredients.map((item, i) => (
        //                                 <li className="collection-item" key={i}>{item}</li>
        //                             ))}
        //                         </ul>
        //                         <ul className="collection with-header">
        //                             <li className="collection header"><h4>Method</h4></li>
        //                             {method.map((item, i) => (
        //                                 <li className="collection-item" key={i}>Step {i + 1}. {item}</li>
        //                             ))}
        //                         </ul>
        //                     </span>
        //                 </div>
        //             </li>
        //         </ul>
        //     </div>
        // </div>
    )
}

export default RecipeList
