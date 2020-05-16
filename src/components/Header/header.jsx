import React  from 'react'
import './header.css'
import NavBar from '../NavBar/nav-bar';
import { NavLink } from 'react-router-dom';


const shoppingBag = <img alt='shopping cart' src="https://image.flaticon.com/icons/svg/265/265731.svg"/>;

const Header = ({totalCount}) => {

    return (
        <header className='header'>
            <span className='white'>Apple</span> 
            <span className='pink'> Store</span>
            <NavBar />
            <span className='shoppingBag'>
                <NavLink to='/ShoppingCart'>{shoppingBag} ({totalCount.length})</NavLink>
            </span>
        </header>
    )
}

export default Header
