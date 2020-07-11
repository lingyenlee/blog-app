import React, { useState } from "react";

const InputList = ({ onInputChange, id, name }) => {

    const [inputList, setInputList] = useState([{}]);
    // const [currentList, setCurrentList] = useState([value])

    // useEffect(() => {
    //     if (items) {
    //         setInputList([items])
    //     }
    // }, [items])

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

    }

    return (
        <div>
            {inputList.map((x, i) => {
                return (
                    <div className='row' key={i}>
                        <div className="input-field">
                            <div className="input-field col s11">
                                <textarea
                                    id={id}
                                    className="materialize-textarea"
                                    value={x.name}
                                    name={name}
                                    onChange={(e) => handleChange(e, i)}
                                ></textarea>
                                <label>{name==='ingredients' ? "Add an ingredient" : "Add a method"}</label>
                            </div>
                            {inputList.length - 1 === i &&
                                <i className="material-icons" onClick={() => handleAddClick()} >add_circle</i>}
                            {inputList.length !== 1 &&
                                <i className="material-icons" onClick={() => handleRemoveClick(i)}>delete</i>}
                        </div>
                    </div>
                )
            })}

            {/* <div style={{ marginTop: 20 }}>{JSON.stringify(inputList)}</div> */}
        </div>
    );
}

export default InputList