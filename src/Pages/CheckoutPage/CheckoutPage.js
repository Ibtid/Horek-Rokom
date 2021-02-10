import React, { useState } from 'react';
import advert from '../../Resources/Picture/svg/undraw_online_payments_luau (1).svg';
import StripeCheckout from 'react-stripe-checkout';
import Button from '../../SharedComponents/UIElements/Buttons/Buttons';
import { v4 as uuidv4 } from 'uuid';
import { useHistory } from 'react-router-dom';
import './CheckoutPage.css';
import { useStateValue } from '../../StateProvider/StateProvider';
import Service from '../../services/services';

const CheckoutPage = () => {
  let history = useHistory();
  const [address, setaddress] = useState();
  const orderid = uuidv4();
  const [
    { orderDetails, order, cart, cartSummary, currentUser },
    dispatch,
  ] = useStateValue();

  const handleAddress = (event) => {
    setaddress(event.target.value);
  };

  const createOrder = () => {
    var data = {
      /*orderID: orderid,*/
      userID: currentUser[0].id,
      address: address,
      totalItem: cart.length,
      totalPrice: cartSummary.total,
      delievered: 'Not Delivered',
    };
    Service.addOrder(data).then((response) => {
      console.log(response);
    });
    cart.map((cart) => {
      var data = {
        productID: cart.id,
        userID: currentUser[0].id,
      };
      Service.addOrderDetails(data).then((response) => {
        console.log(response);
      });
    });
  };

  const emptyCart = () => {
    dispatch({
      type: 'EMPTY_CART',
    });
  };

  const makePayment = (token) => {
    const body = {
      token,
      cartSummary,
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
        createOrder();
        emptyCart();
        history.push('/orders');
        /*if (status === 200) {
          createOrder();
          emptyCart();
          history.push('/orders');
        }*/
      })
      .catch((error) => console.log(error));
  };
  return (
    <div className='checkoutpage'>
      <div className='checkoutpage__container'>
        <h1 className='checkoutpage__greeting'>
          {`Hello ${currentUser[0].username}, please confirm your order.`}
        </h1>
        <div className='checkoutpage__body'>
          <div className='checkoutpage__imageContainer'>
            <img className='checkoutpage__image' src={advert} alt='svg' />
          </div>
          <div className='checkoutpage__userInfo'>
            <div className='checkoutpage__emailContainer'>
              <div className='checkoutpage__emailTitle'>E-mail:</div>
              <div className='checkoutpage__emailUser'>
                {currentUser[0].email}
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
                value={address}
                onChange={handleAddress}
              />
            </div>
            <div className='checkoutpage__Button'>
              <StripeCheckout
                stripeKey='pk_test_51HZDOcHKFvH5Oe64NcisIbwlEP1GXpFzpIWKhNeM6Qj6rgbFsHfxwJNFHyFXXtkfSosJZsbq2hLBE1nUWJMOmyl700jMbS2Mwn'
                token={makePayment}
                name='Card Info'
                currency='BDT'
                amount={cartSummary.total * 100}>
                <Button
                  type='danger'
                  message='Pay with card'
                  //onClick={createOrder}
                />
              </StripeCheckout>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
