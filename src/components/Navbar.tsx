import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="navbar container">
      <div className="nav-logo">
        <div className="logo-icon"></div>
        <span className="logo-text">USANJ_AI</span>
      </div>
      
      <div className="nav-pill desktop-only">
        <a href="#home" className="active">Home</a>
        <a href="#infrastructure">Infrastructure</a>
        <a href="#mapping">Mapping</a>
        <a href="#deployments">Deployments</a>
        <a href="#echoes">Echoes</a>
      </div>
      
      <div className="nav-actions">
        <a href="#login" className="login-link desktop-only">Log In</a>
        <button className="btn btn-primary" aria-label="Sign up for USANJ_AI">Sign up</button>
      </div>
    </nav>
  );
};

export default Navbar;
