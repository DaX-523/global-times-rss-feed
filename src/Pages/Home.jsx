import React, { useState, useEffect } from 'react';
import Layout from '../components/Layout';
import Preloader from '../components/Preloader';
import ImageWithSkeleton from '../components/ImageWithSkeleton';
import climateVideo from '../assets/video/climate video.mp4';
import techGiantsImage from '../assets/tech-giants-unveil-ai-safety-framework-major-techn.jpg';
import spaceTourismImage from '../assets/space-tourism-milestone-achieved-first-civilian-sp.jpg';
import globalEconomicSummitImage from '../assets/global-markets-rally-on-economic-data-stock-market.jpg';
import CryptoCurrencyImage from '../assets/cryptocurrency-regulation-framework-proposed.jpg';
import electricVehicleMarketImage from '../assets/electric-vehicle-market-expansion-major-automakers.jpg';
import BreaktroughImage from '../assets/breakthrough-in-quantum-computing.jpg';
import GeneTherapyImage from '../assets/gene-therapy-success-in-cancer-treatment.jpg';
import OceanCleanupImage from '../assets/ocean-cleanup-technology-breakthrough (1).jpg';
import newyorkweather from '../assets/new-york.jpg';
import londonweather from '../assets/london-18-c-partly-cloudy-scattered-showers-expect.jpg';
import tokweather from '../assets/tokyo-25-c-humid-possible-thunderstorms.jpg';

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // Show preloader for 2 seconds

    return () => clearTimeout(timer);
  }, []);

  const mainStory = {
    title: "GLOBAL CLIMATE SUMMIT ANNOUNCES HISTORIC AGREEMENT",
    description: "In a groundbreaking development that has captured the world's attention, world leaders have reached a historic agreement on climate action, setting ambitious targets for carbon reduction and establishing a $100 billion climate fund for developing nations.",
    category: "Global Affairs",
    timestamp: "2 hours ago",
    author: "Sarah Chen"
  };

  const sideStories = [
    {
      title: "Tech Giants Unveil AI Safety Framework",
      description: "Major technology companies announce collaborative initiative to establish ethical guidelines for artificial intelligence development",
      category: "Technology",
      timestamp: "1 hour ago",
      author: "Michael Rodriguez"
    },
    {
      title: "Space Tourism Milestone Achieved",
      description: "First civilian space hotel announces successful test launch, marking new era in commercial space travel",
      category: "Science",
      timestamp: "3 hours ago",
      author: "Dr. Emily Thompson"
    }
  ];

  const businessNews = [
    {
      title: "Global Markets Rally on Economic Data",
      description: "Stock markets worldwide surge as latest economic indicators show stronger-than-expected growth",
      score: "S&P 500 +2.3% | NASDAQ +3.1% | FTSE +1.8%",
      timestamp: "4 hours ago",
      author: "James Wilson"
    },
    {
      title: "Cryptocurrency Regulation Framework Proposed",
      description: "International financial regulators unveil comprehensive framework for digital asset oversight",
      timestamp: "5 hours ago",
      author: "Lisa Chang"
    },
    {
      title: "Electric Vehicle Market Expansion",
      description: "Major automakers announce joint venture for next-generation battery technology",
      timestamp: "6 hours ago",
      author: "David Kumar"
    }
  ];

  const scienceNews = [
    {
      title: "Breakthrough in Quantum Computing",
      description: "Scientists achieve quantum supremacy milestone, opening new possibilities in computing",
      category: "Research",
      timestamp: "7 hours ago",
      author: "Prof. Robert Chen"
    },
    {
      title: "Gene Therapy Success in Cancer Treatment",
      description: "Revolutionary gene-editing technique shows promising results in clinical trials",
      category: "Medicine",
      timestamp: "8 hours ago",
      author: "Dr. Maria Garcia"
    },
    {
      title: "Ocean Cleanup Technology Breakthrough",
      description: "New AI-powered system successfully removes 99% of ocean plastic waste",
      category: "Environment",
      timestamp: "9 hours ago",
      author: "Dr. Sarah Johnson"
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
        <div className="min-h-screen pt-20 sm:pt-10 bg-white">
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
              <div className="md:col-span-8 relative bg-white">
                <div className="border-t-4 border-l-4 border-r-4 border-black p-4 sm:p-8">
                  <div className="aspect-[16/10] relative overflow-hidden mb-4 sm:mb-8 group">
                    <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200 animate-gradient-x"></div>
                    <video
                      className="absolute top-0 left-0 w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 transform hover:scale-105"
                      autoPlay
                      loop
                      muted
                      playsInline
                    >
                      <source src={climateVideo} type="video/mp4" />
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
                {sideStories.map((story, index) => (
                  <div
                    key={index}
                    className="bg-white border-4 border-black p-4 sm:p-6 transform hover:-rotate-1 transition-transform duration-300"
                  >
                    <div className="aspect-[4/3] relative overflow-hidden mb-4 group hover:grayscale-0 grayscale transition-all duration-500">
                      {index === 0 ? (
                        <ImageWithSkeleton
                          src={techGiantsImage}
                          alt={story.title}
                          aspectRatio="4/3"
                        />
                      ) : index === 1 ? (
                        <ImageWithSkeleton
                          src={spaceTourismImage}
                          alt={story.title}
                          aspectRatio="4/3"
                        />
                      ) : (
                        <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200 animate-gradient-x"></div>
                      )}
                      <div className="absolute inset-0 bg-black/5 group-hover:bg-black/10 transition-colors duration-300"></div>
                      {index !== 0 && index !== 1 && (
                        <div className="relative z-10 text-gray-400 font-serif italic group-hover:scale-110 transition-transform duration-500">
                          Side Story Video {index + 1}
                        </div>
                      )}
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

            {/* Breaking News Banner */}
            <div className="mt-8 sm:mt-12 border-y-4 border-black transform -rotate-1 bg-white">
              <div className="py-3 sm:py-4 px-4 sm:px-12">
                <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-6">
                  <span className="font-serif font-bold text-red-900 whitespace-nowrap uppercase tracking-[0.2em] sm:tracking-[0.3em] transform rotate-1 text-sm sm:text-base">
                    BREAKING NEWS
                  </span>
                  <div className="text-gray-900 font-serif italic transform rotate-1 text-sm sm:text-base text-center sm:text-left">
                    Global Economic Summit Concludes • Major Tech Merger Announced • Space Tourism Milestone Achieved
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Business Section */}
          <section className="w-full px-4 sm:px-12 mb-8 sm:mb-16">
            <div className="border-t-4 border-black pt-6 sm:pt-8">
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-black mb-6 sm:mb-8 text-center"
                  style={{ fontFamily: 'Playfair Display, serif' }}>
                Business & Markets
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-8">
                {businessNews.map((news, index) => (
                  <div key={index} className="bg-white border-4 border-black p-6 transform hover:-rotate-1 transition-transform duration-300">
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
                      ) : index === 2 ? (
                        <ImageWithSkeleton
                          src={electricVehicleMarketImage}
                          alt={news.title}
                          aspectRatio="4/3"
                        />
                      ) : (
                        <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200 animate-gradient-x"></div>
                      )}
                      <div className="absolute inset-0 bg-black/5 group-hover:bg-black/10 transition-colors duration-300"></div>
                      {index !== 0 && index !== 1 && index !== 2 && (
                        <div className="relative z-10 text-gray-400 font-serif italic group-hover:scale-110 transition-transform duration-500">
                          Business Video {index + 1}
                        </div>
                      )}
                    </div>
                    <span className="font-serif text-xs uppercase tracking-[0.2em] text-gray-800 border border-black px-2 py-1 inline-block transform -rotate-1">
                      Business
                    </span>
                    <h3 className="text-2xl font-serif font-bold text-black mt-3 mb-4 leading-tight"
                        style={{ fontFamily: 'Playfair Display, serif' }}>
                      {news.title}
                    </h3>
                    <p className="text-gray-800 text-base mb-4 font-serif">
                      {news.description}
                    </p>
                    {news.score && (
                      <div className="text-xl font-serif font-bold text-red-900 mb-4">
                        {news.score}
                      </div>
                    )}
                    <div className="flex items-center text-gray-800 text-xs font-serif italic">
                      <span>By {news.author}</span>
                      <span className="mx-2">|</span>
                      <span>{news.timestamp}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Science Section */}
          <section className="w-full px-4 sm:px-12 mb-8 sm:mb-16">
            <div className="border-t-4 border-black pt-6 sm:pt-8">
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-black mb-6 sm:mb-8 text-center"
                  style={{ fontFamily: 'Playfair Display, serif' }}>
                Science & Technology
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-12">
                {scienceNews.map((news, index) => (
                  <div key={index} className="bg-white border-4 border-black p-8 transform hover:-rotate-1 transition-transform duration-300">
                    <div className="aspect-[16/12] relative overflow-hidden mb-8 group hover:grayscale-0 grayscale transition-all duration-1000 transform hover:scale-[1.02]">
                      {index === 0 ? (
                        <ImageWithSkeleton
                          src={BreaktroughImage}
                          alt={news.title}
                          aspectRatio="16/12"
                          className="transition-transform duration-1000 group-hover:scale-105"
                        />
                      ) : index === 1 ? (
                        <ImageWithSkeleton
                          src={GeneTherapyImage}
                          alt={news.title}
                          aspectRatio="16/12"
                          className="transition-transform duration-1000 group-hover:scale-105"
                        />
                      ) : index === 2 ? (
                        <ImageWithSkeleton
                          src={OceanCleanupImage}
                          alt={news.title}
                          aspectRatio="16/12"
                          className="transition-transform duration-1000 group-hover:scale-105"
                        />
                      ) : (
                        <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200 animate-gradient-x"></div>
                      )}
                      <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors duration-500"></div>
                      <div className="absolute inset-0 pointer-events-none">
                        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMDAwMDAwIiBzdHJva2Utd2lkdGg9IjAuNSIgb3BhY2l0eT0iMC4xIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-20"></div>
                      </div>
                      {index !== 0 && index !== 1 && index !== 2 && (
                        <div className="relative z-10 text-gray-400 font-serif italic group-hover:scale-110 transition-transform duration-500">
                          Science Video {index + 1}
                        </div>
                      )}
                    </div>
                    <span className="font-serif text-sm uppercase tracking-[0.3em] text-gray-800 border-2 border-black px-4 py-1 inline-block transform -rotate-1">
                      {news.category}
                    </span>
                    <h3 className="text-3xl font-serif font-bold text-black mt-4 mb-6 leading-tight"
                        style={{ fontFamily: 'Playfair Display, serif' }}>
                      {news.title}
                    </h3>
                    <p className="text-lg text-gray-800 mb-6 font-serif">
                      {news.description}
                    </p>
                    <div className="flex items-center text-gray-800 text-sm font-serif italic">
                      <span>By {news.author}</span>
                      <span className="mx-2">|</span>
                      <span>{news.timestamp}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Weather Report Section */}
          <section className="w-full px-4 sm:px-12 mb-8 sm:mb-16">
            <div className="border-t-4 border-black pt-6 sm:pt-8">
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-black mb-6 sm:mb-8 text-center"
                  style={{ fontFamily: 'Playfair Display, serif' }}>
                Global Weather Report
              </h2>
              <div className="bg-white border-4 border-black p-4 sm:p-8">
                <div className="text-center font-serif text-base sm:text-lg mb-6 sm:mb-8 italic">
                  {weatherReport.date}
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
                  {weatherReport.locations.map((location, index) => (
                    <div key={index} className="text-center transform hover:-rotate-1 transition-transform duration-300">
                      <div className="aspect-square relative overflow-hidden mb-4 bg-gray-100 flex items-center justify-center group hover:grayscale-0 grayscale transition-all duration-500">
                        {index === 0 ? (
                          <ImageWithSkeleton
                            src={newyorkweather}
                            alt={`${location.name} weather`}
                            aspectRatio="1/1"
                          />
                        ) : index === 1 ? (
                          <ImageWithSkeleton
                            src={londonweather}
                            alt={`${location.name} weather`}
                            aspectRatio="1/1"
                          />
                        ) : index === 2 ? (
                          <ImageWithSkeleton
                            src={tokweather}
                            alt={`${location.name} weather`}
                            aspectRatio="1/1"
                          />
                        ) : (
                          <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200 animate-gradient-x"></div>
                        )}
                        <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors duration-500"></div>
                      </div>
                      <h3 className="text-2xl font-serif font-bold text-black mb-4"
                          style={{ fontFamily: 'Playfair Display, serif' }}>
                        {location.name}
                      </h3>
                      <div className="text-4xl font-serif font-bold text-gray-900 mb-2">
                        {location.temp}
                      </div>
                      <div className="text-lg font-serif text-gray-800 mb-4">
                        {location.conditions}
                      </div>
                      <div className="text-sm font-serif text-gray-600">
                        {location.forecast}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Newsletter Section */}
         
        </div>
      )}
    </Layout>
  );
};

export default Home;