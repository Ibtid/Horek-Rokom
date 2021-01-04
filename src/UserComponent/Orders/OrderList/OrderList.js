import React from 'react';
import './OrderList.css';
import OrderSummary from './OrderSummary/OrderSummary';
import { useStateValue } from '../../../StateProvider/StateProvider';

const OrderList = () => {
  const [state, dispatch] = useStateValue();
  return (
    <div className='orderList'>
      <div className='orderList__orderSummary'>
        {state.order.map((orders) => (
          <OrderSummary
            orderID={orders.orderID}
            userID={orders.userID}
            address={orders.address}
            items={orders.items}
            totalPrice={orders.totalPrice}
            date={orders.date}
          />
        ))}
        <OrderSummary
          orderID='180042143'
          userID='4138'
          address='Uttara,Dhaka-1230'
          items='6'
          totalPrice='1000'
          date='03/02/2021'
        />
        <OrderSummary
          orderID='180042143'
          userID='4138'
          address='Uttara,Dhaka-1230'
          items='6'
          totalPrice='1000'
          date='03/02/2021'
        />
        <OrderSummary
          orderID='180042143'
          userID='4138'
          address='Uttara,Dhaka-1230'
          items='6'
          totalPrice='1000'
          date='03/02/2021'
        />
        <OrderSummary
          orderID='180042143'
          userID='4138'
          address='Uttara,Dhaka-1230'
          items='6'
          totalPrice='1000'
          date='03/02/2021'
        />
      </div>
    </div>
  );
};

export default OrderList;
