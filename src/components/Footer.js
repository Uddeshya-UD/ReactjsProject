import React from 'react';
import '../css/FooterStyles.css'

const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-container">
          <div className="footer-column about-us">
            <h3>About Us</h3>
            <p>Ace Gym is a leading fitness center located in the vibrant Kalyanpur area of Kanpur. We are dedicated to helping individuals of all fitness levels achieve their health and wellness goals.</p>
          </div>
          <div className="footer-column">
            <h3>Contact</h3>
            <ul>
              <li>Address: Awas vikas , Kanpur</li>
              <li>Email: AceGym@example.com</li>
              <li>Phone: +1 234 567 890</li>
            </ul>
          </div>
          <div className="footer-column">
            <h3>Links</h3>
            <ul>
              <li><a className='footer-a' href="/">Home</a></li>
              <li><a className='footer-a' target="_blank " href="https://www.facebook.com/profile.php?id=100011671078350">Facebook</a></li>
              <li><a className='footer-a' target="_blank " href="https://www.instagram.com/uddeshya.music">Instagram</a></li>
            </ul>
          </div>
        
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Ace Gym Website. All rights reserved.</p>
        </div>
        </div>
    </div>
  );
};

export default Footer;
