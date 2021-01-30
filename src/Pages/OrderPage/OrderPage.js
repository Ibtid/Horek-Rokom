import React from 'react';
import ad from '../../Resources/Picture/Advertisement/images (1).jpg';
import title from '../../Resources/Picture/Advertisement/Recent.jpg';
import OrderList from '../../SharedComponents/OrderComponent/OrderList/OrderList';

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
        <div className='orderPage__TitleImageContainer'>
          <img
            className='orderPage__TitleImage'
            src={title}
            alt='RECENT ORDERS'
          />
        </div>
      </div>
    </div>
  );
};

export default OrderPage;
