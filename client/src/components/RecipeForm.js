import React, { useState, useEffect } from 'react'
import { Row, Col } from 'react-materialize'
import InputList from './InputList'
import axios from 'axios'


const RecipeForm = () => {


    // const [current, setCurrent] = useState({})

    // const getRecipe = async () => {
    //     const res = await axios.get(`http://localhost:5000/posts/${recipeId}`)
    //     setCurrent(res.data)
    //     console.log(res.data)
    // }

    // useEffect(() => {
    //     if (recipeId) {
    //         getRecipe()
    //     }

    // }, [recipeId])

    const [file, setFile] = useState('')
    const [ingredients, setIngredients] = useState('')
    const [method, setMethod] = useState('')
    const [inputData, setInputData] = useState({
        title: '',
        description: '',
        prepTime: '',
        cookTime: '',
        servingSize: '',
        foodImage: ''
    })

    const { title, description, prepTime, cookTime, servingSize} = inputData;

    // handle input change
    const handleIngredientInput = (list) => {
        // setInputData({ ...inputData, ingredients: list })
        setIngredients(list)
    };

    const handleMethodInput = (list) => {
        // setInputData({ ...inputData, method: list })
        setMethod(list)
    }

    const handleChange = e => {
        setInputData({ ...inputData, [e.target.name]: e.target.value })
    }

    const handleFileChange = e => {
        // console.log(e.target.name)
        const file = e.target.files[0];
        setFile(file)
    }

    const handleSubmit = async e => {
        e.preventDefault()

        const formData = new FormData()
        formData.append('foodImage', file) //appending file

        for (let k in inputData) {
            formData.append(k, inputData[k])
        }

        for (let i = 0; i < ingredients.length; i++) {
            // console.log(ingredient[i].ingredient)
            formData.append('ingredients[]', ingredients[i].ingredients);
        }

        for (let i = 0; i < method.length; i++) {
            // console.log(method[i].step)
            formData.append('method[]', method[i].method);
        }

        // console.log(formData)
        try {
            const res = await axios.post('http://localhost:5000/posts/add', formData,
                {
                    headers: {
                        // 'Content-Type': 'application/json'
                        'Content-Type': 'multipart/form-data'
                    },
                })
            console.log(res.data)
        } catch (error) {
            console.log(error)
        }
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
                            name="title"
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
                                name="ingredients"
                                items="name"
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
                            value={prepTime }
                            onChange={handleChange}
                        />
                        <label>
                            <h5>Cooking Time (in min)</h5>
                        </label>
                        <input
                            type="number"
                            min={0}
                            name="cookTime"
                            value={cookTime } 
                            onChange={handleChange}

                        />
                        <label>
                            <h5>Serving Size</h5>
                        </label>
                        <input
                            type="text"
                            name='servingSize'
                            value={servingSize }
                            onChange={handleChange}
                        />
                        <label>
                            <h5>Upload an image</h5>
                        </label>
                        <div className="file-field input-field">
                            <div className="btn">
                                <span>Choose</span>
                                <input
                                    type="file"
                                    name="foodImage"
                                    onChange={handleFileChange}
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

export default RecipeForm
