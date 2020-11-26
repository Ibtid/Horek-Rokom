import React from 'react';
import './CartSummary.css';
import Button from '../../../SharedComponents/UIElements/Buttons/Buttons';
import { useStateValue } from '../../../StateProvider/StateProvider';
import ForwardIcon from '@material-ui/icons/Forward';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

const CartSummary = () => {
  const [state, dispatch] = useStateValue();
  const subtotal = state.cart.reduce((accumulator, product) => {
    return (accumulator = accumulator + product.price);
  }, 0);
  const shipping = state.cart.length * 2;
  const tax = 0.1 * subtotal;
  const total = tax + subtotal + shipping;
  const forward = <ForwardIcon />;
  return (
    <div className='cartSummary'>
      <div className='cartSummary__container'>
        <div className='cartSummary__title'>
          <ShoppingCartIcon />
          <div className='cartSummary__titleText'>Summary</div>
        </div>
        <div className='cartSummary__promoCodeAd'>
          Do you have a promo code? Use a promo code and get free shipping!
        </div>
        <div className='cartSummary__items'>
          <div className='cartSummary__subtotalTitle'>Items:</div>
          <div className='cartSummary__subtotalCost'>x{state.cart.length}</div>
        </div>
        <div className='cartSummary__subtotal'>
          <div className='cartSummary__subtotalTitle'>SUBTOTAL:</div>
          <div className='cartSummary__subtotalCost'>${subtotal}</div>
        </div>
        <div className='cartSummary__shipping'>
          <div className='cartSummary__shippingTitle'>SHIPPING:</div>
          <div className='cartSummary__shippingCost'>${shipping}</div>
        </div>
        <div className='cartSummary__tax'>
          <div className='cartSummary__taxTitle'>TAX:</div>
          <div className='cartSummary__taxCost'>${tax}</div>
        </div>
        <div className='cartSummary__total'>
          <div className='cartSummary__totalTitle'>TOTAL</div>
          <div className='cartSummary__totalCost'>${total}</div>
        </div>
        <div className='cartSummary__button'>
          <Button type='danger' icon={forward} message='Proceed Checkout' />
        </div>
      </div>
    </div>
  );
};

export default CartSummary;
