// src/pages/HomePage/HomePage.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/Header/Header';
import Navigation from '../../components/Navigation/Navigation';
import SearchBar from '../../components/SearchBar/SearchBar';
import Footer from '../../components/Footer/Footer';
import CartIcon from '../../components/CartIcon/CartIcon';
import logo from '../../assets/logo.svg';
import nikeShoe from '../../assets/nike-shoe.png';
import supremeTShirt from '../../assets/supreme-tshirt.png';
import adidasShoe from '../../assets/adidas-shoe.png';
import beatsHeadphone from '../../assets/beats-headphone.png';
import './HomePage.css';

const HomePage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "Queima de <br /> estoque Nike",
      description: "Consequat culpa exercitation mollit nisi excepteur do tempor laboris eiusmod irure consectetur.",
      button: "Ver Ofertas",
      image: nikeShoe,
    },
    {
      title: "Queima de <br /> estoque Nike",
      description: "Consequat culpa exercitation mollit nisi excepteur do tempor laboris eiusmod irure consectetur.",
      button: "Ver Ofertas",
      image: nikeShoe,
    },
    {
      title: "Queima de <br /> estoque Nike",
      description: "Consequat culpa exercitation mollit nisi excepteur do tempor laboris eiusmod irure consectetur.",
      button: "Ver Ofertas",
      image: nikeShoe,
    },
    {
      title: "Queima de <br /> estoque Nike",
      description: "Consequat culpa exercitation mollit nisi excepteur do tempor laboris eiusmod irure consectetur.",
      button: "Ver Ofertas",
      image: nikeShoe,
    },
  ];

  const handleDotClick = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="home-container">
      <header className="header">
        <div className="logo">
          <img src={logo} alt='Digital Store Logo' />
        </div>
        <SearchBar />
        <div className="auth-buttons">
          <Link to="/cadastro">Cadastre-se</Link>
          <button className="entrar-button">Entrar</button>
        </div>
        <CartIcon />
      </header>
      <Navigation />
      <div className="promo-section">
        <div className="promo-text">
          <h2>Melhores ofertas personalizadas</h2>
          <h1 dangerouslySetInnerHTML={{ __html: slides[currentSlide].title }} />
          <span className="fire-icon" role="img" aria-label="fire">🔥</span>
          <p className="promo-description">{slides[currentSlide].description}</p>
          <button>{slides[currentSlide].button}</button>
        </div>
        <div className="promo-image">
          <img src={slides[currentSlide].image} alt="Promo Image" />
        </div>
      </div>
      <div className="promo-dots">
        {slides.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === currentSlide ? 'active' : ''}`}
            onClick={() => handleDotClick(index)}
          ></span>
        ))}
      </div>
      
      {/* Nova seção adicionada */}
      <div className="highlighted-collections">
        <h2>Coleções em destaque</h2>
        <div className="collections">
          <div className="collection-item">
            <span className="discount">30% OFF</span>
            <img src={supremeTShirt} alt="Novo drop Supreme" />
            
            <button>Comprar</button>
          </div>
          <div className="collection-item">
            <span className="discount">30% OFF</span>
            <img src={adidasShoe} alt="Coleção Adidas" />
            
            <button>Comprar</button>
          </div>
          <div className="collection-item">
            <span className="discount">30% OFF</span>
            <img src={beatsHeadphone} alt="Novo Beats Bass" />
            
            <button>Comprar</button>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default HomePage;
