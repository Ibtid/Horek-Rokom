import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../Images/Logo/Logo';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ListAltIcon from '@material-ui/icons/ListAlt';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import './Navbar.css';
import { useStateValue } from '../../../StateProvider/StateProvider';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [state] = useStateValue();

  let totalItems = state.cart.length;
  console.log(state.cart);

  return (
    <div className='navbar'>
      <div className='navbar__container'>
        <div to='/' className='navbar__logo'>
          <Logo />
        </div>
        <Link to='/signin' className='navbar__element'>
          <AccountCircleIcon />
          <p> Sign In</p>
        </Link>
        <Link to='/orders' className='navbar__element'>
          <ListAltIcon />
          <p> Order List</p>
        </Link>
        <motion.div></motion.div>
        <Link to='/cart' className='navbar__element'>
          <ShoppingCartIcon />
          {totalItems}
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
