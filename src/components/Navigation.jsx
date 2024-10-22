import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

const NavigationLink = ({ to, children, onClick, className = '' }) => (
  <li className={`px-2 ${className}`}>
    <Link
      to={to}
      onClick={onClick}
      className="hover:text-cyan hover:border-b-2 hover:border-cyan transition duration-500 ease-in-out"
    >
      {children}
    </Link>
  </li>
);

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header>
      <nav className="w-full h-20 bg-transparent flex justify-between items-center relative">
        {/* Logo e Título */}
        <div className="flex items-center ml-2 md:ml-6 mt-4">
          <img src={logo} alt="Logo" className="h-12 md:h-16 ml-2 md:ml-4"/>
          <h2 className="text-white text-4xl md:text-5xl ml-2 md:ml-4 font-jomhuria mt-1">
            Aqualog
          </h2>
        </div>

        {/* Botão Menu Mobile */}
        <button 
          onClick={toggleMenu}
          className="md:hidden mr-4 text-white focus:outline-none"
        >
          <svg 
            className="w-6 h-6" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            {isMenuOpen ? (
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        {/* Links de Navegação Desktop */}
        <ul className="hidden md:flex items-center text-white font-poppins font-semibold">
          <NavigationLink to="/">Home</NavigationLink>
          <NavigationLink to="/sobre">Sobre Nós</NavigationLink>
          <NavigationLink to="/sos">S.O.S</NavigationLink>
          <NavigationLink to="/ajuda" className="mr-12">Ajuda</NavigationLink>
        </ul>

        {/* Menu Mobile */}
        <div 
          className={`${
            isMenuOpen ? 'flex' : 'hidden'
          } absolute top-20 left-0 right-0 bg-bluesea/95 backdrop-blur-sm md:hidden`}
        >
          <ul className="flex flex-col w-full text-white font-poppins font-semibold">
            <li className="w-full">
              <Link to="/" onClick={closeMenu} className="py-4 px-6 block w-full hover:bg-cyan/20">
                Home
              </Link>
            </li>
            <li className="w-full">
              <Link to="/sobre" onClick={closeMenu} className="py-4 px-6 block w-full hover:bg-cyan/20">
                Sobre Nós
              </Link>
            </li>
            <li className="w-full">
              <Link to="/sos" onClick={closeMenu} className="py-4 px-6 block w-full hover:bg-cyan/20">
                S.O.S
              </Link>
            </li>
            <li className="w-full">
              <Link to="/ajuda" onClick={closeMenu} className="py-4 px-6 block w-full hover:bg-cyan/20">
                Ajuda
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navigation;