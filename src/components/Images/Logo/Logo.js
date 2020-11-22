import React from 'react'
import { Link } from 'react-router-dom'
import logo from "../../../Resources/Picture/Logo/Capture1.PNG"

import "./Logo.css"

const Logo = () => {
    return (
        <div className = "logo">
            <Link to="/" className = "logo__container">
                <img className = "logo__image" src={logo} alt="logo"/>
            </Link>
        </div>
    )
}

export default Logo
