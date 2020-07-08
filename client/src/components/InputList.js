import React, { useState } from "react";

const InputList = ({ onInputChange, name }) => {

    const [inputList, setInputList] = useState([{}]);

    // handle click event of the Remove button
    const handleRemoveClick = index => {
        const list = [...inputList];
        list.splice(index, 1);
        setInputList(list);
    };

    // handle click event of the Add button
    const handleAddClick = () => {
        setInputList([...inputList, {}]);
    };

    const handleChange = (e, index) => {
        const { name, value } = e.target;
        const list = [...inputList];
        list[index][name] = value;
        setInputList(list)
        onInputChange(inputList)
        console.log("inputList component", inputList)

    }

    return (
        <div>
            {inputList.map((x, i) => {
                return (
                    <div className="input-box" key={i}>
                        <input
                            type="text"
                            name={name}
                            placeholder={`Enter ${name}`}
                            value={x.inputText}
                            onChange={(e) => handleChange(e, i)}
                        />

                        <div className="btn-box">
                            {inputList.length - 1 === i &&
                                <i className="material-icons" onClick={() => handleAddClick()} >add_circle</i>}
                            {inputList.length !== 1 &&
                                <i className="material-icons" onClick={() => handleRemoveClick(i)}>delete</i>}
                        </div>
                    </div>
                );
            })}

            <div style={{ marginTop: 20 }}>{JSON.stringify(inputList)}</div>

        </div>
    );
}

export default InputList