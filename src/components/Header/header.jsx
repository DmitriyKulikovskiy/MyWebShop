import React  from 'react'
import './header.css'
import NavBar from '../NavBar/nav-bar';
import { NavLink } from 'react-router-dom';
import { shoppingBag } from '../../assets/icons';

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
