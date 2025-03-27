import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const NewsTicker = () => {
  const news = [
    "Breaking: Major technological breakthrough announced",
    "Markets reach all-time high",
    "New environmental policy unveiled",
    "Sports: Championship finals tonight"
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % news.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="border-y border-black/10 bg-gradient-to-r from-neutral-50 to-white">
      <div className="max-w-[1920px] mx-auto">
        <div className="flex items-center h-auto sm:h-12 px-2 sm:px-4 relative">
          {/* Left Fade Effect - Hidden on mobile */}
          <div className="hidden sm:block absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-white to-transparent z-10" />
          
          {/* Latest News Label */}
          <div className="relative z-20 flex items-center mr-3 sm:mr-6 py-2 sm:py-0">
            <span className="font-serif text-xs sm:text-sm tracking-wider px-2 sm:px-3 py-1 bg-black text-white italic whitespace-nowrap">
              Latest
            </span>
            {/* Decorative Elements - Hidden on mobile */}
            <div className="hidden sm:flex ml-4 items-center space-x-1">
              <div className="w-1.5 h-1.5 bg-black/80 rotate-45" />
              <div className="w-1.5 h-1.5 bg-black/60 rotate-45" />
              <div className="w-1.5 h-1.5 bg-black/40 rotate-45" />
            </div>
          </div>

          {/* News Content */}
          <div className="relative overflow-hidden flex-1 h-6">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -20, opacity: 0 }}
                transition={{ 
                  duration: 0.5,
                  ease: [0.22, 1, 0.36, 1]
                }}
                className="absolute w-full font-serif text-xs sm:text-sm text-black/80 truncate pr-2 sm:pr-0"
              >
                <span className="italic">{news[currentIndex]}</span>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right Side Navigation */}
          <div className="relative z-20 flex items-center space-x-2 sm:space-x-4 ml-2 sm:ml-6 pl-2 sm:pl-6 border-l border-black/10">
            <button 
              onClick={() => setCurrentIndex((prev) => (prev - 1 + news.length) % news.length)}
              className="w-5 h-5 sm:w-6 sm:h-6 flex items-center justify-center hover:bg-black/5 rounded-sm transition-colors text-sm sm:text-base"
            >
              ←
            </button>
            <button 
              onClick={() => setCurrentIndex((prev) => (prev + 1) % news.length)}
              className="w-5 h-5 sm:w-6 sm:h-6 flex items-center justify-center hover:bg-black/5 rounded-sm transition-colors text-sm sm:text-base"
            >
              →
            </button>
          </div>

          {/* Right Fade Effect - Hidden on mobile */}
          <div className="hidden sm:block absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-white to-transparent z-10" />
        </div>
      </div>
    </div>
  );
};

export default NewsTicker; 