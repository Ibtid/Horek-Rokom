import React from 'react';
import CartProducts from './CartProducts';
import { useStateValue } from '../../StateProvider/StateProvider';

const CartProductsList = () => {
  const [state, dispatch] = useStateValue();

  return (
    <div className='cartProducts'>
      {state.cart.map((product) => (
        <CartProducts
          key={product.id}
          id={product.id}
          name={product.name}
          image={product.image}
          price={product.price}
          description={product.description}
        />
      ))}
    </div>
  );
};

export default CartProductsList;
