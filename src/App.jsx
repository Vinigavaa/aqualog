import React from 'react';
import { Routes, Route } from 'react-router-dom'; // Remova BrowserRouter daqui
import Navigation from './components/Navigation';
import Page from './components/Page';
import About from './components/About';

const App = () => {
  return (
    <div className="bg-bluesea min-h-screen">
      <Navigation />
      <Routes>
        <Route path="/" element={<Page />} />
        <Route path="/sobre" element={<About />} />
      </Routes>
    </div>
  );
};

export default App;