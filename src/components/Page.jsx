import React from 'react';
import Img1 from '../assets/Bale.png';

const Page = () => {
  return (
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
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      </section>
    </main>
  );
};

export default Page;