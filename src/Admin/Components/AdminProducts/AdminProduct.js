import React from 'react';
import Buttons from '../../../components/UIElements/Buttons/Buttons';
import DeleteIcon from '@material-ui/icons/Delete';
import VisibilityIcon from '@material-ui/icons/Visibility';
import { motion } from 'framer-motion';
import './AdminProduct.css';
import { useStateValue } from '../../../StateProvider/StateProvider';

const AdminProduct = (props) => {
  const [state, dispatch] = useStateValue();

  const deleteIcon = <DeleteIcon />;
  const viewIcon = <VisibilityIcon />;

  const removeProduct = () => {
    dispatch({
      type: 'REMOVE_PRODUCT',
      id: props.id,
    });
  };

  return (
    <motion.div
      animate={{ scale: 0.93, opacity: 1 }}
      transition={{ duration: 0.3 }}
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
            onClick={removeProduct}
          />
        </div>
      </div>
    </motion.div>
  );
};

export default AdminProduct;
