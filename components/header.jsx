import React from 'react'
import { Link } from 'react-router-dom'
import '../src/styles/header.css'

const Header = () => {
  return (
    <div className='nav-bar'>
      <div className="logo">
        <Link to={'/'}  className='a'><h3>PosApp</h3></Link>
      </div>
        <div className="links">
          <Link to={'/'} className='a'>Home</Link>
          <Link to={'/products'} className='a'>Products</Link>
          <Link to={'/about'} className='a'>About</Link>
        </div>
    </div>
  )
}

export default Header