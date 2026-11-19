import React from "react";

import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <div>
          <Link to="/" className="footer-brand">MIAC Youth Skills</Link>
          <p>Practical skills. New opportunities. Brighter futures.</p>
        </div>
        <div className="footer-links">
          <Link to="/courses">Courses</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </div>
      <div className="container copyright">© {new Date().getFullYear()} MIAC Youth Skills App. All rights reserved.</div>
    </footer>
  );
}