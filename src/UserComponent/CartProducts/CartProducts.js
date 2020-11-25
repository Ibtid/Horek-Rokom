import React from 'react';
import './CartProducts.css';
import DeleteIcon from '@material-ui/icons/Delete';
import VisibilityIcon from '@material-ui/icons/Visibility';
import ProductCardForList from '../../SharedComponents/Product/ProductCardForList';

const CartProducts = (props) => {
  const viewIcon = <VisibilityIcon />;
  const deleteIcon = <DeleteIcon />;

  return (
    <ProductCardForList
      name={props.name}
      image={props.image}
      price={props.price}
      viewIcon={viewIcon}
      deleteIcon={deleteIcon}
    />
  );
};

export default CartProducts;
