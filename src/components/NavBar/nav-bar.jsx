import React from 'react'
import './nav-bar.css'
import { NavLink } from 'react-router-dom';

const NavBar = () => {
    return (
        <div id="menuToggle">
            <input type="checkbox" />

            <span></span>
            <span></span>
            <span></span>

            <ul id="menu">
                <div>
                    <li className='firstNavItem'>
                        <NavLink to='/LogIn'>LogIn</NavLink>
                    </li>
                </div>
                <div>
                    <li>
                        <NavLink to='/Shop'>Catalogue</NavLink>
                    </li>
                </div>
                <div>
                    <li>
                        <NavLink to='/Delivery'>Delivery</NavLink>
                    </li>
                </div>
                <div>
                    <li className='lastNavItem'>
                        <NavLink to='/Profile'>Profile</NavLink>
                    </li>
                </div>
             </ul>
        </div>
    )
}

export default NavBar