import React from 'react';
import Product from './Product';
import { AnimatePresence, motion } from 'framer-motion';
import './ProductList.css';
import { useStateValue } from '../../StateProvider/StateProvider';

const ProductsList = () => {
  const [{ products }, dispatch] = useStateValue();
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
            />
          ))}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default ProductsList;
