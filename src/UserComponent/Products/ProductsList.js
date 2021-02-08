import React, { useEffect } from 'react';
import Product from './Product';
import './ProductList.css';
import { useStateValue } from '../../StateProvider/StateProvider';
import Service from '../../services/services';

const ProductsList = () => {
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
    <div className='productList'>
      <div className='productList__showcase'>
        {products.map((product) => (
          <Product
            key={product.id}
            id={product.id}
            image={product.image}
            name={product.name}
            price={product.price}
            rating={product.rating}
            description={product.description}
            category={product.category}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductsList;
