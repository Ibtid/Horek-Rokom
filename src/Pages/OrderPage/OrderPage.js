import React from 'react';
import ad from '../../Resources/Picture/Advertisement/images (1).jpg';
import OrderList from '../../UserComponent/Orders/OrderList/OrderList';

import './OrderPage.css';

const OrderPage = () => {
  return (
    <div className='orderPage'>
      <div className='orderPage__container'>
        <div className='orderPage__orderList'>
          <div className='orderPage__ad'>
            <img className='orderPage__image' src={ad} alt='' />
          </div>
          <div>
            <OrderList />
          </div>
        </div>
        <div className='orderPage__orderItems'>Ordered Items</div>
      </div>
    </div>
  );
};

export default OrderPage;
