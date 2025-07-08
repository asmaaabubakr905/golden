import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaFacebookF, FaInstagram, FaBars, FaTimes } from 'react-icons/fa';
import logo from '../assets/WhatsAppImage2025-07-04at00.56.28_e95a1a63.png';

const Header = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Tours', href: '/tours' },
    { name: 'Contact', href: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed w-full top-0 left-0 z-50 bg-white/80 backdrop-blur shadow-sm transition-all duration-300">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 py-3">
        {/* Logo & Brand */}
        <Link to="/" className="flex items-center space-x-2 sm:space-x-3 flex-shrink-0">
          <div className="w-10 h-10 sm:w-14 sm:h-14 rounded-full overflow-hidden flex items-center justify-center">
            <img src={logo} alt="Golden Phoenix Tours Logo" className="w-full h-full object-contain" />
          </div>
          <div>
            <div className="text-lg sm:text-2xl font-extrabold text-gray-800 tracking-wide">GOLDEN PHOENIX</div>
            <div className="text-xs text-gray-500 tracking-widest hidden sm:block">TOURS & TRAVEL</div>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex flex-1 justify-center">
          <ul className="flex space-x-8 font-medium text-gray-700">
            {navLinks.map((item) => (
              <li key={item.name}>
                <Link
                  to={item.href}
                  className={`hover:text-orange-500 transition relative after:content-[''] after:block after:h-0.5 after:bg-orange-500 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 ${isActive(item.href) ? 'text-orange-500 after:scale-x-100' : ''}`}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Desktop Social + Book Now */}
        <div className="hidden sm:flex items-center space-x-3 lg:space-x-4">
          <a
            href="https://www.facebook.com/share/1BqnbCHoTA/?mibextid=wwXIfr"
            target="_blank"
            rel="noopener noreferrer"
            className="w-8 h-8 lg:w-9 lg:h-9 flex items-center justify-center rounded-full bg-gray-100 hover:bg-orange-500 hover:text-white text-orange-500 transition"
            aria-label="Facebook"
          >
            <FaFacebookF size={16} />
          </a>
          <a
            href="https://www.instagram.com/golden_phoenix_tours"
            target="_blank"
            rel="noopener noreferrer"
            className="w-8 h-8 lg:w-9 lg:h-9 flex items-center justify-center rounded-full bg-gray-100 hover:bg-orange-500 hover:text-white text-orange-500 transition"
            aria-label="Instagram"
          >
            <FaInstagram size={16} />
          </a>
          <Link
            to="/tours"
            className="bg-orange-500 text-white px-4 py-2 lg:px-6 lg:py-2 rounded-full shadow font-bold text-sm lg:text-base hover:bg-orange-600 transition"
          >
            Book Now
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="lg:hidden p-2 rounded-md hover:bg-gray-100 transition"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <div className={`lg:hidden transition-all duration-300 ease-in-out ${isMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'} overflow-hidden bg-white/95 backdrop-blur border-t border-gray-200`}>
        <div className="px-4 py-4 space-y-4">
          {/* Mobile Navigation Links */}
          <ul className="space-y-3">
            {navLinks.map((item) => (
              <li key={item.name}>
                <Link
                  to={item.href}
                  onClick={closeMenu}
                  className={`block py-2 px-3 rounded-md font-medium transition ${
                    isActive(item.href) 
                      ? 'text-orange-500 bg-orange-50' 
                      : 'text-gray-700 hover:text-orange-500 hover:bg-gray-50'
                  }`}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>

          {/* Mobile Social + Book Now */}
          <div className="flex items-center justify-between pt-4 border-t border-gray-200">
            <div className="flex items-center space-x-3">
              <a
                href="https://www.facebook.com/share/1BqnbCHoTA/?mibextid=wwXIfr"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-100 hover:bg-orange-500 hover:text-white text-orange-500 transition"
                aria-label="Facebook"
              >
                <FaFacebookF size={18} />
              </a>
              <a
                href="https://www.instagram.com/golden_phoenix_tours"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-100 hover:bg-orange-500 hover:text-white text-orange-500 transition"
                aria-label="Instagram"
              >
                <FaInstagram size={18} />
              </a>
            </div>
            <Link
              to="/tours"
              onClick={closeMenu}
              className="bg-orange-500 text-white px-6 py-2 rounded-full shadow font-bold text-base hover:bg-orange-600 transition"
            >
              Book Now
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;