import React from 'react'
import { TextInput, Row, Col } from 'react-materialize'


const AddRecipeForm = () => {


    return (
        <div id="add-form">
            <form>
                <label>
                    Name:
                 <input type="text" name="name" />
                </label>
            </form>

        </div>
    )
}

export default AddRecipeForm
