import React from 'react';
import { Routes, Route } from 'react-router-dom'; 
import Navigation from './components/Navigation';
import Page from './components/Page';
import About from './components/About';
import Sos from './components/Sos';

const App = () => {
  return (
    <div className="bg-bluesea min-h-screen">
      <Navigation />
      <Routes>
        <Route path="/" element={<Page />} />
        <Route path="/sobre" element={<About />} />
        <Route path="/sos" element={<Sos />} />
      </Routes>
    </div>
  );
};

export default App;
