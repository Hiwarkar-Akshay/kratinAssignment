import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ isLoggedIn }) => {
  const handleLogout = () => {
    // Perform logout logic
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-success">
      <Link className="navbar-brand" to="/">
        Rejuvenate Health Care
      </Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <Link className="nav-link" to="/about">About Us</Link>
          </li>
          <li className="nav-item">
            {isLoggedIn ? (
              <button className="btn btn-link nav-link" onClick={handleLogout}>Logout</button>
            ) : (
              <Link className="nav-link" to="/">Log In</Link>
            )}
          </li>
          {!isLoggedIn && (
            <li className="nav-item">
              <Link className="nav-link" to="/signup">Sign Up</Link>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
