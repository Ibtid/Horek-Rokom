import React, { useEffect } from 'react';
import Product from './Product';
import { AnimatePresence, motion } from 'framer-motion';
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
      <AnimatePresence>
        <motion.div
          animate={{ scale: 0.93, opacity: 1 }}
          transition={{ duration: 0.5 }}
          exit={{ scale: 1.1, opacity: 0 }}
          className='productList__showcase'>
          {products.map((product) => (
            <Product
              key={product.id}
              id={product.id}
              image={product.image}
              name={product.name}
              price={product.price}
              rating={product.rating}
              description={product.description}
            />
          ))}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default ProductsList;
