import React from 'react'
import './shopping-cart.css'


const ShoppingCartItem = ({body,removeItem}) => {
    const iconCart = <img alt='iconShop' className='iconCart' src={body.photo}/>
    const iconDelete = <img className='icon-delete' src="https://img.icons8.com/flat_round/64/000000/delete-sign.png"/>
    return (
        <div>
            <span className='numeration' ></span>
            <div className='purchases'>{iconCart} {body.model} - {body.price}$</div>
            <span onClick={removeItem}>{iconDelete}</span>
            <hr />
        </div>
    )
}

export default ShoppingCartItem
