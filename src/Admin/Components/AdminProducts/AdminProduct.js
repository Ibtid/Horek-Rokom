import React, { useState } from 'react';
import Buttons from '../../../SharedComponents/UIElements/Buttons/Buttons';
import DeleteIcon from '@material-ui/icons/Delete';
import VisibilityIcon from '@material-ui/icons/Visibility';
import { motion, AnimatePresence } from 'framer-motion';
import './AdminProduct.css';
import { useStateValue } from '../../../StateProvider/StateProvider';

const AdminProduct = (props) => {
  const [state, dispatch] = useStateValue();
  const [showProduct, setShowProduct] = useState(true);

  const deleteIcon = <DeleteIcon />;
  const viewIcon = <VisibilityIcon />;

  const eraseProduct = () => {
    setShowProduct(false);
    setTimeout(() => {
      removeProduct();
    }, 2000);
  };

  const removeProduct = () => {
    dispatch({
      type: 'REMOVE_PRODUCT',
      id: props.id,
    });
  };

  return (
    <AnimatePresence>
      {showProduct && (
        <motion.div
          animate={{ scale: 0.93, opacity: 1 }}
          exit={{ scale: -25, opacity: 0 }}
          transition={{ duration: 0.5 }}
          className='adminProduct'>
          <div className='adminProduct__card'>
            <div className='adminProduct__imageContainer'>
              <img
                className='adminProduct__image'
                src={props.image}
                alt='product'
              />
            </div>
            <div className='adminProduct__info'>
              <div className='adminProduct__titleSection'>
                Name:
                <div className='adminProduct__title'>{props.name}</div>
              </div>
              <div className='adminProduct__priceSection'>
                Price:
                <div className='adminProduct__price'>${props.price}</div>
              </div>
            </div>
            <div className='adminProduct__buttons'>
              <Buttons icon={viewIcon} type='default' message='VIEW DETAILS' />
              <Buttons
                icon={deleteIcon}
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

export default AdminProduct;
