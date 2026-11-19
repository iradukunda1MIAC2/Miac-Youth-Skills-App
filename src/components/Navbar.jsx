import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="site-header">
      <div className="container nav-wrap">
        <Link to="/" className="brand" onClick={closeMenu} aria-label="MIAC home">
          <img src="/images/student.jpg" alt="MIAC logo" className="brand-logo"
            onError={(event) => { event.currentTarget.style.display = "none"; }} />
          <span>MIAC <b>Youth Skills</b></span>
        </Link>
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation" aria-expanded={menuOpen}>
          {menuOpen ? "✕" : "☰"}
        </button>
        <nav className={menuOpen ? "nav-links open" : "nav-links"}>
          <NavLink to="/" end onClick={closeMenu}>Home</NavLink>
          <NavLink to="/courses" onClick={closeMenu}>Courses</NavLink>
          <NavLink to="/about" onClick={closeMenu}>About Us</NavLink>
          <NavLink to="/contact" onClick={closeMenu}>Contact</NavLink>
          <NavLink to="/login" onClick={closeMenu}>Login</NavLink>
          <Link className="profile-link" to="/dashboard" onClick={closeMenu} aria-label="Open profile">
            <img src="/images/my-profile.jpg" alt="My profile" className="nav-profile-photo" />
            <span className="profile-name">My Profile</span>
          </Link>
          <Link className="button button-small" to="/register" onClick={closeMenu}>Get Started</Link>
        </nav>
      </div>
    </header>
  );
}
