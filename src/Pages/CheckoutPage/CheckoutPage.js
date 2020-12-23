import React, { useState } from 'react';
import advert from '../../Resources/Picture/svg/undraw_online_payments_luau.svg';
import StripeCheckout from 'react-stripe-checkout';
import Button from '../../SharedComponents/UIElements/Buttons/Buttons';

import './CheckoutPage.css';
import { useStateValue } from '../../StateProvider/StateProvider';

const CheckoutPage = () => {
  const [state, dispatch] = useStateValue();

  const [product, setProduct] = useState({
    name: 'React from FB',
    price: 10,
    productBy: 'facebook',
  });

  const makePayment = (token) => {
    const body = {
      token,
      product,
    };
    const headers = {
      'Content-Type': 'application/json',
    };

    return fetch(`http://localhost:5000/payment`, {
      method: 'POST',
      headers,
      body: JSON.stringify(body),
    })
      .then((response) => {
        console.log('Response ', response);
        const { status } = response;
        console.log('STATUS ', status);
      })
      .catch((error) => console.log(error));
  };
  return (
    <div className='checkoutpage'>
      <div className='checkoutpage__container'>
        <h1 className='checkoutpage__greeting'>
          {`Hello ${state.currentUser[0].username}, please confirm your order.`}
        </h1>
        <div className='checkoutpage__body'>
          <div className='checkoutpage__imageContainer'>
            <img className='checkoutpage__image' src={advert} alt='svg' />
          </div>
          <div className='checkoutpage__userInfo'>
            <div className='checkoutpage__emailContainer'>
              <div className='checkoutpage__emailTitle'>E-mail:</div>
              <div className='checkoutpage__emailUser'>
                {state.currentUser[0].email}
              </div>
            </div>
            <div className='checkoutpage__inputSection'>
              <label className='checkoutpage__inputLabel' htmlFor='name'>
                Shipping Address:
              </label>
              <input
                type='text'
                className='checkoutpage__input'
                id='shipp'
                name='name'
                placeholder='Enter Shipping Address'
              />
            </div>
            <div className='checkoutpage__inputSection'>
              <label className='checkoutpage__inputLabel'>
                Billing Address:
              </label>
              <input
                type='text'
                className='checkoutpage__input'
                id='bill'
                name='name'
                placeholder='Enter Billing Address'
              />
            </div>
            <div className='checkoutpage__Button'>
              <StripeCheckout
                stripeKey='pk_test_51HZDOcHKFvH5Oe64NcisIbwlEP1GXpFzpIWKhNeM6Qj6rgbFsHfxwJNFHyFXXtkfSosJZsbq2hLBE1nUWJMOmyl700jMbS2Mwn'
                token={makePayment}
                name='Card Info'
                amount={product * 100}>
                <Button type='danger' message='Pay with card' />
              </StripeCheckout>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
