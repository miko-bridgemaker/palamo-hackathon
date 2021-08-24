import React, { useState } from 'react';
import { Badge, Avatar } from 'antd';

function Header() {
  return (
    <header className="header">
      <div className="header-logo-container">

      </div>
      <div className="header-right-side">
        <Badge count={44} offset={[10, 10]}>
        test
          <Avatar shape="square" size="large" />
          test
        </Badge>
      </div>
    </header>
  );
}

export default Header;
