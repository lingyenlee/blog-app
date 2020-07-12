import React from 'react'
import { withRouter } from 'react-router'

const BackBtn = (props) => {

    const handleBackClick = () => {
        console.log(props)
        props.history.goBack()
    }

    return (
        <div>
            <button className="btn blue" onClick={handleBackClick}>
                <i className="material-icons" >navigate_before<span>Back</span></i>
            </button>

        </div>
    )
}

export default withRouter(BackBtn)
