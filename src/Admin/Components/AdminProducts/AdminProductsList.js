import React from 'react';
import { useStateValue } from '../../../StateProvider/StateProvider';
import AdminProduct from './AdminProduct';

import './AdminProductList.css';

const AdminProductsList = () => {
  const [{ products }, dispatch] = useStateValue();
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
            />
          ))}
      </div>
    </div>
  );
};

export default AdminProductsList;
