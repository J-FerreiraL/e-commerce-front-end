import './Header.css';
// import Logo from '../Logo/Logo';
import SearchBar from '../SearchBar/SearchBar';
import Navigation from '../Navigation/Navigation';
import AuthButtons from '../AuthButtons/AuthButtons';
import CartIcon from '../CartIcon/CartIcon';


const Header = () => {
  return (
    <header className="header">
      <div className="logo-container">
        {/* <Logo /> */}
        <span className="store-name">Digital Store</span>
      </div>
      <SearchBar />
      <Navigation />
      <div className="auth-cart-container">
        <AuthButtons />
        <CartIcon />
      </div>
    </header>
  );
};

export default Header;
