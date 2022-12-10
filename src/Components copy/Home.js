import React from 'react'
import './Home.css'
import logo from '../icons/Facebook-logo.svg'
function Home() {
  return (
    <div className='body'>
      <div className="main-wrapper">
        <div className="right">
            <img src={logo} alt="" />
            <h2>Facebook helps you connect and share with the people in your life.</h2>
        </div>
        <div className="left">
          
            <input type="text" placeholder='Email address or phone number' />
            <input type="password" placeholder='Password' />
            <button className='btn btn-primary'>Log in</button>
            <span>Forgotten password?</span>
            <div className="new-btn">
            <button className='btn btn-secondry'>Create New Account</button>
            </div>
            <div className='page-link'>
            <p> <span>Create a Page</span> for a celebrity, brand or business.</p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Home 