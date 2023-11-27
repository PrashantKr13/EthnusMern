import React, { useState } from 'react'
import './dropdowncss.css'
import { Link } from 'react-router-dom';
import { useMyContext } from './Logged.jsx';

const DropdownMenu = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const { isLogged, setisLogged } = useMyContext()

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleLogout = () => {
    setisLogged(false)
  }

  return (
    <div className="navbar">
      <div className="menu-toggle" onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      {menuOpen && (
        <div className="menu">
          <ul>
            <li><Link to='/login' onClick={handleLogout}>Logout</Link></li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default DropdownMenu;
