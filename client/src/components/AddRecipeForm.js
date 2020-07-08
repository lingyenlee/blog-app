import React, { useState } from 'react'
import { Row, Col } from 'react-materialize'
import InputList from './InputList'


const AddRecipeForm = () => {

    const [formData, setFormData] = useState({
        title: '',
        description: '',
        ingredients: [],
        method: [],
        prepTime: 0,
        cookTime: 0,
        servingSize: '',
        foodImage: null
    })

    // handle input change
    const handleIngredientInput = (list) => {
        setFormData({ ...formData, ingredients: list })
    };

    const handleMethodInput = (list) => {
        setFormData({ ...formData, method: list })
        // console.log("formData", formData)
        // console.log("inadd", list)
    }


    const { title, description, prepTime, cookTime, servingSize, foodImage } = formData;


    const handleChange = e => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const handleSubmit = e => {
        e.preventDefault()
        // console.log(formData)
    }

    return (

        <div id="add-form">
            <Row>
                <Col s={6} className="offset-s3">
                    <h3>Add your recipe</h3>
                    <form onSubmit={handleSubmit}>
                        <label>
                            <h5>Title</h5>
                        </label>
                        <input
                            type="text"
                            name='title'
                            value={title}
                            onChange={handleChange}
                        />
                        <label>
                            <h5>Description</h5>
                        </label>
                        <textarea
                            type="text"
                            name="description"
                            value={description}
                            onChange={handleChange}
                        />
                        <label>
                            <h5>Ingredients</h5>
                            <InputList
                                onInputChange={handleIngredientInput}
                                name="ingredient"
                            />
                        </label>
                        <label>
                            <h5>Method</h5>
                            <InputList
                                onInputChange={handleMethodInput}
                                name="method"
                            />
                        </label>

                        <label>
                            <h5>Prep Time (in min)</h5>
                        </label>
                        <input
                            type="number"
                            min={0}
                            name='prepTime'
                            value={prepTime}
                            onChange={handleChange}
                        />
                        <label>
                            <h5>Cooking Time (in min)</h5>
                        </label>
                        <input
                            type="number"
                            min={0}
                            name="cookTime"
                            value={cookTime}
                            onChange={handleChange}

                        />
                        <label>
                            <h5>Serving Size</h5>
                        </label>
                        <input
                            type="text"
                            name='servingSize'
                            value={servingSize}
                            onChange={handleChange}
                        />
                        <label>
                            <h5>Upload an image</h5>
                        </label>
                        <div className="file-field input-field">
                            <div className="btn">
                                <span>Image</span>
                                <input
                                    type="file"
                                />
                            </div>
                            <div className="file-path-wrapper">
                                <input className="file-path validate" type="text" />
                            </div>
                        </div>
                        <button className="btn waves-effect waves-light" type="submit" name="action">
                            Submit
                            <i className="material-icons right">send</i>
                        </button>
                    </form>
                </Col>
            </Row>
        </div>
    )
}

export default AddRecipeForm
