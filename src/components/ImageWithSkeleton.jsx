import React, { useState } from 'react';
import Skeleton from './Skeleton';

const ImageWithSkeleton = ({ 
  src, 
  alt, 
  className = '', 
  aspectRatio = '4/3',
  objectFit = 'cover'
}) => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div 
      className="relative w-full overflow-hidden"
      style={{ aspectRatio }}
    >
      {isLoading && (
        <div className="absolute inset-0">
          <Skeleton className="w-full h-full" />
        </div>
      )}
      <img
        src={src}
        alt={alt}
        className={`w-full h-full transition-opacity duration-300 ${className} ${
          isLoading ? 'opacity-0' : 'opacity-100'
        }`}
        style={{ objectFit }}
        onLoad={() => setIsLoading(false)}
      />
    </div>
  );
};

export default ImageWithSkeleton; 