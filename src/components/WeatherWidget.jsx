import React, { useState, useEffect } from "react";
import {
  WiDaySunny,
  WiCloudy,
  WiHumidity,
  WiStrongWind,
  WiRain,
  WiThunderstorm,
} from "react-icons/wi";
import { motion } from "framer-motion";

const WeatherCard = ({ city, temperature, condition, description }) => {
  const getWeatherIcon = (condition) => {
    if (!condition)
      return <WiDaySunny className="text-6xl text-gray-800 mb-4" />;

    switch (condition.toLowerCase()) {
      case "sunny":
      case "clear":
        return <WiDaySunny className="text-6xl text-gray-800 mb-4" />;
      case "partly cloudy":
      case "cloudy":
      case "overcast":
        return <WiCloudy className="text-6xl text-gray-600 mb-4" />;
      case "mist":
      case "fog":
      case "humid":
        return <WiHumidity className="text-6xl text-gray-700 mb-4" />;
      case "patchy rain possible":
      case "light rain":
      case "moderate rain":
      case "light rain shower":
        return <WiRain className="text-6xl text-gray-600 mb-4" />;
      case "thundery outbreaks possible":
      case "moderate or heavy rain with thunder":
        return <WiThunderstorm className="text-6xl text-gray-700 mb-4" />;
      default:
        return <WiDaySunny className="text-6xl text-gray-800 mb-4" />;
    }
  };

  const getDescriptionIcon = (description) => {
    if (!description || typeof description !== "string") return null;
    if (description.toLowerCase().includes("breeze")) {
      return <WiStrongWind className="inline text-xl text-gray-500 mr-2" />;
    } else if (
      description.toLowerCase().includes("shower") ||
      description.toLowerCase().includes("rain")
    ) {
      return <WiRain className="inline text-xl text-gray-500 mr-2" />;
    } else if (description.toLowerCase().includes("thunder")) {
      return <WiThunderstorm className="inline text-xl text-gray-500 mr-2" />;
    }
    return null;
  };

  return (
    <div
      className="border-2 border-gray-300 p-6 flex flex-col items-center bg-white text-gray-900 
                    rounded-lg hover:shadow-xl hover:shadow-gray-400/30 transition-all duration-300 
                    transform hover:-translate-y-1 relative z-10"
    >
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
        ease: "easeInOut",
      },
    },
  };

  const sunRayVariants = {
    animate: {
      rotate: [0, 360],
      transition: {
        duration: 20,
        repeat: Infinity,
        ease: "linear",
      },
    },
  };

  if (!condition) return null;

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {condition.toLowerCase() === "sunny" && (
        <motion.div
          className="absolute top-1/4 left-1/4 w-32 h-32 bg-gray-200 rounded-full opacity-20"
          variants={sunRayVariants}
          animate="animate"
        />
      )}
      {(condition.toLowerCase() === "partly cloudy" ||
        condition.toLowerCase() === "humid" ||
        condition.toLowerCase() === "cloudy" ||
        condition.toLowerCase() === "overcast") && (
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
  const [weatherData, setWeatherData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [userLocation, setUserLocation] = useState(null);

  useEffect(() => {
    // Get user's location
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setUserLocation({
            lat: position.coords.latitude,
            lon: position.coords.longitude,
          });
        },
        (error) => {
          console.error("Error getting location:", error);
          setError("Unable to get your location. Using default locations.");
          // Fall back to default locations if user denies permission
          fetchWeatherForDefaultLocations();
        }
      );
    } else {
      setError(
        "Geolocation is not supported by your browser. Using default locations."
      );
      fetchWeatherForDefaultLocations();
    }
  }, []);

  useEffect(() => {
    if (userLocation) {
      fetchNearbyLocations(userLocation.lat, userLocation.lon);
    }
  }, [userLocation]);

  const fetchNearbyLocations = async (lat, lon) => {
    try {
      // First, search for nearby locations using our proxy endpoint
      const searchResponse = await fetch(
        `/api/weather?endpoint=search.json&q=${lat},${lon}`
      );

      if (!searchResponse.ok) {
        throw new Error("Failed to fetch nearby locations");
      }

      const locationsData = await searchResponse.json();
      if (!locationsData || locationsData.length === 0) {
        throw new Error("No locations found");
      }

      // Get the main location (user's current location)
      const mainLocation = locationsData[0];

      // We'll get the country from the main location
      const countryName = mainLocation.country || "Unknown";

      // Dictionary of major cities by country
      const majorCitiesByCountry = {
        "United States": [
          { name: "New York", lat: 40.7128, lon: -74.006 },
          { name: "Los Angeles", lat: 34.0522, lon: -118.2437 },
          { name: "Chicago", lat: 41.8781, lon: -87.6298 },
        ],
        "United Kingdom": [
          { name: "London", lat: 51.5074, lon: -0.1278 },
          { name: "Manchester", lat: 53.4808, lon: -2.2426 },
          { name: "Birmingham", lat: 52.4862, lon: -1.8904 },
        ],
        Canada: [
          { name: "Toronto", lat: 43.6532, lon: -79.3832 },
          { name: "Vancouver", lat: 49.2827, lon: -123.1207 },
          { name: "Montreal", lat: 45.5017, lon: -73.5673 },
        ],
        Australia: [
          { name: "Sydney", lat: -33.8688, lon: 151.2093 },
          { name: "Melbourne", lat: -37.8136, lon: 144.9631 },
          { name: "Brisbane", lat: -27.4698, lon: 153.0251 },
        ],
        India: [
          { name: "Mumbai", lat: 19.076, lon: 72.8777 },
          { name: "Delhi", lat: 28.7041, lon: 77.1025 },
          { name: "Bangalore", lat: 12.9716, lon: 77.5946 },
        ],
        Germany: [
          { name: "Berlin", lat: 52.52, lon: 13.405 },
          { name: "Munich", lat: 48.1351, lon: 11.582 },
          { name: "Hamburg", lat: 53.5511, lon: 9.9937 },
        ],
        France: [
          { name: "Paris", lat: 48.8566, lon: 2.3522 },
          { name: "Marseille", lat: 43.2965, lon: 5.3698 },
          { name: "Lyon", lat: 45.764, lon: 4.8357 },
        ],
        Japan: [
          { name: "Tokyo", lat: 35.6762, lon: 139.6503 },
          { name: "Osaka", lat: 34.6937, lon: 135.5023 },
          { name: "Kyoto", lat: 35.0116, lon: 135.7681 },
        ],
        Brazil: [
          { name: "São Paulo", lat: -23.5505, lon: -46.6333 },
          { name: "Rio de Janeiro", lat: -22.9068, lon: -43.1729 },
          { name: "Brasília", lat: -15.7801, lon: -47.9292 },
        ],
        China: [
          { name: "Beijing", lat: 39.9042, lon: 116.4074 },
          { name: "Shanghai", lat: 31.2304, lon: 121.4737 },
          { name: "Guangzhou", lat: 23.1291, lon: 113.2644 },
        ],
      };

      // Default cities if the country isn't in our list
      const defaultCities = [
        { name: "New York", lat: 40.7128, lon: -74.006 },
        { name: "London", lat: 51.5074, lon: -0.1278 },
        { name: "Tokyo", lat: 35.6762, lon: 139.6503 },
      ];

      // Get the major cities from the user's country or use defaults
      let majorCities = majorCitiesByCountry[countryName] || defaultCities;

      // Ensure we don't pick the user's current city if it's one of the major cities
      majorCities = majorCities.filter(
        (city) => city.name.toLowerCase() !== mainLocation.name.toLowerCase()
      );

      // If we don't have enough cities after filtering, add from defaults
      if (majorCities.length < 2) {
        for (
          let i = 0;
          i < defaultCities.length && majorCities.length < 2;
          i++
        ) {
          if (
            defaultCities[i].name.toLowerCase() !==
            mainLocation.name.toLowerCase()
          ) {
            majorCities.push(defaultCities[i]);
          }
        }
      }

      // Select the first two cities
      const selectedCities = majorCities.slice(0, 2);

      // Fetch weather for all three locations
      const allLocations = [selectedCities[0], mainLocation, selectedCities[1]];

      const weatherPromises = allLocations.map((location) =>
        fetchWeather(location.lat, location.lon, location.name)
      );

      const weatherResults = await Promise.all(weatherPromises);
      setWeatherData(weatherResults);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching nearby locations:", error);
      setError("Error fetching weather data. Using default locations.");
      fetchWeatherForDefaultLocations();
    }
  };

  const fetchWeatherForDefaultLocations = async () => {
    try {
      const defaultLocations = [
        { name: "New York", lat: 40.7128, lon: -74.006 },
        { name: "London", lat: 51.5074, lon: -0.1278 },
        { name: "Tokyo", lat: 35.6762, lon: 139.6503 },
      ];

      const weatherPromises = defaultLocations.map((location) =>
        fetchWeather(location.lat, location.lon, location.name)
      );

      const weatherResults = await Promise.all(weatherPromises);
      setWeatherData(weatherResults);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching default weather:", error);
      setError("Failed to fetch weather data.");
      // Fall back to static data if API fails
      setWeatherData([
        {
          city: "New York",
          temperature: 22,
          condition: "Sunny",
          description: "Clear skies with light breeze",
        },
        {
          city: "London",
          temperature: 18,
          condition: "Partly Cloudy",
          description: "Scattered showers expected",
        },
        {
          city: "Tokyo",
          temperature: 25,
          condition: "Humid",
          description: "Possible thunderstorms",
        },
      ]);
      setLoading(false);
    }
  };

  const fetchWeather = async (lat, lon, locationName) => {
    try {
      const response = await fetch(
        `/api/weather?endpoint=current.json&q=${lat},${lon}&aqi=no`
      );

      if (!response.ok) {
        throw new Error("Failed to fetch weather data");
      }

      const data = await response.json();
      return {
        city: locationName || data.location.name,
        temperature: data.current.temp_c,
        condition: data.current.condition.text,
        description: `Feels like ${data.current.feelslike_c}°C, ${data.current.humidity}% humidity`,
      };
    } catch (error) {
      console.error(`Error fetching weather for ${locationName}:`, error);
      // Return placeholder data for this location if API call fails
      return {
        city: locationName,
        temperature: 20,
        condition: "Unknown",
        description: "Weather data unavailable",
      };
    }
  };

  if (loading) {
    return (
      <div className="my-12 px-4 bg-white relative">
        <h1 className="text-4xl font-bold text-center mb-10 text-gray-900 tracking-tight">
          Weather Report
        </h1>
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gray-900"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="my-12 px-4 bg-white relative">
      <h1 className="text-4xl font-bold text-center mb-10 text-gray-900 tracking-tight">
        Weather Report
      </h1>
      {error && <div className="text-center mb-4 text-red-500">{error}</div>}
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
