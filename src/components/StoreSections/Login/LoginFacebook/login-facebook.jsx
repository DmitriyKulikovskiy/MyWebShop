import React from 'react'
import FacebookLogin from 'react-facebook-login'
import './login-facebook.css'

class LoginFacebook extends React.Component {
 
    state = {
        isLogin: false,
        userId: '',
        name: '',
        email: '',
        picture: ''
    }
   
    componentClicked = () => {
        
    }

    responseFacebook = response => {
        this.setState({
            isLogin: true,
            userId: response.userId,
            name: response.name,
            email: response.email,
            picture: response.picture.data.url
        })
    }

    logOut = () => {
        this.setState({
            isLogin: false,
            userId: '',
            name: '',
            email: '',
            picture: ''
        })
    }


    render() {
        let content;

        if(this.state.isLogin){
            content = null
        }else {
            content = (<FacebookLogin
                appId="274535676911432"
                autoLoad={true}
                fields="name,email,picture"
                onClick={this.componentClicked}
                callback={this.responseFacebook} />)
        }

        return (
            <div>
                {this.state.isLogin === false  
                    ? <div className='facebook'>{content}</div>
                    : <div className='joinDone'>
                        Hello <span>{this.state.name}</span>! Thank you for joining us.
                        <div>You can also use another social network: </div>
                        <button className='logOut' onClick={this.logOut}>LogOut Facebook</button>
                    </div>
                } 
            </div>
        )
    }
}

export default LoginFacebook;