import React from 'react';
import { useStateValue } from '../../../StateProvider/StateProvider';
import './OrderDetails.css';
import OrderProducts from './OrderProducts';

const OrderDetails = (props) => {
  const [state, dispatch] = useStateValue();
  const orderProducts = state.orderDetails.filter(
    (orderDetails) => orderDetails.orderID === props.orderID
  );
  console.log(orderProducts);
  return (
    <div className={props.productsDisplay}>
      <div className='orderDetails__products'>
        {orderProducts.map((productsInfo) => (
          <OrderProducts
            productId={productsInfo.productId}
            image={productsInfo.image}
            name={productsInfo.productname}
            price={productsInfo.price}
          />
        ))}
      </div>
    </div>
  );
};

export default OrderDetails;
