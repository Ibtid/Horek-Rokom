import React from 'react';
import './OrderList.css';
import OrderSummary from './OrderSummary/OrderSummary';

const OrderList = () => {
  return (
    <div className='orderList'>
      <h1 className='orderList__header'>Recent Orders</h1>
      <div className='orderList__orderSummary'>
        <OrderSummary />
        <OrderSummary />
        <OrderSummary />
      </div>
    </div>
  );
};

export default OrderList;
