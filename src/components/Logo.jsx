import React from 'react';
import { Link } from 'react-router-dom';

const Logo = () => {
  return (
    <Link to="/" className="flex items-center space-x-2 transform hover:scale-105 transition-transform duration-300">
      <div className="relative">
        {/* Newspaper Icon */}
        <div className="w-12 h-12 border-4 border-black transform -rotate-1">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 border-2 border-black"></div>
        </div>
        {/* Decorative Elements */}
        <div className="absolute -top-1 -right-1 w-3 h-3 bg-black transform rotate-12"></div>
        <div className="absolute -bottom-1 -left-1 w-3 h-3 bg-black transform -rotate-12"></div>
      </div>
      <div className="text-center">
        <span className="text-xl font-serif font-bold text-black italic block">Evening</span>
        <span className="text-xl font-serif font-bold text-black italic block">Edition</span>
      </div>
    </Link>
  );
};

export default Logo;