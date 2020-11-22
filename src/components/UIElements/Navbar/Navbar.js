import React from 'react'

import {Link} from "react-router-dom"
import Logo from '../../Images/Logo/Logo'
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ListAltIcon from '@material-ui/icons/ListAlt';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import './Navbar.css'

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="navbar__container">
                <div to="/" className="navbar__logo"><Logo/></div>
                <Link to="/signin" className="navbar__element">
                    <AccountCircleIcon/>
                    <p> Sign In</p>
                </Link>
                <Link to="/orders" className="navbar__element">
                    <ListAltIcon/>
                    <p> Order List</p>
                </Link>
                <Link to="/cart" className="navbar__element">
                    <ShoppingCartIcon/>
                    <p>Shop cart</p>
                </Link>
            </div>
        </div>
    )
}

export default Navbar
