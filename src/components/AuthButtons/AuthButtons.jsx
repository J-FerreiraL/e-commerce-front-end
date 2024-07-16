import React from 'react';
import './AuthButtons.css';

const AuthButtons = () => {
  return (
    <div className="auth-buttons">
      <a href="/signup" className="signup-button">Cadastre-se</a>
      <a href="/login" className="login-button">Entrar</a>
    </div>
  );
};

export default AuthButtons;
