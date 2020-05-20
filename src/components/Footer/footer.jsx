import React from 'react'
import './footer.css'

function Footer() {
    return (
        <footer>
            <div className='container'>
                <div className='made'>Made by Dima Kulikovskiy using: <span className='react'>React</span> and <span className='redux'>Redux</span> <span>&#169; 2020</span></div>
                <hr className='footer-hr'/>
            </div>
        </footer>
    )
}

export default Footer
