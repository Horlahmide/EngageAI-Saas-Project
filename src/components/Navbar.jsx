import React from "react";
import { Sparkles } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-inner">
        <div className="navbar-logo">
          <div className="navbar-logo-icon">
            <Sparkles size={20} />
          </div>
          <span className="navbar-logo-text">EngageAI</span>
        </div>

        {/* Desktop Links */}
        <div className="navbar-links">
          <a href="#features">Features</a>
          <a href="#pricing">Pricing</a>
          <a href="#faq">FAQ</a>
          <a href="#">Affiliate</a>
        </div>

        {/* Desktop Actions */}
        <div className="navbar-actions">
          <button className="navbar-login">Login</button>
          <button className="btn-primary navbar-cta">Get Started</button>
        </div>

        {/* Mobile Hamburger */}
        <div className="navbar-hamburger">
          <span></span>
          <span></span>
          <span></span>
        </div>

        {/* Mobile Menu Dropdown */}
        <div className="mobile-menu">
          <a href="#features">Features</a>
          <a href="#pricing">Pricing</a>
          <a href="#faq">FAQ</a>
          <a href="#">Affiliate</a>
          <div className="mobile-menu-actions">
            <button className="navbar-login">Login</button>
            <button className="btn-primary navbar-cta">Get Started</button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
