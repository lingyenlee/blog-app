import React, { useState } from 'react'
import { Row, Col } from 'react-materialize'
import InputList from './InputList'
import axios from 'axios'


const AddRecipeForm = () => {

    const [file, setFile] = useState('')
    const [inputData, setInputData] = useState({
        title: '',
        description: '',
        prepTime: 0,
        cookTime: 0,
        servingSize: '',
    })

    const { title, description, prepTime, cookTime, servingSize } = inputData;

    // handle input change
    const handleIngredientInput = (list) => {
        setInputData({ ...inputData, ingredients: list })
    };

    const handleMethodInput = (list) => {
        setInputData({ ...inputData, method: list })
    }


    const handleChange = e => {
        setInputData({ ...inputData, [e.target.name]: e.target.value })
    }

    const handleFileChange = e => {
        // console.log(e.target.name)
        setFile(e.target.files[0])
    }

    const handleSubmit = async e => {
        e.preventDefault()

        const formData = new FormData()
        formData.append('foodImage', file)
        // var data1 = DATA.indexList;
        // data1.map(group =>{
        //     formData.append(group.Label,);//How to get the input value here as a second parameter, so than i can pass the label name and corresponding value to form data.
        // });
        // for (let k in inputData) {
        //     formData.append(k, inputData[k])
        //     console.log(k, inputData[k])
        // }

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
                                name="ingredient"
                            />
                        </label>
                        <label>
                            <h5>Method</h5>
                            <InputList
                                onInputChange={handleMethodInput}
                                name="step"
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

export default AddRecipeForm
