import React from 'react'
import { Link } from 'react-router-dom'
import "../css/Navbar.css"

const Navbar = () => {
  return (
    <nav className='navbar '>
        <div className='navbar-brand '>
            <Link className='text-red-500'  to="/">Movie App</Link>
        </div>
        <div className='navbar-links '>
            <Link to="/" className='nav-link text-white'>Home</Link>
            <Link to="/favourite" className='nav-link text-white'>Favourite Movies</Link>
        </div>
        
    </nav>
  )
}

export default Navbar