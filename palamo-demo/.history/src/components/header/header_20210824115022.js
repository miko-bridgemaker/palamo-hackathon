import './App.scss';
import logo from '../../images/shopping-cart.png';

function Header() {
  return (
    <header className="header">
      <div className="header-logo-container">
        <img src={logo} className="header-basket" alt="Palamo basket" width="20px" height="20px" />;

      </div>
    </header>
  );
}

export default Header;
