import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ZoomableImage = ({ src, alt }) => {
  const [isZoomed, setIsZoomed] = useState(false);

  return (
    <>
      <img
        src={src}
        alt={alt}
        onClick={() => setIsZoomed(true)}
        className="cursor-zoom-in transition-transform hover:scale-[1.02]"
      />
      
      <AnimatePresence>
        {isZoomed && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsZoomed(false)}
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center cursor-zoom-out"
          >
            <motion.img
              src={src}
              alt={alt}
              initial={{ scale: 0.5 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.5 }}
              className="max-h-[90vh] max-w-[90vw] object-contain"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ZoomableImage; 