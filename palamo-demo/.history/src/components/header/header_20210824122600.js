import React, { useState } from 'react';
import { Badge, Avatar } from 'antd';

function Header() {
  return (
    <header className="header">
      <div className="header-logo-container">

      </div>
      <div className="header-right-side">
        <Badge count={0} offset={[10, 10]}/>
      </div>
    </header>
  );
}

export default Header;
