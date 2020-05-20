import React from 'react'
import './shopping-cart.css'
import { iconDelete } from '../../assets/icons'

const ShoppingCartItem = ({body,removeItem}) => {
    
    const iconCart = <img alt='iconShop' className='iconCart' src={body.photo}/>
    return (
        <div className='cart-item'>
            <span className='numeration' ></span>
            <div className='purchases'>{iconCart} {body.model} - {body.price}$</div>
            <span onClick={removeItem}>{iconDelete}</span>
            <hr />
        </div>
    )
}

export default ShoppingCartItem
