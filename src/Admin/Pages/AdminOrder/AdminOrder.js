import React, { useEffect } from 'react';
import OrderList from '../../../SharedComponents/OrderComponent/OrderList/OrderList';
import Header from '../../Components/Header/Header';
import Service from '../../../services/services';
import { useStateValue } from '../../../StateProvider/StateProvider';

const AdminOrder = () => {
  const [state, dispatch] = useStateValue();

  useEffect(() => {
    retrieveOrders();
    retrieveOrderDetails();
  }, []);

  const retrieveOrders = () => {
    Service.getAllOrders().then((response) => {
      console.log(response.data);
      dispatch({
        type: 'CREATE_ORDER',
        order: response.data,
      });
    });
    console.log(state.order);
  };
  const retrieveOrderDetails = () => {
    Service.getAllOrdersDetails().then((response) => {
      console.log(response);
      dispatch({
        type: 'CREATE_ORDER_SUMMARY',
        orderDetails: response.data,
      });
    });
    console.log(state.orderDetails);
  };
  return (
    <div>
      <Header />
      <OrderList />
    </div>
  );
};

export default AdminOrder;
