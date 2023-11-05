import React from 'react'
import '../scss/header/header.css'
import { useNavigate } from 'react-router-dom'
function Header() {
  const navigate = useNavigate();
  const isAuth = false
  
  return (
    <div className='header'>
      <div className='right-header store-name'>
        <h2 onClick={() => {navigate('/')}}>Store</h2>
      </div>
      <div className='left-header'>
        <h5 onClick={() => {navigate('/cart')}}>Cart</h5>
        {isAuth?
        <>
          <h5>name</h5>
        </>
        :
        <h5 onClick={() => navigate('/login')}>Login</h5>}
      </div>
    </div>
  )
}

export default Header