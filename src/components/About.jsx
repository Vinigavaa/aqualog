import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from "lucide-react";
import Scorpion from '../assets/scorpions.jpeg';
import Scorpions from '../assets/scorpionss.jpeg';
import FFL from '../assets/FLL.png';

const About = () => {
    const fadeInUp = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
    };

    return (
        <div className="min-h-screen bg-gradient-to-b from-bluesea to-blue-950 text-white px-6 md:px-20 py-10">
            {/* Hero Section com Título Animado */}
            <motion.div 
                initial="hidden"
                animate="visible"
                variants={fadeInUp}
                transition={{ duration: 0.9 }}
                className="text-center mb-16"
            >
                <h1 className="font-reemkufi font-bold tracking-widest text-4xl md:text-5xl mt-6 mb-4 bg-clip-text text-transparent bg-gradient-to-r from-cyan to-blue-300">
                    QUEM SOMOS?
                </h1>
                <motion.div 
                    animate={{ y: [0, 10, 0] }} 
                    transition={{ duration: 2, repeat: Infinity }}
                    className="mt-8"
                >
                    <ChevronDown className="w-8 h-8 mx-auto text-cyan" />
                </motion.div>
            </motion.div>

            {/* Galeria de Imagens com Hover Effect */}
            <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="grid md:grid-cols-2 gap-8 mb-16"
            >
                <div className="group relative overflow-hidden rounded-xl">
                    <motion.img
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                        src={Scorpions}
                        alt="Equipe Scorpions"
                        className="w-full h-72 object-cover rounded-xl shadow-lg shadow-cyan"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <p className="text-white text-xl font-bold">Nosso Escudo</p>
                    </div>
                </div>

                <div className="group relative overflow-hidden rounded-xl">
                    <motion.img
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                        src={Scorpion}
                        alt="Atividades da Equipe"
                        className="w-full h-72 object-cover object-top rounded-xl shadow-lg shadow-cyan"
                        style={{
                            objectPosition: '60% 20%'
                        }}
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <p className="text-white text-xl font-bold">Nossa Equipe</p>
                    </div>
                </div>
            </motion.div>

            {/* Seção Principal */}
            <motion.div 
                initial="hidden"
                animate="visible"
                variants={fadeInUp}
                transition={{ delay: 0.6 }}
                className="w-full max-w-6xl mx-auto"
            >
                <div className="bg-gray-800/50 border border-cyan/50 rounded-xl p-8">
                    <div className="flex flex-col md:flex-row items-center gap-8">
                        <div className="flex-1 space-y-6">
                            <motion.h2 
                                whileHover={{ scale: 1.02 }}
                                className="font-reemkufi font-bold tracking-widest text-3xl md:text-4xl text-cyan"
                            >
                                SCORPIONS
                            </motion.h2>
                            <p className="text-lg md:text-xl leading-relaxed text-gray-200">
                                Nossa equipe, Scorpions, formada por estudantes de diversas idades e habilidades, está competindo pela terceira vez no torneio de robótica First Lego League (FLL) em Criciúma, SC. Nosso foco é desenvolver soluções inovadoras para os desafios do evento, combinando programação, engenharia e design para criar robôs eficientes e alinhados ao espírito colaborativo da equipe.
                            </p>
                            <p className="text-lg md:text-xl leading-relaxed text-gray-200">
                                Valorizamos ética, respeito e inclusão, promovendo um ambiente positivo onde todos contribuem. Estamos ansiosos para compartilhar nossas experiências, aprender com outras equipes e mostrar nossa paixão pela robótica. Venha torcer pela equipe Scorpions e fazer parte dessa jornada incrível!
                            </p>
                        </div>
                        <motion.div 
                            whileHover={{ scale: 1.05 }}
                            className="w-full md:w-1/3"
                        >
                            <img
                                src={FFL}
                                alt="Logo FLL"
                                className="w-full border border-cyan/30 rounded-xl transition-transform duration-300"
                            />
                        </motion.div>
                    </div>
                </div>
            </motion.div>

            {/* Estatísticas */}
            <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 text-center"
            >
                {[
                    { value: "3ª", label: "Participação FLL" },
                    { value: "10+", label: "Membros" },
                    { value: "100%", label: "Dedicação" },
                    { value: "5+", label: "Projetos" }
                ].map((stat, index) => (
                    <motion.div
                        key={index}
                        whileHover={{ scale: 1.05 }}
                        className="p-6 rounded-lg bg-gray-800/30 border border-cyan/20 transition-all duration-300 hover:border-cyan/40 hover:bg-gray-800/40"
                    >
                        <h3 className="text-3xl font-bold text-cyan">{stat.value}</h3>
                        <p className="text-gray-300">{stat.label}</p>
                    </motion.div>
                ))}
            </motion.div>
        </div>
    );
};

export default About;