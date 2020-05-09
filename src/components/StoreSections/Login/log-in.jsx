import React from 'react'
import './log-in.css'
import LoginFacebook from './LoginFacebook/login-facebook';

const logInDescription = <div>
                            By creating an account on our website, 
                            you will spend less time processing of your commission, 
                            ability to post comments, 
                            track the status of orders, and much more.
                        </div>

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