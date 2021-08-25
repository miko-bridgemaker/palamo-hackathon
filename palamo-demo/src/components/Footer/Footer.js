import { React , useState } from 'react';
import { Button } from 'antd';

const Footer = ( {price} ) => {
    return (
        <div className='App-footer'>
            <div className='footer-selivery'>Estimated Delivery: 7-9 workdays<br/>
                Call us for overnight delivery</div>
            <div className='footer-help' >Something doesn’t look right? <a href='https://palamo.com/t/16/kontakt' className='footer-help-link' target='_blank' rel="noreferrer">Get Help</a></div>
            <div className='footer-cart'>
                <div className='price-amount'>Total: {price} €</div>
                <Button type="primary" shape="round" size='large'>
                    Buy
                </Button>
            </div>
        </div>
    )
}

export default Footer
