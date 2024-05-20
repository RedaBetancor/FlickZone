import "./Header.css";
import { useState } from "react";
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from "react-router-dom";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <header className="header">
        <img
          src="../../public/fotos/FlickZone.png"
          alt="Logo"
          id="header-logo"
        />

        <nav className="nav-bar">
          <a href="/Home">
            <span>Inicio</span>
          </a>

          <a href="/Series">
            <span>Series</span>
          </a>

          <a href="/Lista">
            <span>Mi Lista</span>
          </a>
        </nav>

        <nav className="second-nav-bar">
          <span className="material-symbols-outlined">search</span>

          <span className="material-symbols-outlined">notifications</span>

          <img src="../../public/fotos/pfp.png" alt="pfp" id="pfp-image" />
        </nav>
        <div className="hamburger-menu">
          <div className="menu-icon" onClick={toggleMenu}>
            {isOpen ? <FaTimes /> : <FaBars />}
          </div>
          <ul className={`menu-links ${isOpen ? 'open' : ''}`}>
            <li>
              <Link to="/" onClick={toggleMenu}>Inicio</Link>
            </li>
            <li>
              <Link to="/Series" onClick={toggleMenu}>Series</Link>
            </li>
            <li>
              <Link to="/Lista" onClick={toggleMenu}>Mi Lista</Link>
            </li>
          </ul>
        </div>
      </header>
    </div>
  );
}

export default Header;
