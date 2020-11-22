import React from 'react';
import Product from './Product';
import { motion } from 'framer-motion';
import { DummyProducts } from './DummyProducts';
import './ProductList.css';

const ProductsList = () => {
  return (
    <div className='productList'>
      <motion.div
        animate={{ scale: 0.93 }}
        transition={{ duration: 0.5 }}
        className='productList__showcase'>
        {DummyProducts.map((product) => (
          <Product
            key={product.id}
            image={product.image}
            name={product.name}
            price={product.price}
          />
        ))}
      </motion.div>
    </div>
  );
};

export default ProductsList;
