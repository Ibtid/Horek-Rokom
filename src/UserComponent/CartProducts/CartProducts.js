import React from 'react';
import DeleteIcon from '@material-ui/icons/Delete';
import VisibilityIcon from '@material-ui/icons/Visibility';
import ProductCardForList from '../../SharedComponents/Product/ProductCardForList';
import { useStateValue } from '../../StateProvider/StateProvider';

const CartProducts = (props) => {
  const [state, dispatch] = useStateValue();

  const viewIcon = <VisibilityIcon />;
  const deleteIcon = <DeleteIcon />;

  const removeProductfromCart = () => {
    dispatch({
      type: 'REMOVE_PRODUCT_FROM_CART',
      id: props.id,
    });
    console.log(props.description);
  };

  return (
    <ProductCardForList
      id={props.id}
      name={props.name}
      image={props.image}
      price={props.price}
      description={props.description}
      category={props.category}
      viewIcon={viewIcon}
      deleteIcon={deleteIcon}
      removeProduct={removeProductfromCart}
    />
  );
};

export default CartProducts;
