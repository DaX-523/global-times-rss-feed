import React from 'react';
import Layout from '../components/Layout';
import ImageWithSkeleton from '../components/ImageWithSkeleton';
import globalEconomicSummitImage from '../assets/global-markets-rally-on-economic-data-stock-market.jpg';
import CryptoCurrencyImage from '../assets/cryptocurrency-regulation-framework-proposed.jpg';
import electricVehicleMarketImage from '../assets/electric-vehicle-market-expansion-major-automakers.jpg';

const Business = () => {
  const businessStories = [
    {
      title: "GLOBAL MARKETS RALLY ON ECONOMIC DATA",
      description: "Stock markets worldwide surge as latest economic indicators show stronger-than-expected growth. The S&P 500, NASDAQ, and FTSE all post significant gains as investor confidence strengthens.",
      category: "Markets",
      timestamp: "4 hours ago",
      author: "James Wilson",
      image: globalEconomicSummitImage,
      score: "S&P 500 +2.3% | NASDAQ +3.1% | FTSE +1.8%"
    },
    {
      title: "CRYPTOCURRENCY REGULATION FRAMEWORK PROPOSED",
      description: "International financial regulators unveil comprehensive framework for digital asset oversight. The new regulations aim to protect investors while fostering innovation in the crypto space.",
      category: "Finance",
      timestamp: "5 hours ago",
      author: "Lisa Chang",
      image: CryptoCurrencyImage
    },
    {
      title: "ELECTRIC VEHICLE MARKET EXPANSION",
      description: "Major automakers announce joint venture for next-generation battery technology. The partnership aims to accelerate the development of more efficient and affordable electric vehicles.",
      category: "Automotive",
      timestamp: "6 hours ago",
      author: "David Kumar",
      image: electricVehicleMarketImage
    }
  ];

  return (
    <Layout>
      <div className="min-h-screen pt-4 sm:pt-6 md:pt-10 bg-white">
        {/* Newspaper Header */}
        <div className="w-full border-b-4 border-black mb-4 sm:mb-6 md:mb-8">
          <div className="max-w-[1920px] mx-auto px-4 sm:px-6 md:px-8">
            <h1 className="text-4xl sm:text-6xl md:text-8xl font-serif text-center font-bold py-4 sm:py-6 md:py-8 italic" 
                style={{ fontFamily: 'Playfair Display, serif' }}>
              Business & Markets
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

        {/* Business Stories */}
        <section className="max-w-[1920px] mx-auto px-4 sm:px-6 md:px-8 mb-8 sm:mb-12 md:mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {businessStories.map((story, index) => (
              <div key={index} className="bg-white border-2 sm:border-4 border-black p-4 sm:p-6 md:p-8 transform hover:-rotate-1 transition-transform duration-300">
                <div className="aspect-[4/3] relative overflow-hidden mb-4 sm:mb-6 md:mb-8 group hover:grayscale-0 grayscale transition-all duration-1000">
                  <ImageWithSkeleton
                    src={story.image}
                    alt={story.title}
                    aspectRatio="4/3"
                    className="transition-transform duration-1000 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors duration-500"></div>
                </div>
                <span className="font-serif text-xs sm:text-sm uppercase tracking-[0.2em] sm:tracking-[0.3em] text-gray-800 border border-black sm:border-2 px-2 sm:px-4 py-1 inline-block transform -rotate-1">
                  {story.category}
                </span>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-serif font-bold text-black mt-3 sm:mt-4 mb-3 sm:mb-4 md:mb-6 leading-tight"
                    style={{ fontFamily: 'Playfair Display, serif' }}>
                  {story.title}
                </h2>
                <p className="text-sm sm:text-base md:text-lg text-gray-800 mb-4 sm:mb-6 font-serif">
                  {story.description}
                </p>
                {story.score && (
                  <div className="text-base sm:text-lg md:text-2xl font-serif font-bold text-red-900 mb-4">
                    {story.score}
                  </div>
                )}
                <div className="flex items-center text-gray-800 text-xs sm:text-sm font-serif italic">
                  <span>By {story.author}</span>
                  <span className="mx-2">|</span>
                  <span>{story.timestamp}</span>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Business; 