import React from 'react';
import DeleteIcon from '@material-ui/icons/Delete';
import VisibilityIcon from '@material-ui/icons/Visibility';
import { useStateValue } from '../../../StateProvider/StateProvider';
import ProductCardForList from '../../../SharedComponents/Product/ProductCardForList';

const AdminProduct = (props) => {
  const [state, dispatch] = useStateValue();

  const viewIcon = <VisibilityIcon />;
  const deleteIcon = <DeleteIcon />;

  const removeProduct = () => {
    dispatch({
      type: 'REMOVE_PRODUCT',
      id: props.id,
    });
  };

  return (
    <ProductCardForList
      removeProduct={removeProduct}
      image={props.image}
      name={props.name}
      price={props.price}
      viewIcon={viewIcon}
      deleteIcon={deleteIcon}
    />
  );
};

export default AdminProduct;
