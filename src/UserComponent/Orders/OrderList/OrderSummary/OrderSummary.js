import React from 'react';
import './OrderSummary.css';

const OrderSummary = () => {
  const DUMMY_ORDER = {
    orderID: 12121,
    userID: 'Ibtidibtidrahman@iut-dhaka.edu',
    address: 'Dhaka,Bangladesh',
    items: 6,
    totalPrice: 244,
    date: '11/11/11',
  };
  return (
    <div className='orderSummary'>
      <div className='orderSummary__container'>
        <div className='orderSummary__orderInfo'>
          <div className='orderSummary__segment'>
            <div className='orderSummary__title'>Order ID:</div>
            <div className='orderSummary__orderID'>{DUMMY_ORDER.orderID}</div>
          </div>
          <div className='orderSummary__segment'>
            <div className='orderSummary__title'>Date:</div>
            <div className='orderSummary__date'>{DUMMY_ORDER.date}</div>
          </div>
        </div>
        <div className='orderSummary__orderInfo'>
          <div className='orderSummary__segment'>
            <div className='orderSummary__title'>Customer ID:</div>
            <div className='orderSummary__orderID'>{DUMMY_ORDER.userID}</div>
          </div>
          <div className='orderSummary__segment'>
            <div className='orderSummary__title'>Amount:</div>
            <div className='orderSummary__date'>${DUMMY_ORDER.totalPrice}</div>
          </div>
        </div>
        <div className='orderSummary__orderInfo'>
          <div className='orderSummary__segment'>
            <div className='orderSummary__title'>Address:</div>
            <div className='orderSummary__orderID'>{DUMMY_ORDER.address}</div>
          </div>
          <div className='orderSummary__segment'>
            <div className='orderSummary__title'>Purchased:</div>
            <div className='orderSummary__date'>x{DUMMY_ORDER.items}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderSummary;
