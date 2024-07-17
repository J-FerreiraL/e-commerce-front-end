import React from 'react';
import miniCart from '../../assets/mini-cart.svg';
import './CartIcon.css'; // Certifique-se de criar e importar o arquivo CSS

const CartIcon = () => {
  return (
    <div className="cart-container">
      <img src={miniCart} className="cart-icon" alt="Cart Icon" />
      <span className="item-count">2</span>
    </div>
  );
};

export default CartIcon;
