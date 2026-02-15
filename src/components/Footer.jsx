import React from "react";
import {
  Sparkles,
  Twitter,
  Github,
  Linkedin,
  MessageCircle,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <div className="footer-logo">
              <Sparkles size={24} />
              <span>EngageAI</span>
            </div>
            <p>
              Empowering creators and businesses with state-of-the-art AI
              content generation. Build your future, one word at a time.
            </p>
            <div className="footer-socials">
              <a href="#">
                <Twitter size={18} />
              </a>
              <a href="#">
                <Github size={18} />
              </a>
              <a href="#">
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          <div className="footer-col">
            <h4>Company</h4>
            <ul>
              <li>
                <a href="#">About Us</a>
              </li>
              <li>
                <a href="#">Career</a>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
              <li>
                <a href="#">Privacy Policy</a>
              </li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Use Cases</h4>
            <ul>
              <li>
                <a href="#">Marketing</a>
              </li>
              <li>
                <a href="#">Social Media</a>
              </li>
              <li>
                <a href="#">SEO Content</a>
              </li>
              <li>
                <a href="#">Email Campaigns</a>
              </li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Support</h4>
            <ul>
              <li>
                <a href="#">Help Center</a>
              </li>
              <li>
                <a href="#">API Docs</a>
              </li>
              <li>
                <a href="#">Community</a>
              </li>
              <li>
                <a href="#">Contact Us</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2026 EngageAI. All rights reserved.</p>
          <div className="footer-status">
            <div>
              <span className="status-dot"></span>
              Systems Operational
            </div>
            <div>
              <MessageCircle size={16} />
              English
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
