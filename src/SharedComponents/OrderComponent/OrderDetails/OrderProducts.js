import React from 'react';
import './OrderProducts.css';
import test from '../../../Resources/Picture/Products/NikonLens.jpg';
const OrderProducts = (props) => {
  return (
    <div className='orderproduct__card'>
      <div className='orderproduct__imageContainer'>
        <img
          className='orderproduct__image'
          src={props.image}
          alt='product.png'
        />
      </div>
      <div className='product__footer'>
        <div className='orderproduct__info'>
          <div className='orderproduct__name'>{props.name}</div>
          <div className='orderproduct__price'>Tk. {props.price}</div>
        </div>
      </div>
    </div>
  );
};

export default OrderProducts;
