import React from 'react';
import './OrderProducts.css';
import test from '../../../Resources/Picture/Products/NikonLens.jpg';
const OrderProducts = (props) => {
  return (
    <div className='orderproduct__card'>
      <div className='product__imageContainer'>
        <img className='product__image' src={props.image} alt='product.png' />
      </div>
      <div className='product__footer'>
        <div className='product__info'>
          <div className='product__name'>{props.name}</div>
          <div className='product__price'>Price: ${props.price}</div>
        </div>
      </div>
    </div>
  );
};

export default OrderProducts;
