import React from 'react'
import { ShoppingCartOutlined, QuestionCircleOutlined } from '@ant-design/icons';
import { Button } from 'antd';

const Footer = () => {
    let price = 65;

    return (
        <div className='App-footer'>
            <div>Includes free shipping and Returns worldwide</div>
            <div className='footer-price'>
                <div className='price-total'>Your total</div>
                <div className='price-amount'>{price} €</div>
            </div>
            <div className='footer-cart'>
            <Button type="primary" shape="round" icon={<ShoppingCartOutlined />} size='large'>
                Buy now
            </Button>
                    
                    
            <Button type="Default button" shape="round" icon={<QuestionCircleOutlined />} size='large'>
                Get help
            </Button>
            </div>
        </div>
    )
}

export default Footer
