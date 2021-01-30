import React from 'react';
import './OrderList.css';
import OrderSummary from '../OrderSummary/OrderSummary';
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
      </div>
    </div>
  );
};

export default OrderList;
