import React, { useState } from 'react';
import { Badge } from 'antd';
import basketURL from './shopping-cart.png';
import { Menu, Dropdown, message } from 'antd';
import { DownOutlined } from '@ant-design/icons';

function Header() {
  return (
    <header className="header">
      <div className="header-logo-container">

      </div>
      <div className="header-right-side">
        test
        <Badge count={1} offset={[-10, 10]}>
          <img src={basketURL} alt="Palamo basket" width="32px" height="32px" />;
        </Badge>
          test
      </div>
    </header>
  );
}

export default Header;
