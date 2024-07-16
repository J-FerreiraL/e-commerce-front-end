// src/pages/HomePage/HomePage.jsx

import React from 'react';
import { Link } from 'react-router-dom'; // Importe Link do react-router-dom
import Header from '../../components/Header/Header';
import Navigation from '../../components/Navigation/Navigation';
import SearchBar from '../../components/SearchBar/SearchBar';
import Footer from '../../components/Footer/Footer';
import CartIcon from '../../components/CartIcon/CartIcon';
import logo from '../../assets/logo.svg';  // Caminho relativo
import './HomePage.css';
import nikeShoe from '../../assets/nike-shoe.png';

const HomePage = () => {
  return (
    <div className="home-container">
      <header className="header">
        <div className="logo">
          <img src={logo} alt='Digital Store Logo' />
        </div>
        <SearchBar />
        <div className="auth-buttons">
          <Link to="/cadastro">Cadastre-se</Link> {/* Usando Link para navegar para a página de cadastro */}
          <button className="entrar-button">Entrar</button>
        </div>
        <CartIcon />
      </header>
      <Navigation />
      <div className="promo-section">
        <div className="promo-text">
          <h2>Melhores ofertas personalizadas</h2>
          <h1>Queima de estoque Nike <span role="img" aria-label="fire">🔥</span></h1>
          <p>Consequat culpa exercitation mollit nisi excepteur do tempor laboris eiusmod irure consectetur.</p>
          <button>Ver Ofertas</button>
        </div>
        <div className="promo-image">
          <img src={nikeShoe} alt="Nike Shoe" />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;