import React, { useState } from 'react';
import { Badge } from 'antd';
import basket from './shopping-cart.png';

function Header() {
  return (
    <header className="header">
      <div className="header-logo-container">

      </div>
      <div className="header-right-side">
        test
        <Badge count={1} offset={[10, 10]}>
          <Avatar shape="square" size="large" />
        </Badge>
          test
      </div>
    </header>
  );
}

export default Header;
