import React from 'react';
import { Link } from 'react-router-dom';
import Buttons from '../UIElements/Buttons/Buttons';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import VisibilityIcon from '@material-ui/icons/Visibility';
import './Product.css';

const Product = (props) => {
  const icon = <AddShoppingCartIcon />;
  const icon2 = <VisibilityIcon />;
  return (
    <div className='product'>
      <div className='product__card'>
        <div className='product__imageContainer'>
          <img className='product__image' src={props.image} alt='product.png' />
        </div>
        <div className='product__footer'>
          <div className='product__info'>
            <div className='product__name'>{props.name}</div>
            <div className='product__price'>Price: ${props.price}</div>
          </div>
          <div className='product__button'>
            <Buttons icon={icon} type='default' message='' />
            <Link
              to='/productDetails'
              className='product__productDetailsButton'>
              <Buttons icon={icon2} type='default' message='' />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
