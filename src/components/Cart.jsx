import React from 'react';

const API_IMAGES = 'https://image.tmdb.org/t/p/w500/';

const Cart = ({ title, poster_path }) => {
  return (
    <div className="cart__container">
      <img src={API_IMAGES + poster_path} alt="" />
      <p className="popular__title">{title}</p>
    </div>
  );
};

export default Cart;
