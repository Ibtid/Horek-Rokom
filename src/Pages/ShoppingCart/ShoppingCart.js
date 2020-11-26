import React from 'react';
import CartProductsList from '../../UserComponent/CartProducts/CartProductsList';
import Banner from '../../Resources/Picture/HomeBanner/CartBanner.png';
import './ShoppingCart.css';
import CartSummary from '../../UserComponent/CartProducts/CartSummary/CartSummary';

const ShoppingCart = () => {
  return (
    <div className='shoppingCart'>
      <div className='shoppingCart__container'>
        <div className='shoppingCart__bannerContainer'>
          <img className='shoppingCart__banner' src={Banner} alt='banner' />
        </div>
        <div className='shoppingCart__main'>
          <div className='shoppingCart__List'>
            <div className='shoppingCart__ListPresent'>
              <CartProductsList />
            </div>
          </div>
          <div className='shoppingCart__summary'>
            <CartSummary />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;
