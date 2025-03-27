import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import BreakingNews from './Pages/BreakingNews';
import Politics from './Pages/Politics';
import Business from './Pages/Business';
import Technology from './Pages/Technology';
import Science from './Pages/Science';
import Sports from './Pages/Sports';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

export const AppRoutes = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/breaking-news" element={<BreakingNews />} />
        <Route path="/politics" element={<Politics />} />
        <Route path="/business" element={<Business />} />
        <Route path="/technology" element={<Technology />} />
        <Route path="/science" element={<Science />} />
        <Route path="/sports" element={<Sports />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default AppRoutes; 