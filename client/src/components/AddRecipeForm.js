import React, { useState } from 'react'
import InputList from './InputList'
import axios from 'axios'



const AddRecipeForm = () => {


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


    const { title, description, prepTime, cookTime, servingSize } = inputData;

    // handle input change
    const handleIngredientInput = (list) => {
        // console.log("list", list)
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

        // if (inputData === {} || ingredients === '' || method === '') {
        //     M.toast({ html: 'Please complete your recipe!' })
        // } else {
        //     console.log(inputData)
        // }

        //clear form
        setInputData({
            title: '',
            description: '',
            prepTime: '',
            cookTime: '',
            servingSize: '',
            foodImage: ''
        })
        setFile('')
        setIngredients('')
        setMethod('')

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
        <div id="add-recipe-modal" className="modal">
            <div className="modal-content">
                <h4>Add recipe</h4>
                <div className='row'>
                    <div className="input-field col s12">
                        <input
                            type="text"
                            name="title"
                            value={title}
                            onChange={handleChange}
                        />
                        <label htmlFor='title' className='active'>Title</label>
                    </div>
                </div>
                <div className='row'>
                    <div className="input-field">
                        <div className="input-field col s12">
                            <textarea
                                id="description"
                                className="materialize-textarea"
                                value={description}
                                name="description"
                                onChange={handleChange}
                            ></textarea>
                            <label htmlFor="description">Description</label>
                        </div>
                    </div>
                </div>
                <InputList
                    onInputChange={handleIngredientInput}
                    name="ingredients"
                    id="ingredients"
                />
                <InputList
                    onInputChange={handleMethodInput}
                    name="method"
                    id="method"
                />
                <div className='row'>
                    <div className="input-field col s4">
                        <input
                            type="number"
                            min={0}
                            name="prepTime"
                            value={prepTime}
                            onChange={handleChange}
                        />
                        <label htmlFor='prepTime' className='active'>Prep Time (in min)</label>
                    </div>
                    <div className="input-field col s4">
                        <input
                            type="number"
                            min={0}
                            name="cookTime"
                            value={cookTime}
                            onChange={handleChange}
                        />
                        <label htmlFor='prepTime' className='active'>Cooking Time (in min)</label>
                    </div>
                    <div className="input-field col s4">
                        <input
                            type="text"
                            name="servingSize"
                            value={servingSize}
                            onChange={handleChange}
                        />
                        <label htmlFor="ServingSize" className='active'>Serving Size</label>
                    </div>
                </div>
                <div className='row'>
                    <div className="file-field input-field">
                        <div className="btn">
                            <span>Upload Image</span>
                            <input
                                type="file"
                                name="foodImage"
                                onChange={handleFileChange}
                            ></input>
                        </div>
                        <div className="file-path-wrapper">
                            <input
                                className="file-path validate"
                                // value={props ? props.foodImage : ''}
                                type="text" />
                        </div>

                    </div>
                </div>
            </div>
            <div className="modal-footer">
                <button href="#!" onClick={handleSubmit} type="submit" className="modal-close waves-effect waves-green btn">
                    <i className="material-icons right">send</i>
                Enter</button>
            </div>
        </div>

    )
}

export default AddRecipeForm
