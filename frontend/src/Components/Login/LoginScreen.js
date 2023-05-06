import React, { useState } from 'react'
import Image1 from '../Images/LoginImages/Login1.jpg';
import Image2 from '../Images/LoginImages/Login2.jpg';
import Image3 from '../Images/LoginImages/Login3.jpg';
import Image4 from '../Images/LoginImages/Login4.jpg';
import './Login.css';
import Login from './Login';
import Register from './Register';


export default function LoginScreen() {
    
    let images = [Image1, Image2, Image3, Image4];
    const [loginStyle, setLoginStyle] = useState({display: "block"})
    const [registerStyle, setRegisterStyle] = useState({display: "none"})

    function showLogin(){
        setLoginStyle({
            display: "block"
        })
        setRegisterStyle({
            display: "none"
        })
    }

    function showRegister(){
        setLoginStyle({
            display: "none"
        })
        setRegisterStyle({
            display: "block"
        })
    }

    return (
        <div className='loginscreen' style={{
            backgroundImage: `url(${images[Math.round(Math.random() * images.length)]})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
        }}>
            <div className="formcontainer">
                <div className="routeControl">
                    <div className="loginRoute" onClick={() => { showLogin() }}>
                        <div className="btn">Login</div>
                    </div>
                    <div className="registerRoute" onClick={() => { showRegister() }}>
                        <div className="btn">Register</div>
                    </div>
                </div>
                <div style={loginStyle}>
                    <Login></Login>
                </div>
                <div style={registerStyle}>
                    <Register></Register>
                </div>
            </div>
        </div>
    )
}
