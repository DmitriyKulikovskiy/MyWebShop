import React  from 'react'
import './header.css'
import NavBar from '../NavBar/nav-bar';

const shoppingBag = <img alt='shopping cart' src="https://image.flaticon.com/icons/svg/265/265731.svg"/>;

const Header = () => {
    
    return (
        <header className='header'>
            <span className='white'>Apple</span> 
            <span className='pink'> Store</span>
            <NavBar />
            <span className='shoppingBag'>{shoppingBag} [0]</span>
        </header>
    )
}

export default Header;
