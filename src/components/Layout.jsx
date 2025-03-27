import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { motion, AnimatePresence } from 'framer-motion';
import { useLocation } from 'react-router-dom';

const Layout = ({ children }) => {
  const location = useLocation();
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow w-full max-w-[2000px] mx-auto px-4 sm:px-6 lg:px-8 mt-[160px]">
        {children}
      </main>
    </div>
  );
};

export default Layout; 