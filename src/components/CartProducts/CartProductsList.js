import React from 'react';
import CartProducts from './CartProducts';
import './CartProductsList.css';
import { useStateValue } from '../../StateProvider/StateProvider';

const CartProductsList = () => {
  const [state, dispatch] = useStateValue();

  return (
    <div className='cartProducts'>
      {state.cart.map((product) => (
        <CartProducts
          name={product.name}
          image={product.image}
          price={product.price}
        />
      ))}
    </div>
  );
};

export default CartProductsList;
