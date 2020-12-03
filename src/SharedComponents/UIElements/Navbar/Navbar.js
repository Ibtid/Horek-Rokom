import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../Images/Logo/Logo';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ListAltIcon from '@material-ui/icons/ListAlt';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import './Navbar.css';
import { useStateValue } from '../../../StateProvider/StateProvider';

const Navbar = () => {
  const [state, dispatch] = useStateValue();

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
        {state.currentUser.length === 1 ? (
          <div className='navbar__element' onClick={signOut}>
            <AccountCircleIcon />
            <div className='navbar__elementText'>
              <div className='greet__text'>
                Hello {state.currentUser[0].username}
              </div>
              <div>Sign Out</div>
            </div>
          </div>
        ) : (
          <Link to='/signin' className='navbar__element'>
            <AccountCircleIcon />
            <div className='navbar__elementText'>
              <div className='greet__text'>Hello Guest</div>
              <div>Sign In</div>
            </div>
          </Link>
        )}
        <Link to='/orders' className='navbar__element'>
          <ListAltIcon />
          <div className='navbar__elementText'>
            <div className='greet__text'>Returns and</div>
            <div>Order List</div>
          </div>
        </Link>
        <Link to='/cart' className='navbar__element'>
          <ShoppingCartIcon />
          {totalItems}
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
