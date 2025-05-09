import React from "react";

const About = () => {
  return (
    <div className="pt-40 pb-16 px-8 max-w-[1920px] mx-auto">
      <h1 className="text-4xl font-serif font-bold text-black italic mb-8">
        About FeedCraft AI
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-2xl font-serif font-bold text-black italic mb-4">
            Our Story
          </h2>
          <p className="text-gray-700 font-serif italic mb-6">
            FeedCraft AI was developed to revolutionize how people consume news
            and information in today's fast-paced digital world. Our platform
            aggregates content from various trusted sources (RSS Feeds),
            organizing it into intuitive categories to help you stay informed
            without information overload.
          </p>
          <p className="text-gray-700 font-serif italic">
            RSS Feeds sources enables FeedCraft AI to receive the most relevant,
            accurate, and timely news across multiple categories including
            Politics, Technology, Sports, Finance, Healthcare, Cryptocurrencies,
            and Stocks. (More Coming Soon!)
          </p>
        </div>
        <div>
          <h2 className="text-2xl font-serif font-bold text-black italic mb-4">
            Our Mission
          </h2>
          <p className="text-gray-700 font-serif italic mb-6">
            At FeedCraft AI, we believe in the power of informed citizens. Our
            mission is to provide a streamlined news experience that cuts
            through the noise, delivering content that matters to you in an
            elegant, user-friendly interface.
          </p>
          <p className="text-gray-700 font-serif italic">
            We leverage artificial intelligence to personalize your news
            experience while maintaining the highest standards of journalistic
            integrity. Our goal is to make content creation lightning fast for
            social media influencers accross various social media platforms.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
