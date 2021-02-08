import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../Images/Logo/Logo';
import { AnimatePresence, motion } from 'framer-motion';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ListAltIcon from '@material-ui/icons/ListAlt';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import './Navbar.css';
import { useStateValue } from '../../../StateProvider/StateProvider';
import SearchIcon from '@material-ui/icons/Search';
import Service from '../../../services/services';
import { responsiveFontSizes } from '@material-ui/core';

const Navbar = () => {
  const [state, dispatch] = useStateValue();
  const [category, setCategory] = useState('');

  const handleCategory = (event) => {
    setCategory(event.target.value);
  };

  const searchCategory = () => {
    Service.getAllProductsByCategory(category).then((response) => {
      console.log(response);
      dispatch({
        type: 'RETRIEVE_PRODUCTS',
        product: response.data,
      });
    });
  };

  let totalItems = state.cart.length;
  const signOut = () => {
    dispatch({
      type: 'LOGOUT',
    });
    alert('LOGGED OUT');
  };
  console.log(state);
  return (
    <div className='navbar'>
      <div className='navbar__container'>
        <div to='/' className='navbar__logo'>
          <Logo />
        </div>

        <div className='navbar__search'>
          <input
            className='navbar__input'
            type='text'
            id='category'
            name='category'
            placeholder='Enter Category Name'
            value={category}
            onChange={handleCategory}
          />
          <div className='navbar__searchIconDiv' onClick={searchCategory}>
            <SearchIcon className='navbar__searchicon' />
          </div>
        </div>

        <Link to='/cart' className='navbar__element'>
          <ShoppingCartIcon /> {totalItems}
        </Link>

        {state.currentUser.length === 1 ? (
          <Link to='/orders' className='navbar__element order__navbar'>
            <ListAltIcon />
            {/*<div className='navbar__elementText'>
              <div className='greet__text'>Returns and</div>
              <div>Order List</div>
        </div>*/}
          </Link>
        ) : (
          <div className='order__nav'></div>
        )}
        {state.currentUser.length === 1 ? (
          <div className='navbar__element' onClick={signOut}>
            <motion.div
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
              className='navbar__elementText order__nav'>
              <div className='greet__text'>
                Hello {state.currentUser[0].username}
              </div>
              <div>Sign Out</div>
            </motion.div>
            <AccountCircleIcon />
          </div>
        ) : (
          <Link to='/signin' className='navbar__element'>
            <motion.div
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
              className='navbar__elementText order__nav'>
              <div className='greet__text'>Hello Guest</div>
              <div>Sign In</div>
            </motion.div>

            <AccountCircleIcon />
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
