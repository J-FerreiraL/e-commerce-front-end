// src/components/Footer/Footer.jsx
import React from 'react';
import { Facebook, Instagram, Twitter } from '@mui/icons-material';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-column">
          <h3>Digital Store</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
          <div className="social-icons">
            <a href="#"><Facebook /></a>
            <a href="#"><Instagram /></a>
            <a href="#"><Twitter /></a>
          </div>
        </div>
        <div className="footer-column">
          <h4>Informação</h4>
          <ul>
            <li><a href="#">Sobre Drip Store</a></li>
            <li><a href="#">Segurança</a></li>
            <li><a href="#">Wishlist</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Trabalhe conosco</a></li>
            <li><a href="#">Meus Pedidos</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>Categorias</h4>
          <ul>
            <li><a href="#">Camisetas</a></li>
            <li><a href="#">Calças</a></li>
            <li><a href="#">Bonés</a></li>
            <li><a href="#">Headphones</a></li>
            <li><a href="#">Tênis</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>Contato</h4>
          <p>Av. Santos Dumont, 1510 - 1 andar - Aldeota, Fortaleza - CE, 60150-161</p>
          <p>(85) 3051-3411</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>@ 2022 Digital College</p>
      </div>
    </footer>
  );
};

export default Footer;
