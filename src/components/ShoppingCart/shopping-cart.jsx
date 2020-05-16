import React from 'react'
import './shopping-cart.css'
import ShoppingCartItem from './shopping-cart-item'

const iconShop = <img alt='iconShop' className='iconShop' src="https://img.icons8.com/bubbles/50/000000/man-red-shopping-basket.png"/>

const ShoppingCart = ({purchases,removeItem,removeAllItems}) => {
    return (
       <div>
            <div className='container'>
                <div className='cart-container'> 
                    <div className='icon-title'>
                        {iconShop} <span>This is your shopping cart</span>
                    </div>
                    <hr />
                    <div className='row justify-content-center'>
                        <div className='item-cart'>
                            {purchases.map((p,index) => <ShoppingCartItem key={index.toString()} body={p.body} removeItem={() => removeItem(p.id)}/>)}
                        </div>
                    </div>
                    <div className='total-price'>
                        Your total price: {purchases.reduce((total,iphone) => total + +iphone.body.price, 0 )}$
                    </div>
                    <button onClick={removeAllItems} className='clear-all'><span>Clear cart</span></button>
                    <button className='proceed-to-checkout'><span>Proceed to checkout</span></button>
                </div>
            </div>
       </div>
    )
}

export default ShoppingCart
