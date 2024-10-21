import React from "react";
import logo from '../assets/logo.png';



const Page = () => {
    return (
        <body className="flex bg-bluesea w-screen h-screen">
            {/* Cabeçalho */}
            <header>
                {/* Menu de Navegação */}
                <nav className="w-screen h-20 bg-transparent flex justify-between items-center">
                    <div className="flex items-center ml-6 mt-4">
                        <img src={logo} alt="Logo" className="h-16 ml-4"/>
                        <h2 className="text-white text-5xl ml-4 font-jomhuria mt-1">Aqualog</h2>
                    </div>
                    <ul className="flex items-center text-white font-poppins font-semibold ">
                        <li className="px-2"><a href="#home" className="hover:text-cyan hover:border-b-2 hover:border-cyan transition duration-500 ease-in-out">Home</a></li>
                        <li className="px-2"><a href="#sobre" className="hover:text-cyan hover:border-b-2 hover:border-cyan transition duration-500 ease-in-out">Sobre Nós</a></li>
                        <li className="px-2"><a href="#servicos" className="hover:text-cyan hover:border-b-2 hover:border-cyan transition duration-500 ease-in-out">S.O.S</a></li>
                        <li className="px-2 mr-12"><a href="#contato" className="hover:text-cyan hover:border-b-2 hover:border-cyan transition duration-500 ease-in-out">Ajuda</a></li>
                    </ul>
                </nav>
            </header>
        </body>
    );
}


export default Page;