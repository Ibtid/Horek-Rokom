import React from 'react';
import './OrderList.css';
import OrderSummary from '../OrderSummary/OrderSummary';
import { useStateValue } from '../../../StateProvider/StateProvider';

const OrderList = () => {
  const [state, dispatch] = useStateValue();
  console.log(state.order[0]);

  return (
    <div className='orderList'>
      <div className='orderList__orderSummary'>
        {state.order[0]?.map((orders) => (
          <OrderSummary
            key={orders.orderID}
            orderID={orders.orderID}
            userID={orders.userID}
            address={orders.address}
            items={orders.totalItem}
            totalPrice={orders.totalPrice}
            date={orders.orderDate}
          />
        ))}
      </div>
    </div>
  );
};

export default OrderList;
