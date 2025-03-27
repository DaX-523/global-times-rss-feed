import React from 'react';
import { useState, useEffect } from 'react';

const ThemeSwitcher = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  return (
    <button
      onClick={() => setIsDark(!isDark)}
      className="fixed bottom-4 right-4 p-3 rounded-full bg-black dark:bg-white
                 text-white dark:text-black transition-all duration-500"
    >
      {isDark ? '☀️' : '🌙'}
    </button>
  );
};

export default ThemeSwitcher; 