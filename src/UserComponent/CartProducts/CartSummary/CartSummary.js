import React from 'react';
import './CartSummary.css';
import Button from '../../../SharedComponents/UIElements/Buttons/Buttons';

const CartSummary = () => {
  return (
    <div className='cartSummary'>
      <div className='cartSummary__container'>
        <div className='cartSummary__title'>Cart Summary</div>
        <div className='cartSummary__promoCodeAd'>
          Do you have a promo code? Use a promo code and get free shipping!
        </div>
        <div className='cartSummary__subtotal'>
          <div className='cartSummary__subtotalTitle'>SUBTOTAL:</div>
          <div className='cartSummary__subtotalCost'>$500</div>
        </div>
        <div className='cartSummary__shipping'>
          <div className='cartSummary__shippingTitle'>SHIPPING:</div>
          <div className='cartSummary__shippingCost'>FREE!</div>
        </div>
        <div className='cartSummary__tax'>
          <div className='cartSummary__taxTitle'>TAX:</div>
          <div className='cartSummary__taxCost'>$50</div>
        </div>
        <div className='cartSummary__total'>
          <div className='cartSummary__totalTitle'>TOTAL</div>
          <div className='cartSummary__totalCost'>$550</div>
        </div>
        <div className='cartSummary__button'>
          <Button type='danger' message='Proceed Checkout' />
        </div>
      </div>
    </div>
  );
};

export default CartSummary;
