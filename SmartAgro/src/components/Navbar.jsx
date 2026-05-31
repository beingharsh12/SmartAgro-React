import React from 'react'
import {Link} from 'react-router-dom'
import logo from "../assets/logo.png";
import './Navbar.css'

const Navbar = () => {
  return (
    <nav className="nav text-white p-4 w-full">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/home" className="text-xl font-bold">
          {/* <img src={logo} alt="SmartAgro Logo" className='h-20 bg-white'/> */}
         <div className="text-2xl font-bold">SmartAgro</div>
        </Link>
        <ul className="flex space-x-4 text-lg">
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
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/signup">Sign-Up</Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar