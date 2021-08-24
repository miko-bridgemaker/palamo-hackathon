import React, { useState } from 'react';
import { Badge, Avatar, Menu, Dropdown, message } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import basketURL from './shopping-cart.png';
import avatar1URL from './avatar1.png';
import logoURL from './palamo_logo.svg';

const menu = (
  <Menu>
    <Menu.Item key="1">Orders</Menu.Item>
    <Menu.Item key="2">Personal details</Menu.Item>
    <Menu.Item key="3">Logout</Menu.Item>
  </Menu>
);

function Header() {
  return (
    <header className="header">
      <div className="header-logo-container">
        <a href="https://palamo.com">
          <img src={logoURL} alt="Palamo" width="70px" height="70px" />
        </a>
      </div>
      <div className="header-right-side">
        <nav className="header-right-side-nav">
          <li><a href="https://palamo.com/c/3/products" className="header-right-side-nav-item">Products</a></li>
          <li><a href="https://palamo.com/p/25/samplekit" className="header-right-side-nav-item">Sample kit</a></li>
          <li><a href="https://palamo.com/blog" className="header-right-side-nav-item">Blog</a></li>
          <li><a href="https://palamo.com/t/aboutus" className="header-right-side-nav-item">About us</a></li>
          <li><a href="https://palamo.com/t/16/contact-us" className="header-right-side-nav-item">Contact</a></li>
          <li className="header-right-side-nav-user-menu">
            <Dropdown overlay={menu} overlayClassName="header-right-side-nav-dropdown">
              <span className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                <Avatar
                  src={<img src={avatar1URL} alt="User avatar" width="32px" height="32px" />}
                  style={{"margin-right": "5px"}}
                />
                My account <DownOutlined />
              </span>
            </Dropdown>
          </li>
          <li>
            <a href="#">
              <Badge count={0} offset={[-5, 4]} showZero size="small">
                <img src={basketURL} alt="Palamo basket" width="26px" height="26px" />
              </Badge>
            </a>
          </li>
        </nav>
      </div>
    </header>
  );
}

export default Header;
