import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const SubscribeModal = ({ isOpen, onClose, onSubscribe }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subscriptionType: 'daily'
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle subscription submission here
    console.log('Subscription submitted:', formData);
    onSubscribe();
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50">
          <div className="flex items-center justify-center min-h-screen">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0"
              aria-hidden="true"
            >
              <div className="absolute inset-0 bg-black opacity-50"></div>
            </motion.div>

            {/* Modal */}
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: -20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              transition={{ duration: 0.2 }}
              className="relative w-full max-w-lg mx-4 bg-white shadow-2xl rounded-lg border-4 border-black"
            >
              {/* Close button */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 text-gray-500 hover:text-black transition-colors"
                aria-label="Close modal"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              <div className="p-8">
                {/* Header */}
                <div className="text-center mb-8">
                  <h3 className="text-3xl font-serif font-bold text-black italic mb-2">
                    Subscribe to The Global Times
                  </h3>
                  <p className="text-gray-600 font-serif italic">
                    Stay informed with our daily digital edition
                  </p>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-gray-700 font-serif italic mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border-2 border-black focus:outline-none font-serif italic bg-white hover:border-gray-600 focus:border-gray-900 transition-colors"
                      placeholder="Enter your full name"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-gray-700 font-serif italic mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border-2 border-black focus:outline-none font-serif italic bg-white hover:border-gray-600 focus:border-gray-900 transition-colors"
                      placeholder="Enter your email address"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="subscriptionType" className="block text-gray-700 font-serif italic mb-2">
                      Subscription Type
                    </label>
                    <select
                      id="subscriptionType"
                      name="subscriptionType"
                      value={formData.subscriptionType}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border-2 border-black focus:outline-none font-serif italic bg-white hover:border-gray-600 focus:border-gray-900 transition-colors"
                    >
                      <option value="daily">Daily Edition</option>
                      <option value="weekly">Weekly Edition</option>
                      <option value="digital">Digital Edition</option>
                    </select>
                  </div>

                  {/* Buttons */}
                  <div className="mt-8 flex justify-end space-x-4">
                    <button
                      type="button"
                      onClick={onClose}
                      className="px-6 py-3 border-2 border-black text-black font-serif italic hover:bg-gray-50 active:bg-gray-100 transition-all duration-300 transform hover:-rotate-1"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="px-6 py-3 bg-black text-white font-serif italic hover:bg-gray-800 active:bg-gray-900 transition-all duration-300 transform hover:-rotate-1"
                    >
                      Subscribe Now
                    </button>
                  </div>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default SubscribeModal; 