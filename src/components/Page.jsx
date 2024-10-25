import Img1 from '../assets/Bale.png';
import React from 'react';
import { Info, Smartphone, Activity, Database } from 'lucide-react';

const Page = () => {
  return (
    <main className="flex-1 px-4 md:px-14">
      <section className="container mx-auto py-8 md:py-12">
        {/* Seção Superior com Título e Descrição */}
        <div className="flex flex-col md:flex-row items-start justify-between mb-12">
          <div className="w-full md:w-3/6">
            <h1 className="text-4xl md:text-6xl font-reemkufi font-bold text-white mb-6 md:mb-10">
              O que é?
            </h1>
            <p className="text-base md:text-lg text-white/90 mb-8 font-poppins">
              O dispositivo <span className="text-cyan">Aqualog</span> é uma solução prática para profissionais que exploram o oceano. 
              <span className="text-cyan"> Ele facilita a coleta automática de dados</span>, como temperatura, visibilidade e profundidade. 
              Eliminando a necessidade de anotações manuais, reduzindo erros.
              <br /><br />
              Além de ajudar no planejamento dos mergulhos, o dispositivo também contribui 
              para a pesquisa científica ao coletar dados ao longo do tempo, promovendo colaborações 
              em estudos sobre mudanças climáticas e <span className="text-cyan">conservação marinha</span>. Como uma ferramenta 
              educacional, ele também ajuda a aumentar a conscientização sobre a <span className="text-cyan">saúde dos oceanos</span>. 
            </p>
          </div>
          <div className="w-full md:w-1/3">
            <img 
              src={Img1} 
              alt="Imagem" 
              className="object-cover w-full h-full rounded-lg"
            />
          </div>
        </div>

        {/* Grid de Cards de Benefícios */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white/5 p-6 rounded-lg backdrop-blur-sm">
            <Info className="w-6 h-6 text-cyan mb-4" />
            <p className="text-white/90">Elimina a necessidade de anotações manuais, permitindo monitoramento em tempo real.</p>
          </div>
          
          <div className="bg-white/5 p-6 rounded-lg backdrop-blur-sm">
            <Activity className="w-6 h-6 text-cyan mb-4" />
            <p className="text-white/90">Auxilia no planejamento de mergulhos e contribui para pesquisas sobre mudanças climáticas.</p>
          </div>
          
          <div className="bg-white/5 p-6 rounded-lg backdrop-blur-sm">
            <Database className="w-6 h-6 text-cyan mb-4" />
            <p className="text-white/90">É compatível com tecnologias modernas, aumentando a eficiência nas operações.</p>
          </div>
        </div>

        {/* Seção do Aplicativo */}
        <div className="bg-white/5 p-8 rounded-lg backdrop-blur-sm">
          <div className="flex items-center mb-6">
            <Smartphone className="w-8 h-8 text-cyan mr-4" />
            <h3 className="text-2xl font-bold text-white">Aplicativo Aqualog</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="flex items-start">
              <div className="w-2 h-2 bg-cyan rounded-full mr-3 mt-2"></div>
              <p className="text-white/90">Conexão via Bluetooth/Wi-Fi</p>
            </div>
            <div className="flex items-start">
              <div className="w-2 h-2 bg-cyan rounded-full mr-3 mt-2"></div>
              <p className="text-white/90">Gráficos sobre temperatura, profundidade e visibilidade</p>
            </div>
            <div className="flex items-start">
              <div className="w-2 h-2 bg-cyan rounded-full mr-3 mt-2"></div>
              <p className="text-white/90">Registro manual de observações adicionais</p>
            </div>
            <div className="flex items-start">
              <div className="w-2 h-2 bg-cyan rounded-full mr-3 mt-2"></div>
              <p className="text-white/90">Exportação de dados para análise posterior</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Page;
