import React from 'react';
import AdminProduct from './AdminProduct';

import './AdminProductList.css';

const AdminProductsList = ({ DummyProducts }) => {
  return (
    <div className='admin__productlist'>
      <div className='admin__productlist__container'>
        {DummyProducts.slice(0)
          .reverse()
          .map((product) => (
            <AdminProduct
              key={product.id}
              id={product.id}
              name={product.name}
              image={product.image}
              price={product.price}
            />
          ))}
      </div>
    </div>
  );
};

export default AdminProductsList;
