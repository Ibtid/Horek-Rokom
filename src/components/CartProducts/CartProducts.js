import React from 'react';
import './CartProducts.css';
import TravelBag from '../../Resources/Picture/Products/TravelBag.jpg';
import Button from '../UIElements/Buttons/Buttons';

const CartProducts = (props) => {
  return (
    <div className='cartProducts'>
      <div className='cartProducts__card'>
        <div className='cartProducts__imageContainer'>
          <img
            className='cartProducts__image'
            src={props.image}
            alt='product'
          />
        </div>
        <div className='cartProducts__info'>
          <div className='cartProducts__title'>{props.title}</div>
          <div className='cartProducts__price'>Price ${props.price}</div>
          <div className='cartProducts__buttons'>
            <Button type='danger' message='Remove' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartProducts;
