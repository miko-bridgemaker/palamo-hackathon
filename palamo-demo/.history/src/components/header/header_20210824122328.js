import './App.scss';
import { Badge } from 'antd';

function Header() {
  return (
    <header className="header">
      <div className="header-logo-container">
        <img src={logo} className="header-basket" alt="Palamo basket" width="20px" height="20px" />;

      </div>
      <div className="header-right-side">
        <Badge count={0} offset={[10, 10]}/>
      </div>
    </header>
  );
}

export default Header;
