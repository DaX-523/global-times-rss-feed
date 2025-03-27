import React from 'react';
import Layout from '../components/Layout';
import ImageWithSkeleton from '../components/ImageWithSkeleton';
import globalEconomicSummitImage from '../assets/global-markets-rally-on-economic-data-stock-market.jpg';
import techGiantsImage from '../assets/tech-giants-unveil-ai-safety-framework-major-techn.jpg';
import BreaktroughImage from '../assets/breakthrough-in-quantum-computing.jpg';

const BreakingNews = () => {
  const breakingStories = [
    {
      title: "GLOBAL CLIMATE SUMMIT ANNOUNCES HISTORIC AGREEMENT",
      description: "In a groundbreaking development that has captured the world's attention, world leaders have reached a historic agreement on climate action, setting ambitious targets for carbon reduction and establishing a $100 billion climate fund for developing nations.",
      category: "Global Affairs",
      timestamp: "2 hours ago",
      author: "Sarah Chen",
      image: globalEconomicSummitImage
    },
    {
      title: "MAJOR TECH MERGER ANNOUNCED",
      description: "Two of the world's largest technology companies have announced a historic merger, creating a new industry giant with a combined market value of over $500 billion.",
      category: "Technology",
      timestamp: "3 hours ago",
      author: "Michael Rodriguez",
      image: techGiantsImage
    },
    {
      title: "BREAKTHROUGH IN MEDICAL RESEARCH",
      description: "Scientists have announced a major breakthrough in cancer treatment, with a new therapy showing unprecedented success rates in clinical trials.",
      category: "Science",
      timestamp: "4 hours ago",
      author: "Dr. Emily Thompson",
      image: BreaktroughImage
    }
  ];

  return (
    <Layout>
      <div className="min-h-screen pt-4 sm:pt-6 md:pt-10 bg-white">
        {/* Header Section */}
        <div className="w-full border-b-4 border-black mb-4 sm:mb-6 md:mb-8">
          <div className="max-w-[1920px] mx-auto px-4 sm:px-6 md:px-8">
            <h1 className="text-4xl sm:text-6xl md:text-8xl font-serif text-center font-bold py-4 sm:py-6 md:py-8 italic" 
                style={{ fontFamily: 'Playfair Display, serif' }}>
              Breaking News
            </h1>
            <div className="text-center font-serif text-sm sm:text-base md:text-lg mb-4 italic">
              {new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
              <span className="mx-2 sm:mx-4">|</span>
              "Your Window to the World"
              <span className="mx-2 sm:mx-4">|</span>
              Digital Edition
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-[1920px] mx-auto px-4 sm:px-6 md:px-8">
          {/* Featured Story */}
          <div className="mb-8 sm:mb-12 md:mb-16">
            <div className="bg-white border-2 sm:border-4 border-black p-4 sm:p-6 md:p-8 transform hover:-rotate-1 transition-transform duration-300">
              <div className="aspect-[16/9] relative overflow-hidden mb-4 sm:mb-6 md:mb-8 group hover:grayscale-0 grayscale transition-all duration-1000 transform hover:scale-[1.02]">
                <ImageWithSkeleton
                  src={breakingStories[0].image}
                  alt={breakingStories[0].title}
                  aspectRatio="16/9"
                  className="transition-transform duration-1000 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors duration-500"></div>
                <div className="absolute inset-0 pointer-events-none">
                  <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMDAwMDAwIiBzdHJva2Utd2lkdGg9IjAuNSIgb3BhY2l0eT0iMC4xIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-20"></div>
                </div>
              </div>
              <span className="font-serif text-xs sm:text-sm uppercase tracking-[0.2em] sm:tracking-[0.3em] text-gray-800 border border-black sm:border-2 px-2 sm:px-4 py-1 inline-block transform -rotate-1">
                {breakingStories[0].category}
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-black mt-3 sm:mt-4 mb-3 sm:mb-4 md:mb-6 leading-tight"
                  style={{ fontFamily: 'Playfair Display, serif' }}>
                {breakingStories[0].title}
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-gray-800 mb-4 sm:mb-6 font-serif first-letter:text-4xl sm:first-letter:text-5xl md:first-letter:text-7xl first-letter:font-bold first-letter:mr-3 first-letter:float-left first-letter:leading-none">
                {breakingStories[0].description}
              </p>
              <div className="flex items-center text-gray-800 text-xs sm:text-sm font-serif italic">
                <span>By {breakingStories[0].author}</span>
                <span className="mx-2">|</span>
                <span>{breakingStories[0].timestamp}</span>
              </div>
            </div>
          </div>

          {/* Other Stories Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {breakingStories.slice(1).map((story, index) => (
              <div key={index} className="bg-white border-2 sm:border-4 border-black p-4 sm:p-6 md:p-8 transform hover:-rotate-1 transition-transform duration-300">
                <div className="aspect-[16/9] relative overflow-hidden mb-4 sm:mb-6 md:mb-8 group hover:grayscale-0 grayscale transition-all duration-1000 transform hover:scale-[1.02]">
                  <ImageWithSkeleton
                    src={story.image}
                    alt={story.title}
                    aspectRatio="16/9"
                    className="transition-transform duration-1000 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors duration-500"></div>
                  <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMDAwMDAwIiBzdHJva2Utd2lkdGg9IjAuNSIgb3BhY2l0eT0iMC4xIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-20"></div>
                  </div>
                </div>
                <span className="font-serif text-xs sm:text-sm uppercase tracking-[0.2em] sm:tracking-[0.3em] text-gray-800 border border-black sm:border-2 px-2 sm:px-4 py-1 inline-block transform -rotate-1">
                  {story.category}
                </span>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-black mt-3 sm:mt-4 mb-3 sm:mb-4 md:mb-6 leading-tight"
                    style={{ fontFamily: 'Playfair Display, serif' }}>
                  {story.title}
                </h2>
                <p className="text-base sm:text-lg md:text-xl text-gray-800 mb-4 sm:mb-6 font-serif first-letter:text-4xl sm:first-letter:text-5xl md:first-letter:text-7xl first-letter:font-bold first-letter:mr-3 first-letter:float-left first-letter:leading-none">
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
      </div>
    </Layout>
  );
};

export default BreakingNews; 