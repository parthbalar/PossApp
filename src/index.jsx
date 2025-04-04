import React from 'react'
import { Link } from 'react-router-dom'
import './styles/index.css'

const Index = () => {
  return (
    <div className='index'>
        <h1>Welcome to My POS App</h1>
      <nav>
        <Link to="/products" className='a'>Go to Product Page</Link>
      </nav>
    </div>
  )
}

export default Index