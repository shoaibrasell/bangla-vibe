import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
  return (
    <nav>
     <Link to='/home'>Home</Link>
     <Link to='/review'>Order Review</Link>
     <Link to='/about'>About</Link>
     <Link to='/contact'>Contact</Link>
     <Link to='/login'>Login</Link>
    </nav>
  );
};

export default Header;