import React, { useState } from 'react';
import logo from '../assets/logo.png';
import Img1 from '../assets/Bale.png';

const NavigationLink = ({ href, children, onClick }) => (
  <li className="px-2">
    <a 
      href={href} 
      onClick={onClick}
      className="hover:text-cyan hover:border-b-2 hover:border-cyan transition duration-500 ease-in-out"
    >
      {children}
    </a>
  </li>
);

const Page = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className="bg-bluesea min-h-screen">
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
            <NavigationLink href="#home">Home</NavigationLink>
            <NavigationLink href="#sobre">Sobre Nós</NavigationLink>
            <NavigationLink href="#servicos">S.O.S</NavigationLink>
            <li className="px-2 mr-12">
              <NavigationLink href="#contato">Ajuda</NavigationLink>
            </li>
          </ul>

          {/* Menu Mobile */}
          <div 
            className={`${
              isMenuOpen ? 'flex' : 'hidden'
            } absolute top-20 left-0 right-0 bg-bluesea/95 backdrop-blur-sm md:hidden`}
          >
            <ul className="flex flex-col w-full text-white font-poppins font-semibold">
              <NavigationLink href="#home" onClick={closeMenu}>
                <div className="py-4 px-6 w-full hover:bg-cyan/20">Home</div>
              </NavigationLink>
              <NavigationLink href="#sobre" onClick={closeMenu}>
                <div className="py-4 px-6 w-full hover:bg-cyan/20">Sobre Nós</div>
              </NavigationLink>
              <NavigationLink href="#servicos" onClick={closeMenu}>
                <div className="py-4 px-6 w-full hover:bg-cyan/20">S.O.S</div>
              </NavigationLink>
              <NavigationLink href="#contato" onClick={closeMenu}>
                <div className="py-4 px-6 w-full hover:bg-cyan/20">Ajuda</div>
              </NavigationLink>
            </ul>
          </div>
        </nav>
      </header>

      <main className="flex-1 px-4 md:px-14">
        <section className="container mx-auto py-8 md:py-12">
          <div className="flex flex-col md:flex-row items-center justify-between">
            {/* Conteúdo de Texto */}
            <div className="w-full md:w-1/2 md:pr-12 mt-4 md:mt-8">
              <h1 className="text-4xl md:text-6xl font-reemkufi font-bold text-white mb-6 md:mb-10">
                O que é?
              </h1>
              <p className="text-base md:text-lg text-white/90 mb-8 font-poppins">
                O dispositivo <span className="text-cyan">Aqualog</span> é uma solução prática para profissionais que exploram o oceano. 
                <span className="text-cyan"> Ele facilita a coleta automática de dados</span>, como temperatura, visibilidade e profundidade. 
                Eliminando a necessidade de anotações manuais, reduzindo erros. <br />
                <br />Além de ajudar no planejamento dos mergulhos, o dispositivo também contribui 
                para a pesquisa científica ao coletar dados ao longo do tempo, promovendo colaborações 
                em estudos sobre mudanças climáticas e <span className="text-cyan">conservação marinha</span>. Como uma ferramenta 
                educacional, ele também ajuda a aumentar a conscientização sobre a <span className="text-cyan">saúde dos oceanos</span>. 
              </p>
            </div>

            {/* Imagem */}
            <div className="w-full md:w-1/3 mt-6 md:mt-0 md:mr-20">
              <img 
                src={Img1} 
                alt="Imagem" 
                className="object-cover w-full h-full rounded-lg shadow-lg"
              />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Page;