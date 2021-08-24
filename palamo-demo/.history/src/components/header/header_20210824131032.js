import React, { useState } from 'react';
import { Badge, Avatar, Menu, Dropdown, message } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import basketURL from './shopping-cart.png';
import avatar1URL from './avatar1.png';
import logoURL from './palamo_logo.svg';

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
        <img src={logoURL} alt="Palamo" width="70px" height="70px" />
      </div>
      <div className="header-right-side">
        <nav>
          <li>Products</li>
          <li>Sample kit</li>
          <li>Blog</li>
          <li>About us</li>
          <li>Contact</li>
          <li className="header-user-menu">
            <Avatar
              src={<img src={avatar1URL} alt="User avatar" width="32px" height="32px" />}
            />
            <Dropdown overlay={menu}>
              <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                MY ACCOUNT <DownOutlined />
              </a>
            </Dropdown>
          </li>
          <li>
            <a href="#">
              <Badge count={0} offset={[-10, 10]} showZero>
                <img src={basketURL} alt="Palamo basket" width="32px" height="32px" />;
              </Badge>
            </a>
          </li>
        </nav>
      </div>
    </header>
  );
}

export default Header;
