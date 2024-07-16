import React from 'react';
import './Navigation.css';

const Navigation = () => {
  return (
    <nav className="navigation">
      <a href="/">Home</a>
      <a href="/products">Produtos</a>
      <a href="/categories">Categorias</a>
      <a href="/orders">Meus Pedidos</a>
    </nav>
  );
};

export default Navigation;
