import React from 'react';
import Product from './Product';
import { motion } from 'framer-motion';
import { DummyProducts } from './DummyProducts';
import './ProductList.css';
import { useStateValue } from '../../StateProvider/StateProvider';

const ProductsList = () => {
  const [{ products }, dispatch] = useStateValue();
  return (
    <div className='productList'>
      <motion.div
        animate={{ scale: 0.93 }}
        transition={{ duration: 0.5 }}
        className='productList__showcase'>
        {products.map((product) => (
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
