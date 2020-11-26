import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Buttons from '../../SharedComponents/UIElements/Buttons/Buttons';
import './ProductCardForList.css';

const ProductCardForList = (props) => {
  const [showProduct, setShowProduct] = useState(true);
  const eraseProduct = () => {
    setShowProduct(false);
    setTimeout(() => {
      props.removeProduct();
    }, 500);
  };
  return (
    <AnimatePresence>
      {showProduct && (
        <motion.div
          animate={{ scale: 0.93, opacity: 1 }}
          exit={{ scale: -25, opacity: 0 }}
          transition={{ duration: 0.5 }}
          className='ProductCard'>
          <div className='ProductCard__card'>
            <div className='ProductCard__imageContainer'>
              <img
                className='ProductCard__image'
                src={props.image}
                alt='product'
              />
            </div>
            <div className='ProductCard__info'>
              <div className='ProductCard__titleSection'>
                Name:
                <div className='ProductCard__title'>{props.name}</div>
              </div>
              <div className='ProductCard__priceSection'>
                Price:
                <div className='ProductCard__price'>${props.price}</div>
              </div>
            </div>
            <div className='ProductCard__buttons'>
              <Buttons
                icon={props.viewIcon}
                type='default'
                message='VIEW DETAILS'
              />
              <Buttons
                icon={props.deleteIcon}
                type='danger'
                message='DELETE ITEM'
                onClick={eraseProduct}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ProductCardForList;
