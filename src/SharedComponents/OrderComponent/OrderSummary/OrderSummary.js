import { motion } from 'framer-motion';
import React, { useState } from 'react';
import OrderDetails from '../OrderDetails/OrderDetails';
import Button from '../../UIElements/Buttons/Buttons';
import Service from '../../../services/services';
import { useStateValue } from '../../../StateProvider/StateProvider';
import CancelIcon from '@material-ui/icons/Cancel';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import './OrderSummary.css';

const OrderSummary = (props) => {
  const [showOrderDetails, setShowOrderDetails] = useState(false);

  const [state, dispatch] = useStateValue();

  var showButton = props.isAdmin ? 'No' : 'Yes';

  var deliverIcon =
    props.delivered === 'Not Delivered' ? <CancelIcon /> : <CheckCircleIcon />;

  var deliverStatus =
    props.delivered === 'Not Delivered' ? 'Red__div' : 'White__div';

  var deliverButton = props.delivered === 'Not Delivered' ? 'Yes' : 'No';

  var productsDisplay = 'orderDetails';
  var collapsed = 'not__collapsed';

  const switchOrderDetails = () => {
    setShowOrderDetails(!showOrderDetails);
  };

  const handleDelivery = () => {
    var data = {
      orderID: props.orderID,
      userID: props.userID,
      address: props.address,
      totalItem: props.items,
      totalPrice: props.totalPrice,
      orderDate: props.date,
      delievered: 'Delivered',
    };
    Service.updateDelivery(data).then((response) => {
      Service.getOrderById(props.userID).then((response) => {
        console.log(response.data);
        dispatch({
          type: 'CREATE_ORDER',
          order: response.data,
        });
      });
      console.log(state.order);
    });
    console.log(state.order);
  };

  return (
    <motion.div
      className='orderSummary'
      animate={{ scale: 0.93, opacity: 1 }}
      transition={{ duration: 0.3 }}
      onClick={switchOrderDetails}>
      <div className='orderSummary__container'>
        <div className={`orderSummary__delieveryStatus ${deliverStatus}`}>
          <div className='orderSummary__title'>Deliver Status:</div>
          <div className='orderSummary__deliver'>
            {props.delivered}
            {deliverIcon}
          </div>
        </div>
        <div
          className={`orderSummary__delieveryStatusButton ${showButton} ${deliverButton}`}>
          <Button
            type='danger'
            message='Click to confirm Delivery'
            onClick={handleDelivery}
          />
        </div>
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
            <div className='orderSummary__date'>Tk.{props.totalPrice}</div>
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
