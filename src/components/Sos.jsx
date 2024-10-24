import React from "react";
import turtle from '../assets/turtle.png';
import bombeiros from '../assets/bombeiros.png';
import ima from '../assets/ima.png';
import { Phone, AlertCircle } from "lucide-react";

const Sos = () => {
  return (
    <main className="relative min-h-screen bg-gradient-to-b from-bluesea to-blue-900 text-white px-4 py-8 z-10">
      <div className="max-w-6xl mx-auto relative z-20">
        {/* Cabeçalho */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-reemkufi font-bold mb-4 text-cyan-300">
            SOS Animais Marinhos
          </h1>
          <p className="text-xl text-blue-200">
            Encontrou um animal marinho encalhado? Saiba como ajudar!
          </p>
        </div>

        {/* Conteúdo Principal */}
        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 md:p-8 mb-12">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="w-full md:w-1/2">
              <img
                src={turtle}
                alt="Tartaruga marinha"
                className="rounded-lg w-full h-auto shadow-lg hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="w-full md:w-1/2 space-y-6">
              <h2 className="text-2xl font-bold text-cyan-300 mb-4">
                Como Proceder
              </h2>
              <div className="flex items-start gap-3">
                <AlertCircle className="w-6 h-6 text-yellow-300 flex-shrink-0 mt-1" />
                <p className="text-blue-100">
                  Mantenha a calma e não toque ou mova o animal. 
                  Mantenha uma distância segura.
                </p>
              </div>

              <div className="flex items-start gap-3">
                <AlertCircle className="w-6 h-6 text-yellow-300 flex-shrink-0 mt-1" />
                <p className="text-blue-100">
                  Ligue imediatamente para as autoridades locais.
                </p>
              </div>

              <div className="flex items-start gap-3">
                <AlertCircle className="w-6 h-6 text-yellow-300 flex-shrink-0 mt-1" />
                <p className="text-blue-100">
                  Observe e anote detalhes importantes como localização, 
                  espécie e condição do animal.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Contatos de Emergência */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-colors duration-300">
            <div className="flex items-center gap-4">
              <Phone className="w-8 h-8 text-red-400" />
              <div>
                <h3 className="text-xl font-bold text-cyan-300">Bombeiros</h3>
                <p className="text-blue-100">Emergências 24h</p>
                <a href="tel:193" className="text-cyan-300 hover:text-cyan-200 font-bold">
                  193
                </a>
              </div>
            </div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-colors duration-300">
            <div className="flex items-center gap-4">
              <Phone className="w-8 h-8 text-green-400" />
              <div>
                <h3 className="text-xl font-bold text-cyan-300">IMA Santa Catarina</h3>
                <p className="text-blue-100">Instituto do Meio Ambiente</p>
                <a href="tel:4836651611" className="text-cyan-300 hover:text-cyan-200 font-bold">
                  (48) 3665-1611
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Imagens Adicionais */}
        <div className="grid md:grid-cols-2 gap-6">
          <img
            src={bombeiros}
            alt="Bombeiros"
            className="w-full h-48 object-cover rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
          />
          <img
            src={ima}
            alt="IMA"
            className="w-full h-48 object-cover rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
          />
        </div>
      </div>
    </main>
  );
};

export default Sos;
