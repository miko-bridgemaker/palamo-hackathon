import React from 'react'

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
                <button>Add to cart</button>
                <button>help</button>
            </div>
        </div>
    )
}

export default Footer
