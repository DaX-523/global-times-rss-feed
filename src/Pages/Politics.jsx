import React from 'react';
import Layout from '../components/Layout';
import ImageWithSkeleton from '../components/ImageWithSkeleton';

const Politics = () => {
  const politicalStories = [
    {
      title: "GLOBAL LEADERS CONVENE FOR ANNUAL SUMMIT",
      description: "World leaders gather for the annual global summit, focusing on international cooperation, climate change, and economic stability. Key discussions include trade agreements and diplomatic relations.",
      category: "International Relations",
      timestamp: "5 hours ago",
      author: "James Wilson"
    },
    {
      title: "NEW LEGISLATION PROPOSED FOR DIGITAL PRIVACY",
      description: "Government introduces comprehensive digital privacy legislation aimed at protecting citizens' online data and regulating tech companies' data collection practices.",
      category: "Domestic Policy",
      timestamp: "6 hours ago",
      author: "Maria Garcia"
    },
    {
      title: "ELECTION REFORM BILL PASSES SENATE",
      description: "Historic election reform bill passes Senate with bipartisan support, introducing new measures for voter accessibility and election security.",
      category: "Elections",
      timestamp: "7 hours ago",
      author: "David Kumar"
    }
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-white">
        {/* Newspaper Header */}
        <div className="w-full border-b-4 border-black mb-4 sm:mb-6 md:mb-8">
          <div className="max-w-[1920px] mx-auto px-4 sm:px-6 md:px-8">
            <h1 className="text-4xl sm:text-6xl md:text-8xl font-serif text-center font-bold py-4 sm:py-6 md:py-8 italic" 
                style={{ fontFamily: 'Playfair Display, serif' }}>
              Politics
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

        {/* Politics Content */}
        <section className="max-w-[1920px] mx-auto px-4 sm:px-6 md:px-8 mb-8 sm:mb-12 md:mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-12">
            {politicalStories.map((story, index) => (
              <div key={index} className="bg-white border-2 sm:border-4 border-black p-4 sm:p-6 md:p-8 transform hover:-rotate-1 transition-transform duration-300">
                <div className="aspect-[16/9] relative overflow-hidden mb-4 sm:mb-6 md:mb-8 group hover:grayscale-0 grayscale transition-all duration-1000">
                  <ImageWithSkeleton
                    src={`/politics-${index + 1}.jpg`}
                    alt={story.title}
                    aspectRatio="16/9"
                    className="transition-transform duration-1000 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors duration-500"></div>
                </div>
                <div className="transform -rotate-1">
                  <span className="font-serif text-xs sm:text-sm uppercase tracking-[0.2em] sm:tracking-[0.3em] text-gray-800 border border-black sm:border-2 px-2 sm:px-4 py-1 inline-block">
                    {story.category}
                  </span>
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-serif font-black text-black mt-3 sm:mt-4 mb-3 sm:mb-4 md:mb-6 leading-tight transform hover:scale-[1.02] transition-transform duration-500"
                    style={{ fontFamily: 'Playfair Display, serif' }}>
                  {story.title}
                </h2>
                <p className="text-sm sm:text-base md:text-lg text-gray-900 mb-4 sm:mb-6 font-serif first-letter:text-3xl sm:first-letter:text-4xl md:first-letter:text-6xl first-letter:font-bold first-letter:mr-3 first-letter:float-left first-letter:leading-none">
                  {story.description}
                </p>
                <div className="flex items-center text-gray-800 text-xs sm:text-sm font-serif italic">
                  <span>Political Correspondent</span>
                  <span className="mx-2">|</span>
                  <span>{story.author}</span>
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

export default Politics; 