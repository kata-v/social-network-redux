import React from 'react';
import Logo from './Logo';
import { NavLink } from "react-router-dom";

const NavigationBar = () => {
    return (
        
            <nav>
    <div className="nav-wrapper">
      <Logo/>
      <ul className="left hide-on-med-and-down">
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/notregistered">Register</NavLink></li>
        <li><NavLink to="/login">Log in</NavLink></li>
        <li><NavLink to="/logout">Log out</NavLink></li>
      </ul>
    </div>
  </nav>
        
    );
}

export default NavigationBar;
