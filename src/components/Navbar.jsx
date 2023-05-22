import React from 'react'
import { Link } from 'react-router-dom'


const Navbar = () => {
    return (
        <nav className='nav-container'>
            <div className='logo-container'>
                Mayorkingswear
            </div>

            <div className='links-container'>
                <Link to="/">Home</Link>
                <Link to="/products">Productos</Link>
            </div>
        </nav>
    )
}

export default Navbar