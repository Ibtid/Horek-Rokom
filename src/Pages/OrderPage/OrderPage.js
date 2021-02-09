import React, { useEffect } from 'react';
import ad from '../../Resources/Picture/Advertisement/images (1).jpg';
import title from '../../Resources/Picture/Advertisement/Recent.PNG';
import OrderList from '../../SharedComponents/OrderComponent/OrderList/OrderList';
import { useStateValue } from '../../StateProvider/StateProvider';
import Service from '../../services/services';

import './OrderPage.css';

const OrderPage = () => {
  const [state, dispatch] = useStateValue();

  useEffect(() => {
    retrieveOrders();
    retrieveOrderDetails();
  }, []);

  const retrieveOrders = () => {
    Service.getOrderById(state.currentUser[0].id).then((response) => {
      console.log(response.data);
      dispatch({
        type: 'CREATE_ORDER',
        order: response.data,
      });
    });
    console.log(state.order);
  };
  const retrieveOrderDetails = () => {
    Service.getOrderDetailsById(state.currentUser[0].id).then((response) => {
      console.log(response);
      dispatch({
        type: 'CREATE_ORDER_SUMMARY',
        orderDetails: response.data,
      });
    });
    console.log(state.orderDetails);
  };

  console.log(state.order);

  return (
    <div className='orderPage'>
      <div className='orderPage__container'>
        <div className='orderPage__TitleImageContainer'>
          <img
            className='orderPage__TitleImage'
            src={title}
            alt='RECENT ORDERS'
          />
        </div>
        <div className='orderPage__orderList'>
          {state.order.length === 0 ? (
            <div className='no__order'>No Orders Yet</div>
          ) : (
            <div>
              <OrderList />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default OrderPage;
