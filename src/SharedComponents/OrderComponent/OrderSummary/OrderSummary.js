import { motion } from 'framer-motion';
import React, { useState } from 'react';
import OrderDetails from '../OrderDetails/OrderDetails';
import './OrderSummary.css';

const OrderSummary = (props) => {
  const [showOrderDetails, setShowOrderDetails] = useState(false);

  var productsDisplay = showOrderDetails ? 'orderDetails' : 'NO_DETAILS';
  var collapsed = showOrderDetails ? 'not__collapsed' : 'collapsed';

  const switchOrderDetails = () => {
    setShowOrderDetails(!showOrderDetails);
  };

  return (
    <motion.div
      className='orderSummary'
      animate={{ scale: 0.93, opacity: 1 }}
      transition={{ duration: 0.3 }}
      whileHover={{ scale: 0.96 }}
      whileTap={{ scale: 0.9 }}
      onClick={switchOrderDetails}>
      <div className='orderSummary__container'>
        <div className='orderSummary__orderInfo'>
          <div className='orderSummary__segment'>
            <div className='orderSummary__title'>Order ID:</div>
            <div className='orderSummary__orderID'>{props.orderID}</div>
          </div>
          <div className='orderSummary__segment'>
            <div className='orderSummary__title'>Date:</div>
            <div className='orderSummary__date'>{props.date}</div>
          </div>
        </div>
        <div className='orderSummary__orderInfo'>
          <div className='orderSummary__segment'>
            <div className='orderSummary__title'>Customer ID:</div>
            <div className='orderSummary__orderID'>{props.userID}</div>
          </div>
          <div className='orderSummary__segment'>
            <div className='orderSummary__title'>Amount:</div>
            <div className='orderSummary__date'>${props.totalPrice}</div>
          </div>
        </div>
        <div className='orderSummary__orderInfo'>
          <div className='orderSummary__segment'>
            <div className='orderSummary__title'>Address:</div>
            <div className='orderSummary__orderID'>{props.address}</div>
          </div>
          <div className='orderSummary__segment'>
            <div className='orderSummary__title'>Purchased:</div>
            <div className='orderSummary__date'>x{props.items}</div>
          </div>
        </div>
        <div className={`orderSummary__orderDetails ${collapsed}`}>
          <OrderDetails
            productsDisplay={productsDisplay}
            orderID={props.orderID}
          />
        </div>
      </div>
    </motion.div>
  );
};

export default OrderSummary;
