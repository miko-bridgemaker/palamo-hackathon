import React, { useState } from 'react';
import { Badge, Avatar, Menu, Dropdown, message } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import basketURL from './shopping-cart.png';
import avatar1URL from './avatar1.png';

const onClick = ({ key }) => {
  message.info(`Click on item ${key}`);
};

const menu = (
  <Menu onClick={onClick}>
    <Menu.Item key="1">Orders</Menu.Item>
    <Menu.Item key="2">Personal details</Menu.Item>
    <Menu.Item key="3">Logout</Menu.Item>
  </Menu>
);

function Header() {
  return (
    <header className="header">
      <div className="header-logo-container">

      </div>
      <div className="header-right-side">
        <div className="header-user-menu">
          <Avatar
            src={<img src={avatar1URL} alt="User avatar" width="32px" height="32px" />}
          />
          <Dropdown overlay={menu}>
            <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
              MY ACCOUNT <DownOutlined />
            </a>
          </Dropdown>
        </div>

        <a href="#">
          <Badge count={0} offset={[-10, 10]} showZero>
            <img src={basketURL} alt="Palamo basket" width="32px" height="32px" />;
          </Badge>
        </a>
        test
      </div>
    </header>
  );
}

export default Header;
