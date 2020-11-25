import React from 'react';
import { Link } from 'react-router-dom';
import Buttons from '../../SharedComponents/UIElements/Buttons/Buttons';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import VisibilityIcon from '@material-ui/icons/Visibility';
import './Product.css';
import { useStateValue } from '../../StateProvider/StateProvider';

const Product = (props) => {
  const [state, dispatch] = useStateValue();
  const addProductIcon = <AddShoppingCartIcon />;
  const viewDetailsIcon = <VisibilityIcon />;

  const addProductToCart = () => {
    dispatch({
      type: 'ADD_PRODUCT_TO_CART',
      product: {
        id: props.id,
        image: props.image,
        name: props.name,
        price: props.price,
      },
    });
  };

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
            <Buttons
              icon={addProductIcon}
              type='default'
              message=''
              onClick={addProductToCart}
            />
            <Link to={`/${props.id}`} className='product__productDetailsButton'>
              <Buttons icon={viewDetailsIcon} type='default' message='' />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
