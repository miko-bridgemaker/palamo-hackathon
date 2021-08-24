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

function ConfiguratorOptions() {
  return (
    <article className="header">
      <section>

      </section>
    </article>
  );
}

export default Header;
