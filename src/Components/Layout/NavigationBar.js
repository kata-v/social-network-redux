import React from 'react';
import Logo from './Logo';

const NavigationBar = () => {
    return (
        
            <nav>
    <div className="nav-wrapper">
      <Logo/>
      <ul className="left hide-on-med-and-down">
        <li><a href="/">Home</a></li>
        <li><a href="/notregistered">Register</a></li>
        <li><a href="/login">Log in</a></li>
        {/* <li className="active"><a href="/login">Log in</a></li> */}
      </ul>
    </div>
  </nav>
        
    );
}

export default NavigationBar;
