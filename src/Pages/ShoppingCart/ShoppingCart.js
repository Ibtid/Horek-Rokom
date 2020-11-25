import React from 'react';
import CartProductsList from '../../components/CartProducts/CartProductsList';
import Banner from '../../Resources/Picture/HomeBanner/CartBanner.png';
import './ShoppingCart.css';

const ShoppingCart = () => {
  return (
    <div className='shoppingCart'>
      <div className='shoppingCart__container'>
        <div className='shoppingCart__List'>
          <div className='shoppingCart__bannerContainer'>
            <img className='shoppingCart__banner' src={Banner} alt='banner' />
          </div>
          <div className='shoppingCart__ListTitle'>
            <h1>Here is Your Cart</h1>
          </div>
          <div className='shoppingCart__ListPresent'>
            <CartProductsList />
          </div>
        </div>
        <div className='shoppingCart__summary'>
          <h1>SUMMARY</h1>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;
