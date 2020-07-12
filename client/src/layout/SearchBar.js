import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {

    return (
        <nav style={{ marginBottom: 30 }} className='green'>

            <div className="nav-wrapper">
                <Link to="/recipes" className="brand-logo center">Simply Recipes</Link>
                <form>
                    <div className="input-field">
                        <input id="search" type="search" />
                        <label className="label-icon" htmlFor="search"><i className="material-icons">search</i></label>
                        <i className="material-icons">close</i>

                    </div>
                </form>


            </div>
        </nav>
    )

}


export default NavBar

