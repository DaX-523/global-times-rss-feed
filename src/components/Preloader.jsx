import React from 'react';

const Preloader = ({ isLoading }) => {
  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-white">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-gray-100"></div>
      <div className="text-center relative z-10">
        {/* Flying Newspaper Animation */}
        <div className="relative w-64 h-64">
          {/* Main Flying Newspaper */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 animate-float">
            <div className="relative">
              {/* Newspaper */}
              <div className="w-32 h-40 bg-white border-2 border-black transform rotate-12 shadow-xl">
                {/* Newspaper Content Lines */}
                <div className="p-4 space-y-2">
                  <div className="w-full h-2 bg-black/10 rounded"></div>
                  <div className="w-3/4 h-2 bg-black/10 rounded"></div>
                  <div className="w-1/2 h-2 bg-black/10 rounded"></div>
                  <div className="w-full h-2 bg-black/10 rounded"></div>
                  <div className="w-2/3 h-2 bg-black/10 rounded"></div>
                </div>
                {/* Newspaper Header */}
                <div className="absolute top-2 left-0 right-0 text-center">
                  <div className="font-serif text-[8px] font-bold border-b border-black/20 mx-2">THE GLOBAL TIMES</div>
                </div>
              </div>

              {/* Flying Papers Effect */}
              <div className="absolute -left-16 -top-8 animate-paper-float-1">
                <div className="w-16 h-20 bg-white border border-black/20 transform -rotate-12 opacity-40"></div>
              </div>
              <div className="absolute -right-12 -bottom-6 animate-paper-float-2">
                <div className="w-16 h-20 bg-white border border-black/20 transform rotate-24 opacity-40"></div>
              </div>
            </div>
          </div>

          {/* Floating Letters/Small Papers */}
          <div className="absolute inset-0">
            {[...Array(6)].map((_, i) => (
              <div
                key={i}
                className="absolute animate-letter-float"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${i * 0.5}s`
                }}
              >
                <div className="w-4 h-6 bg-white border border-black/10 transform rotate-45 opacity-30"></div>
              </div>
            ))}
          </div>

          {/* Wind Effect Lines */}
          <div className="absolute inset-0 pointer-events-none">
            {[...Array(3)].map((_, i) => (
              <div
                key={i}
                className="absolute h-px bg-gradient-to-r from-transparent via-black/5 to-transparent animate-wind-line"
                style={{
                  top: `${30 + i * 20}%`,
                  left: '0',
                  right: '0',
                  animationDelay: `${i * 0.3}s`
                }}
              ></div>
            ))}
          </div>
        </div>

        {/* Loading Text */}
        <div className="mt-8 relative">
          <h2 className="font-serif text-3xl font-bold italic mb-3 text-gray-800">
            The Global Times
          </h2>
          <div className="relative">
            <div className="font-serif text-sm uppercase tracking-[0.3em] text-gray-600">
              <span className="animate-fade-in-1">Delivering</span>
              <span className="animate-fade-in-2"> Your</span>
              <span className="animate-fade-in-3"> News</span>
              <span className="animate-pulse">...</span>
            </div>
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-400 to-transparent"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Preloader; 