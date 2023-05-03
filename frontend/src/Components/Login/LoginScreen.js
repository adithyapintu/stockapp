import React from 'react'
import Image1 from '../Images/LoginImages/Login1.jpg';
import Image2 from '../Images/LoginImages/Login2.jpg';
import Image3 from '../Images/LoginImages/Login3.jpg';
import Image4 from '../Images/LoginImages/Login4.jpg';
import './Login.css';

export default function LoginScreen() {

    let images = [Image1, Image2, Image3, Image4];

    return (
        <div className='loginscreen' style={{
            backgroundImage: `url(${images[Math.round(Math.random() * 4)]})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
        }}>
            <div class="position-relative">
                <div class="position-absolute top-50 start-50">
                    LoginScreen
                </div>
            </div>
        </div>
    )
}
