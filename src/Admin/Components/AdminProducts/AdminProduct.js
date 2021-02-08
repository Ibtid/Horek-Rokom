import React from 'react';
import DeleteIcon from '@material-ui/icons/Delete';
import VisibilityIcon from '@material-ui/icons/Visibility';
import { useStateValue } from '../../../StateProvider/StateProvider';
import ProductCardForList from '../../../SharedComponents/Product/ProductCardForList';
import Service from '../../../services/services';

const AdminProduct = (props) => {
  const [state, dispatch] = useStateValue();

  const viewIcon = <VisibilityIcon />;
  const deleteIcon = <DeleteIcon />;

  const removeProduct = () => {
    Service.removeProduct(props.id)
      .then((response) => {
        dispatch({
          type: 'REMOVE_PRODUCT',
          id: props.id,
        });
        console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <ProductCardForList
      removeProduct={removeProduct}
      image={props.image}
      name={props.name}
      price={props.price}
      description={props.description}
      category={props.category}
      viewIcon={viewIcon}
      deleteIcon={deleteIcon}
    />
  );
};

export default AdminProduct;
