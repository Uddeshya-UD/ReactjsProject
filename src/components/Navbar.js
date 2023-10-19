import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../css/NavbarStyles.css';
import { FaBars, FaTimes } from 'react-icons/fa';
import RequireAuth from '../authenticator/RequireAuth';

const Navbar = () => {
  const [click, setClick] = useState(false);
  const [session, setSession] = useState('');

  const handleclick = () => {
    setClick(!click);
  };

  // Use useEffect to call authenticate only when the component mounts
  useEffect(() => {
    authenticate();
  }, []);

  const authenticate = () => {
    let isAuthenticated = RequireAuth();
    if (isAuthenticated) {
      setSession('Logout');
    } else {
      setSession('Login');
    }
  };

  const handleLogout = () => {
    // Delete the "jwt" cookie here
    document.cookie = 'jwt=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';

  };

  return (
    <div className="header">
      <ul className={click ? 'nav-menu active' : 'nav-menu'}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/Contact">Contact</Link>
        </li>
        <li>
          <Link to="/Bmr">Bmr</Link>
        </li>

        <li>
          <Link to="/News">News</Link>
        </li>
        <li>
          {session === 'Logout' ? (
            <Link to="/" onClick={handleLogout}>
              {session}
            </Link>
          ) : (
            <Link to={`/${session}`}>{session}</Link>
          )}
        </li>
      </ul>
      <div className="hamburger" onClick={handleclick}>
        {click ? (
          <FaTimes size={20} style={{ color: 'white' }} />
        ) : (
          <FaBars size={20} style={{ color: 'white' }} />
        )}
      </div>
    </div>
  );
};

export default Navbar;
