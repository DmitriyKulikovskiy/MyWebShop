import React from 'react'
import './log-in.css'
import LoginFacebook from './LoginFacebook/login-facebook';
import { logInDescription } from '../../../assets/text';

const LogIn = () => {
    return(
        <div className='container'>
            <div className='login-container'>
                <div  className='logInDescription'>
                    {logInDescription}
                </div>

                <hr/>

                <div className='titleLogIn'>
                    Log<span>In</span>
                </div>

                    <LoginFacebook />
                    <div className='google'>
                        login with Google
                    </div>
                        <br/>
                    <div className='vkontakte'>
                       login with VKontakte
                    </div>
                        <br/>
                    <div className='instagram'>
                        login with Instagram
                    </div>
                        <br/>
            </div>
        </div>
        
    )
}

export default LogIn;