import React, { useState } from 'react'
import './Login.css';

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  function callLogin(){
    
  }

  return (
    <div className='outerContainer loginContainer'>
      <label htmlFor='username' className='loginLabel'>User name</label>
      <input type='text' name='username' className='loginInput' value={username} onChange={(e) => { setUsername(e.target.value) }} />
      <label htmlFor='password' className='loginLabel'>Password</label>
      <input type='password' name='password' className='loginInput' value={password} onChange={(e) => { setPassword(e.target.value) }} />
      <button className='loginButton btn' onClick={() => {callLogin()}}>Login</button>
    </div>
  )
}
