import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Buttons from '../../SharedComponents/UIElements/Buttons/Buttons';
import './ProductCardForList.css';
import Modal from '../UIElements/Modal/ProductModal/Modal';

const ProductCardForList = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [showProduct, setShowProduct] = useState(true);
  const eraseProduct = () => {
    setShowProduct(false);
    setTimeout(() => {
      props.removeProduct();
    }, 500);
  };
  return (
    <AnimatePresence>
      {isOpen && (
        <Modal
          setIsOpen={() => setIsOpen(false)}
          id={props.id}
          image={props.image}
          name={props.name}
          price={props.price}
          description={props.description}
          category={props.category}
        />
      )}
      {showProduct && (
        <motion.div
          animate={{ scale: 0.93, opacity: 1 }}
          exit={{ scale: -25, opacity: 0 }}
          transition={{ duration: 0.3 }}
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
                <div className='ProductCard__price'>Tk.{props.price}</div>
              </div>
            </div>
            <div className='ProductCard__buttons'>
              <Buttons
                icon={props.viewIcon}
                type='default'
                message='VIEW DETAILS'
                onClick={() => setIsOpen(true)}
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
