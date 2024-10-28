import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
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
  const location = useLocation();

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <header className="fixed md:relative top-0 left-0 right-0 z-50">
        <nav className="w-full h-14 md:h-20 bg-bluesea/95 md:bg-transparent backdrop-blur-sm md:backdrop-blur-none flex justify-between items-center relative">
          {/* Logo e Título */}
          <Link to="/" onClick={closeMenu} className="flex items-center ml-2 md:ml-6">
            <div className="flex items-center">
              <img src={logo} alt="Logo" className="h-8 md:h-16"/>
              <h2 className="text-white text-3xl md:text-5xl font-jomhuria ml-2">
                Aqualog
              </h2>
            </div>
          </Link>

          {/* Botão Menu Mobile */}
          <button 
            onClick={toggleMenu}
            className="md:hidden mr-4 text-white focus:outline-none z-50"
            aria-label={isMenuOpen ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={isMenuOpen}
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
            <NavigationLink to="/" onClick={closeMenu}>Home</NavigationLink>
            <NavigationLink to="/sobre" onClick={closeMenu}>Sobre Nós</NavigationLink>
            <NavigationLink to="/sos" className='mr-8' onClick={closeMenu}>S.O.S</NavigationLink>
          </ul>

          {/* Menu Mobile */}
          {isMenuOpen && (
            <div className="fixed inset-0 bg-black bg-opacity-50 md:hidden" onClick={closeMenu}>
              <div 
                className="absolute top-14 left-0 right-0 bg-bluesea/95 backdrop-blur-sm"
                onClick={e => e.stopPropagation()}
              >
                <ul className="flex flex-col w-full text-white font-poppins font-semibold">
                  <li className="w-full border-b border-cyan/20">
                    <Link to="/" onClick={closeMenu} className="py-3 px-6 block w-full hover:bg-cyan/20">
                      Home
                    </Link>
                  </li>
                  <li className="w-full border-b border-cyan/20">
                    <Link to="/sobre" onClick={closeMenu} className="py-3 px-6 block w-full hover:bg-cyan/20">
                      Sobre Nós
                    </Link>
                  </li>
                  <li className="w-full border-b border-cyan/20">
                    <Link to="/sos" onClick={closeMenu} className="py-3 px-6 block w-full hover:bg-cyan/20">
                      S.O.S
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          )}
        </nav>
      </header>
      {/* Espaçador apenas para mobile */}
      <div className="h-14 md:h-0"/>
    </>
  );
};

export default Navigation;