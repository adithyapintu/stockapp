import React, { useState } from 'react'
import './Login.css';

export default function Register() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  function callRegister(){

  }

  return (
    <div className='outerContainer registerContainer'>
      <label htmlFor='username' className='loginLabel'>User name</label>
      <input type='text' name='username' className='loginInput' value={username} onChange={(e) => {setUsername(e.target.value)}}/>
      <label htmlFor='username' className='loginLabel'>Email</label>
      <input type='text' name='username' className='loginInput' value={email} onChange={(e) => { setEmail(e.target.value) }} />
      <label htmlFor='password' className='loginLabel'>Password</label>
      <input type='password' name='password' className='loginInput' value={password} onChange={(e) => { setPassword(e.target.value) }} />
      <label htmlFor='confirmPassword' className='loginLabel'>Confirm Password</label>
      <input type='text' name='confirmPassword' className='loginInput' value={confirmPassword} onChange={(e) => { setConfirmPassword(e.target.value) }} />
      <button className='loginButton btn' onClick={() => {callRegister()}}>Register</button>
    </div>
  )
}
