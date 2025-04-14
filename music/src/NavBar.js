import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand navbar-light bg-light mb-4">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">FaithTrack</Link>
        <div className="navbar-nav">
          <Link className="nav-link" to="/">All Albums</Link>
          <Link className="nav-link" to="/add">Add Album</Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
