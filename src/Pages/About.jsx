import React from 'react';

const About = () => {
  return (
    <div className="pt-32 pb-16 px-8 max-w-[1920px] mx-auto">
      <h1 className="text-4xl font-serif font-bold text-black italic mb-8">About Evening Edition</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-2xl font-serif font-bold text-black italic mb-4">Our Story</h2>
          <p className="text-gray-700 font-serif italic mb-6">
            Founded in 1991, Evening Edition has been at the forefront of magical journalism, bringing you the most accurate and timely news from the wizarding world. Our commitment to journalistic integrity and magical accuracy has made us the most trusted source of magical news.
          </p>
          <p className="text-gray-700 font-serif italic">
            Our team of experienced magical journalists and correspondents work tirelessly to bring you the latest developments in the wizarding community, from Ministry affairs to Quidditch matches, and everything in between.
          </p>
        </div>
        <div>
          <h2 className="text-2xl font-serif font-bold text-black italic mb-4">Our Mission</h2>
          <p className="text-gray-700 font-serif italic mb-6">
            At Evening Edition, we believe in the power of informed magical citizens. Our mission is to provide accurate, unbiased reporting that keeps the wizarding community well-informed about the events that shape our world.
          </p>
          <p className="text-gray-700 font-serif italic">
            We strive to maintain the highest standards of magical journalism while ensuring that our content is accessible to both young and experienced witches and wizards.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About; 