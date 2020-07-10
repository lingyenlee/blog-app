import React from 'react'



const RecipeCard = ({ recipe }) => {


    const { _id, ingredients, method, title, prepTime, cookTime, description, servingSize, foodImage } = recipe

    return (
        <>
            <div className="card">
                <div className="card-image waves-effect waves-block waves-light">
                    <img className="activator" src={foodImage} />
                </div>
                <div className="card-content">
                    <span class="card-title activator grey-text text-darken-4">{title}<i class="material-icons right">more_vert</i></span>

                    <p>{description}</p>
                    <p>Prep: {prepTime} min</p>
                    <p>Cook: {cookTime} min</p>
                    <p>Serves: {servingSize}</p>
                </div>
                <div class="card-reveal">
                    <span class="card-title grey-text text-darken-4">Card Title<i class="material-icons right">close</i></span>
                    <p>Here is some more information about this product that is only revealed once clicked on.</p>
                </div>

                <div className="card-action">
                    <i className="material-icons">delete</i>

                </div>
            </div>

          
        </>
    )
}

export default RecipeCard
