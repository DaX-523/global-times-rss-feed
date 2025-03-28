import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '../components/Layout';
import Preloader from '../components/Preloader';
import ImageWithSkeleton from '../components/ImageWithSkeleton';
import { articles } from '../data/articles';
import globalEconomicSummitImage from '../assets/global-markets-rally-on-economic-data-stock-market.jpg';
import CryptoCurrencyImage from '../assets/cryptocurrency-regulation-framework-proposed.jpg';
import electricVehicleMarketImage from '../assets/electric-vehicle-market-expansion-major-automakers.jpg';
import BreaktroughImage from '../assets/breakthrough-in-quantum-computing.jpg';
import GeneTherapyImage from '../assets/gene-therapy-success-in-cancer-treatment.jpg';
import OceanCleanupImage from '../assets/ocean-cleanup-technology-breakthrough (1).jpg';
import WeatherWidget from '../components/WeatherWidget';

const Home = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // Show preloader for 2 seconds

    return () => clearTimeout(timer);
  }, []);

  const handleArticleClick = (articleId) => {
    navigate(`/news/${articleId}`);
  };

  const mainStory = articles['climate-summit'];
  const sideStories = [
    articles['tech-giants-ai'],
    articles['space-tourism']
  ];

  const businessNews = [
    {
      title: "Global Markets Rally on Economic Data",
      description: "Stock markets worldwide surge as latest economic indicators show stronger-than-expected growth",
      score: "S&P 500 +2.3% | NASDAQ +3.1% | FTSE +1.8%",
      timestamp: "4 hours ago",
      author: "James Wilson",
      id: 'global-markets'
    },
    {
      title: "Cryptocurrency Regulation Framework Proposed",
      description: "International financial regulators unveil comprehensive framework for digital asset oversight",
      timestamp: "5 hours ago",
      author: "Lisa Chang",
      id: 'crypto-regulation'
    },
    {
      title: "Electric Vehicle Market Expansion",
      description: "Major automakers announce joint venture for next-generation battery technology",
      timestamp: "6 hours ago",
      author: "David Kumar",
      id: 'ev-market'
    }
  ];

  const scienceNews = [
    {
      title: "Breakthrough in Quantum Computing",
      description: "Scientists achieve quantum supremacy milestone, opening new possibilities in computing",
      category: "Research",
      timestamp: "7 hours ago",
      author: "Prof. Robert Chen",
      id: 'quantum-computing'
    },
    {
      title: "Gene Therapy Success in Cancer Treatment",
      description: "Revolutionary gene-editing technique shows promising results in clinical trials",
      category: "Medicine",
      timestamp: "8 hours ago",
      author: "Dr. Maria Garcia",
      id: 'gene-therapy'
    },
    {
      title: "Ocean Cleanup Technology Breakthrough",
      description: "New AI-powered system successfully removes 99% of ocean plastic waste",
      category: "Environment",
      timestamp: "9 hours ago",
      author: "Dr. Sarah Johnson",
      id: 'ocean-cleanup'
    }
  ];

  const weatherReport = {
    date: new Date().toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' }),
    locations: [
      {
        name: "New York",
        temp: "22°C",
        conditions: "Sunny",
        forecast: "Clear skies with light breeze"
      },
      {
        name: "London",
        temp: "18°C",
        conditions: "Partly Cloudy",
        forecast: "Scattered showers expected"
      },
      {
        name: "Tokyo",
        temp: "25°C",
        conditions: "Humid",
        forecast: "Possible thunderstorms"
      }
    ]
  };

  return (
    <Layout>
      {isLoading ? (
        <Preloader />
      ) : (
        <div className="min-h-screen pt-20 sm:pt-10 bg-white w-full">
          {/* Newspaper Header */}
          <div className="w-full border-b-4 border-black mb-4 sm:mb-8">
            <div className="w-full px-4 sm:px-12">
              <h1 className="text-4xl sm:text-6xl md:text-8xl font-serif text-center font-bold py-4 sm:py-8 italic" 
                  style={{ fontFamily: 'Playfair Display, serif' }}>
                The Global Times
              </h1>
              <div className="text-center font-serif text-sm sm:text-lg mb-4 italic">
                {new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
                <span className="mx-2 sm:mx-4">|</span>
                "Your Window to the World"
                <span className="mx-2 sm:mx-4">|</span>
                Digital Edition
              </div>
            </div>
          </div>

          {/* Hero Section */}
          <section className="w-full px-4 sm:px-12 mb-8 sm:mb-16">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-12">
              {/* Main Story */}
              <div className="md:col-span-8 relative bg-white w-full">
                <div 
                  className="border-t-4 border-l-4 border-r-4 border-black p-4 sm:p-8 cursor-pointer hover:bg-gray-50 transition-colors duration-200"
                  onClick={() => handleArticleClick(mainStory.id)}
                >
                  <div className="aspect-[16/10] relative overflow-hidden mb-4 sm:mb-8 group">
                    <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200 animate-gradient-x"></div>
                    <video
                      className="absolute top-0 left-0 w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 transform hover:scale-105"
                      autoPlay
                      loop
                      muted
                      playsInline
                    >
                      <source src={mainStory.media.url} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                    <div className="absolute inset-0 bg-black/5 group-hover:bg-black/10 transition-colors duration-300"></div>
                    <div className="absolute inset-0 pointer-events-none">
                      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMDAwMDAwIiBzdHJva2Utd2lkdGg9IjAuNSIgb3BhY2l0eT0iMC4xIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-20"></div>
                    </div>
                  </div>
                  <div className="transform -rotate-1">
                    <span className="font-serif text-xs sm:text-sm uppercase tracking-[0.2em] sm:tracking-[0.3em] text-gray-800 border-2 border-black px-2 sm:px-4 py-1">
                      {mainStory.category}
                    </span>
                  </div>
                  <h1 className="text-3xl sm:text-4xl md:text-6xl font-serif font-black text-black mt-4 mb-4 sm:mb-6 leading-tight transform hover:scale-[1.02] transition-transform duration-500"
                      style={{ fontFamily: 'Playfair Display, serif' }}>
                    {mainStory.title}
                  </h1>
                  <p className="text-base sm:text-xl text-gray-900 mb-4 sm:mb-6 font-serif first-letter:text-5xl sm:first-letter:text-7xl first-letter:font-bold first-letter:mr-3 first-letter:float-left first-letter:leading-none">
                    {mainStory.description}
                  </p>
                  <div className="flex items-center text-gray-800 text-xs sm:text-sm font-serif italic">
                    <span>Senior Correspondent</span>
                    <span className="mx-2">|</span>
                    <span>{mainStory.author}</span>
                    <span className="mx-2">|</span>
                    <span>{mainStory.timestamp}</span>
                  </div>
                </div>
              </div>

              {/* Side Stories */}
              <div className="md:col-span-4 space-y-4 sm:space-y-8 mt-4 md:mt-0">
                {sideStories.map((story) => (
                  <div
                    key={story.id}
                    className="bg-white border-4 border-black p-4 sm:p-6 transform hover:-rotate-1 transition-transform duration-300 cursor-pointer hover:bg-gray-50"
                    onClick={() => handleArticleClick(story.id)}
                  >
                    <div className="aspect-[4/3] relative overflow-hidden mb-4 group hover:grayscale-0 grayscale transition-all duration-500">
                      <ImageWithSkeleton
                        src={story.media.url}
                        alt={story.title}
                        aspectRatio="4/3"
                      />
                      <div className="absolute inset-0 bg-black/5 group-hover:bg-black/10 transition-colors duration-300"></div>
                    </div>
                    <span className="font-serif text-xs sm:text-sm uppercase tracking-[0.2em] sm:tracking-[0.3em] text-gray-800 border border-black px-2 sm:px-4 py-1 inline-block transform -rotate-1">
                      {story.category}
                    </span>
                    <h2 className="text-2xl sm:text-3xl font-serif font-bold text-black mt-3 mb-4 sm:mb-6 leading-tight"
                        style={{ fontFamily: 'Playfair Display, serif' }}>
                      {story.title}
                    </h2>
                    <p className="text-gray-800 text-base sm:text-xl mb-4 sm:mb-6 font-serif">
                      {story.description}
                    </p>
                    <div className="flex items-center text-gray-800 text-xs sm:text-sm font-serif italic">
                      <span>By {story.author}</span>
                      <span className="mx-2">|</span>
                      <span>{story.timestamp}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Business News Section */}
            <div className="mt-8 sm:mt-12">
              <h2 className="text-3xl sm:text-4xl font-serif font-bold mb-6 sm:mb-8">Business News</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
                {businessNews.map((news, index) => (
                  <div
                    key={news.id}
                    className="bg-white border-4 border-black p-4 sm:p-6 cursor-pointer hover:bg-gray-50 transition-colors duration-200"
                    onClick={() => handleArticleClick(news.id)}
                  >
                    <div className="aspect-[4/3] relative overflow-hidden mb-4 group hover:grayscale-0 grayscale transition-all duration-500">
                      {index === 0 ? (
                        <ImageWithSkeleton
                          src={globalEconomicSummitImage}
                          alt={news.title}
                          aspectRatio="4/3"
                        />
                      ) : index === 1 ? (
                        <ImageWithSkeleton
                          src={CryptoCurrencyImage}
                          alt={news.title}
                          aspectRatio="4/3"
                        />
                      ) : (
                        <ImageWithSkeleton
                          src={electricVehicleMarketImage}
                          alt={news.title}
                          aspectRatio="4/3"
                        />
                      )}
                      <div className="absolute inset-0 bg-black/5 group-hover:bg-black/10 transition-colors duration-300"></div>
                    </div>
                    <span className="font-serif text-xs sm:text-sm uppercase tracking-[0.2em] sm:tracking-[0.3em] text-gray-800 border border-black px-2 sm:px-4 py-1 inline-block transform -rotate-1">
                      Business
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-serif font-bold text-black mt-3 mb-4 sm:mb-6 leading-tight"
                        style={{ fontFamily: 'Playfair Display, serif' }}>
                      {news.title}
                    </h3>
                    <p className="text-gray-800 text-base sm:text-xl mb-4 sm:mb-6 font-serif">
                      {news.description}
                    </p>
                    {news.score && (
                      <p className="text-green-600 font-bold mb-4">{news.score}</p>
                    )}
                    <div className="flex items-center text-gray-800 text-xs sm:text-sm font-serif italic">
                      <span>By {news.author}</span>
                      <span className="mx-2">|</span>
                      <span>{news.timestamp}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Science News Section */}
            <div className="mt-8 sm:mt-12">
              <h2 className="text-3xl sm:text-4xl font-serif font-bold mb-6 sm:mb-8">Science News</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
                {scienceNews.map((news, index) => (
                  <div
                    key={news.id}
                    className="bg-white border-4 border-black p-4 sm:p-6 cursor-pointer hover:bg-gray-50 transition-colors duration-200"
                    onClick={() => handleArticleClick(news.id)}
                  >
                    <div className="aspect-[4/3] relative overflow-hidden mb-4 group hover:grayscale-0 grayscale transition-all duration-500">
                      {index === 0 ? (
                        <ImageWithSkeleton
                          src={BreaktroughImage}
                          alt={news.title}
                          aspectRatio="4/3"
                        />
                      ) : index === 1 ? (
                        <ImageWithSkeleton
                          src={GeneTherapyImage}
                          alt={news.title}
                          aspectRatio="4/3"
                        />
                      ) : (
                        <ImageWithSkeleton
                          src={OceanCleanupImage}
                          alt={news.title}
                          aspectRatio="4/3"
                        />
                      )}
                      <div className="absolute inset-0 bg-black/5 group-hover:bg-black/10 transition-colors duration-300"></div>
                    </div>
                    <span className="font-serif text-xs sm:text-sm uppercase tracking-[0.2em] sm:tracking-[0.3em] text-gray-800 border border-black px-2 sm:px-4 py-1 inline-block transform -rotate-1">
                      {news.category}
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-serif font-bold text-black mt-3 mb-4 sm:mb-6 leading-tight"
                        style={{ fontFamily: 'Playfair Display, serif' }}>
                      {news.title}
                    </h3>
                    <p className="text-gray-800 text-base sm:text-xl mb-4 sm:mb-6 font-serif">
                      {news.description}
                    </p>
                    <div className="flex items-center text-gray-800 text-xs sm:text-sm font-serif italic">
                      <span>By {news.author}</span>
                      <span className="mx-2">|</span>
                      <span>{news.timestamp}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Weather Report Section */}
            <WeatherWidget />

          </section>
        </div>
      )}
    </Layout>
  );
};

export default Home;