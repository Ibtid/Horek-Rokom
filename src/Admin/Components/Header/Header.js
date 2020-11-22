import React from 'react'
import Logo from '../../../components/Images/Logo/Logo'
import "./Header.css"

const Header = () => {
    return (
        <div className = "header">
            <div className = "header__logo">
                <Logo/>
            </div>
        </div>
    )
}

export default Header
