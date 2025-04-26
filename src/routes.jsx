import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Politics from './Pages/Politics';
import Technology from './Pages/Technology';
import Sports from './Pages/Sports';
import NewsDetail from './Pages/NewsDetail';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Cryptocurrencies from './Pages/Cryptocurrencies';
import Finance from './Pages/Finance';
import Stocks from './Pages/Stocks';
import Healthcare from './Pages/Healthcare';

export const AppRoutes = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/politics" element={<Politics />} />
        <Route path="/technology" element={<Technology />} />
        <Route path="/sports" element={<Sports />} />
        <Route path="/cryptocurrencies" element={<Cryptocurrencies />} />
        <Route path="/finance" element={<Finance />} />
        <Route path="/stocks" element={<Stocks />} />
        <Route path="/healthcare" element={<Healthcare />} />
        <Route path="/news/:id" element={<NewsDetail />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default AppRoutes; 