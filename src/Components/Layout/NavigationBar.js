import React from 'react';
import Logo from './Logo';
import { Link } from "react-router-dom";

const NavigationBar = () => {
    return (
        
            <nav>
    <div className="nav-wrapper">
      <Logo/>
      <ul className="left hide-on-med-and-down">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/notregistered">Register</Link></li>
        <li><Link to="/login">Log in</Link></li>
      </ul>
    </div>
  </nav>
        
    );
}

export default NavigationBar;
