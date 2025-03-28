import React from 'react';
import { WiDaySunny, WiCloudy, WiHumidity, WiStrongWind, WiRain, WiThunderstorm } from 'react-icons/wi';
import { motion } from 'framer-motion';

const WeatherCard = ({ city, temperature, condition, description }) => {
  const getWeatherIcon = (condition) => {
    switch (condition.toLowerCase()) {
      case 'sunny':
        return <WiDaySunny className="text-6xl text-gray-800 mb-4" />;
      case 'partly cloudy':
        return <WiCloudy className="text-6xl text-gray-600 mb-4" />;
      case 'humid':
        return <WiHumidity className="text-6xl text-gray-700 mb-4" />;
      default:
        return <WiDaySunny className="text-6xl text-gray-800 mb-4" />;
    }
  };
  const getDescriptionIcon = (description) => {
    if (!description || typeof description !== 'string') return null;
    if (description.toLowerCase().includes('breeze')) {
      return <WiStrongWind className="inline text-xl text-gray-500 mr-2" />;
    } else if (description.toLowerCase().includes('showers')) {
      return <WiRain className="inline text-xl text-gray-500 mr-2" />;
    } else if (description.toLowerCase().includes('thunderstorms')) {
      return <WiThunderstorm className="inline text-xl text-gray-500 mr-2" />;
    }
    return null;
  };  

  return (
    <div className="border-2 border-gray-300 p-6 flex flex-col items-center bg-white text-gray-900 
                    rounded-lg hover:shadow-xl hover:shadow-gray-400/30 transition-all duration-300 
                    transform hover:-translate-y-1 relative z-10">
      <h2 className="text-2xl font-semibold mb-4 tracking-wide">{city}</h2>
      {getWeatherIcon(condition)}
      <div className="text-5xl font-extrabold mb-3">{temperature}°C</div>
      <div className="text-lg font-medium mb-3 opacity-90">{condition}</div>
      <div className="text-gray-500 italic text-sm flex items-center justify-center">
        {getDescriptionIcon(description)}
        <span>{description}</span>
      </div>
    </div>
  );
};

// Background Animation Component
const WeatherBackground = ({ condition }) => {
  const cloudVariants = {
    animate: {
      x: [0, 20, 0],
      transition: {
        duration: 8,
        repeat: Infinity,
        ease: 'easeInOut',
      },
    },
  };

  const sunRayVariants = {
    animate: {
      rotate: [0, 360],
      transition: {
        duration: 20,
        repeat: Infinity,
        ease: 'linear',
      },
    },
  };

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {condition.toLowerCase() === 'sunny' && (
        <motion.div
          className="absolute top-1/4 left-1/4 w-32 h-32 bg-gray-200 rounded-full opacity-20"
          variants={sunRayVariants}
          animate="animate"
        />
      )}
      {(condition.toLowerCase() === 'partly cloudy' || condition.toLowerCase() === 'humid') && (
        <>
          <motion.div
            className="absolute top-10 left-10 w-20 h-10 bg-gray-300 rounded-full opacity-30"
            variants={cloudVariants}
            animate="animate"
          />
          <motion.div
            className="absolute bottom-20 right-20 w-24 h-12 bg-gray-400 rounded-full opacity-20"
            variants={cloudVariants}
            animate="animate"
          />
        </>
      )}
    </div>
  );
};

const WeatherWidget = () => {
  const weatherData = [
    {
      city: "New York",
      temperature: 22,
      condition: "Sunny",
      description: "Clear skies with light breeze"
    },
    {
      city: "London",
      temperature: 18,
      condition: "Partly Cloudy",
      description: "Scattered showers expected"
    },
    {
      city: "Tokyo",
      temperature: 25,
      condition: "Humid",
      description: "Possible thunderstorms"
    }
  ];

  return (
    <div className="my-12 px-4 bg-white relative ">
      <h1 className="text-4xl font-bold text-center mb-10 text-gray-900 tracking-tight">
        Weather Report
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto relative z-10">
        {weatherData.map((data, index) => (
          <div key={index} className="relative">
            <WeatherBackground condition={data.condition} />
            <WeatherCard {...data} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default WeatherWidget;