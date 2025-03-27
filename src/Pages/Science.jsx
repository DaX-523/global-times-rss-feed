import React from 'react';
import Layout from '../components/Layout';
import ImageWithSkeleton from '../components/ImageWithSkeleton';
import BreaktroughImage from '../assets/breakthrough-in-quantum-computing.jpg';
import GeneTherapyImage from '../assets/gene-therapy-success-in-cancer-treatment.jpg';
import OceanCleanupImage from '../assets/ocean-cleanup-technology-breakthrough (1).jpg';

const Science = () => {
  const scienceStories = [
    {
      title: "QUANTUM COMPUTING BREAKTHROUGH ACHIEVED",
      description: "Scientists have achieved a major milestone in quantum computing, successfully maintaining quantum coherence for an unprecedented duration. This breakthrough brings us closer to practical quantum computing applications.",
      category: "Physics",
      timestamp: "4 hours ago",
      author: "Dr. Emily Thompson",
      image: BreaktroughImage
    },
    {
      title: "GENE THERAPY CURES RARE GENETIC DISORDER",
      description: "A groundbreaking gene therapy treatment has successfully cured a rare genetic disorder in clinical trials. The innovative approach could pave the way for treating similar conditions worldwide.",
      category: "Medicine",
      timestamp: "5 hours ago",
      author: "Dr. Maria Garcia",
      image: GeneTherapyImage
    },
    {
      title: "OCEAN CLEANUP TECHNOLOGY REMOVES 100,000 TONS OF PLASTIC",
      description: "Revolutionary ocean cleanup technology has successfully removed over 100,000 tons of plastic waste from the Pacific Ocean. The achievement marks a significant step forward in combating marine pollution.",
      category: "Environment",
      timestamp: "6 hours ago",
      author: "Dr. Sarah Johnson",
      image: OceanCleanupImage
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
              Science
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

        {/* Science Stories */}
        <section className="max-w-[1920px] mx-auto px-4 sm:px-6 md:px-8 mb-8 sm:mb-12 md:mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {scienceStories.map((story, index) => (
              <div key={index} className="bg-white border-2 sm:border-4 border-black p-4 sm:p-6 md:p-8 transform hover:-rotate-1 transition-transform duration-300">
                <div className="aspect-[16/9] relative overflow-hidden mb-4 sm:mb-6 md:mb-8 group hover:grayscale-0 grayscale transition-all duration-1000">
                  <ImageWithSkeleton
                    src={story.image}
                    alt={story.title}
                    aspectRatio="16/9"
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

export default Science; 