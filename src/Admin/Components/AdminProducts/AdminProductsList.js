import React, { useEffect } from 'react';
import { useStateValue } from '../../../StateProvider/StateProvider';
import AdminProduct from './AdminProduct';
import Service from '../../../services/services';

import './AdminProductList.css';

const AdminProductsList = () => {
  const [{ products }, dispatch] = useStateValue();

  useEffect(() => {
    retrieveProducts();
  }, []);

  const retrieveProducts = () => {
    Service.getAllProducts()
      .then((responses) => {
        console.log(responses.data);
        dispatch({
          type: 'RETRIEVE_PRODUCTS',
          product: responses.data,
        });
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <div className='admin__productlist'>
      <div className='admin__productlist__container'>
        {products
          .slice(0)
          .reverse()
          .map((product) => (
            <AdminProduct
              key={product.id}
              id={product.id}
              name={product.name}
              image={product.image}
              price={product.price}
              description={product.description}
              category={product.category}
            />
          ))}
      </div>
    </div>
  );
};

export default AdminProductsList;
