import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => (
  <header className="header">
    <h1>Sports Hub</h1>
    <nav>
      <NavLink to="/" className={({ isActive }) => (isActive ? "active-link nav-link" : "nav-link")}>
        Home
      </NavLink>
      
      <NavLink to="/profile" className={({ isActive }) => (isActive ? "active-link nav-link" : "nav-link")}>
        <img src="src/images/account.png" alt="Profile Icon" className="nav-icon" />
      </NavLink>
    </nav>
  </header>
);

export default Header;
