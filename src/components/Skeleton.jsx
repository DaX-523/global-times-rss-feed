import React from 'react';

const Skeleton = ({ className = '', variant = 'rectangular' }) => {
  const baseClasses = "animate-pulse bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 background-animate";
  
  const variantClasses = {
    rectangular: "w-full h-full",
    text: "h-4 w-3/4",
    title: "h-8 w-1/2",
    circular: "rounded-full"
  };

  return (
    <div 
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
      style={{
        backgroundSize: '200% 100%',
        animation: 'shimmer 1.5s infinite linear'
      }}
    />
  );
};

// Add shimmer animation to global styles
const style = document.createElement('style');
style.textContent = `
  @keyframes shimmer {
    0% {
      background-position: 100% 0;
    }
    100% {
      background-position: -100% 0;
    }
  }
  .background-animate {
    background-size: 200% 100%;
    animation: shimmer 1.5s infinite linear;
  }
`;
document.head.appendChild(style);

export default Skeleton; 