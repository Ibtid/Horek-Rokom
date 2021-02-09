import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Buttons from '../../SharedComponents/UIElements/Buttons/Buttons';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import VisibilityIcon from '@material-ui/icons/Visibility';
import './Product.css';
import { useStateValue } from '../../StateProvider/StateProvider';
import Modal from '../../SharedComponents/UIElements/Modal/ProductModal/Modal';
import toast from 'react-hot-toast';

const Product = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [state, dispatch] = useStateValue();
  const addProductIcon = <AddShoppingCartIcon />;
  const viewDetailsIcon = <VisibilityIcon />;

  const notify = () => toast(`${props.name} added to Cart`);

  const addProductToCart = () => {
    dispatch({
      type: 'ADD_PRODUCT_TO_CART',
      product: {
        id: props.id,
        image: props.image,
        name: props.name,
        price: props.price,
        description: props.description,
      },
    });
    notify();
  };

  return (
    <motion.div
      animate={{ scale: 0.93, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className='product'>
      {isOpen && (
        <Modal
          setIsOpen={() => setIsOpen(false)}
          id={props.id}
          image={props.image}
          name={props.name}
          price={props.price}
          description={props.description}
          category={props.category}
          isHomePage='yes'
          addProductToCart={addProductToCart}
        />
      )}
      <div className='product__card'>
        <div className='product__imageContainer'>
          <img className='product__image' src={props.image} alt='product.png' />
        </div>
        <div className='product__footer'>
          <div className='product__info'>
            <div className='product__name'>{props.name}</div>
            <div className='product__price'>Tk. {props.price}</div>
          </div>
          <div className='product__button'>
            <Buttons
              icon={addProductIcon}
              type='danger'
              message=''
              onClick={addProductToCart}
            />

            <Buttons
              icon={viewDetailsIcon}
              type='danger'
              message=''
              onClick={() => setIsOpen(true)}
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Product;
