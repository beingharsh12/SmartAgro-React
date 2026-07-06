import React from 'react'
import {Link} from 'react-router-dom'
import logo from "../assets/logo.png";
import './Navbar.css'
import { useState } from 'react';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
 

  return (
    <nav aria-label="Main Navigation"
    className="nav text-white p-4 w-full">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/home" className="text-xl font-bold">
          {/* <img src={logo} alt="SmartAgro Logo" className='h-20 bg-white'/> */}
         <div className="text-2xl font-bold">SmartAgro</div>
        </Link>
        <ul className="flex space-x-4 text-lg hidden md:flex">
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/cropguide">Crop Guide</Link>
          </li>
          <li>
            <Link to="/purchase">Purchase</Link>
          </li>
          <li>
            <Link to="/agriculturists">Agriculturists</Link>
          </li>
          <li>
            <Link to="/weather">Weather</Link>
          </li>
          <li>
            <Link to="/faq">FaQ's</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          {/* <li>
            <Link to="/signup">Sign-Up</Link>
          </li> */}
          <li>
            <Link to="/cart">Cart</Link>
          </li>
        </ul>
        {/* Mobile Menu*/}
        {menuOpen && (
        <ul className="md:hidden flex flex-col items-center gap-4 mt-4 text-lg absolute top-12 right-0 backdrop-blur-lg border border-gray-200 p-4 rounded transition-all duration-300 z-10 w-1/2">
          <li className='border-b border-gray-200 pb-2'><Link to="/home">Home</Link></li>
          <li className='border-b border-gray-200 pb-2'><Link to="/cropguide">Crop Guide</Link></li>
          <li className='border-b border-gray-200 pb-2'><Link to="/purchase">Purchase</Link></li>
          <li className='border-b border-gray-200 pb-2'><Link to="/agriculturists">Agriculturists</Link></li>
          <li className='border-b border-gray-200 pb-2'><Link to="/weather">Weather</Link></li>
          <li className='border-b border-gray-200 pb-2'><Link to="/login">Login</Link></li>
          {/* <li><Link to="/signup">Sign-Up</Link></li> */}
          <li><Link to="/cart">Cart</Link></li>
        </ul>
      )}
        <button type="button" className="flex md:hidden text-2xl focus:outline-none"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle Menu"
        aria-expanded={menuOpen}
        >
           ☰
        </button>
      </div>
    </nav>
  )
}

export default Navbar