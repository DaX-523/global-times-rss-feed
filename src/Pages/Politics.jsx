import React from "react";
import Layout from "../components/Layout";
import ImageWithSkeleton from "../components/ImageWithSkeleton";
import politicsImage from "../assets/politics.jpg";
import politicsImage1 from "../assets/politics1.jpg";
import politicsImage2 from "../assets/politics2.jpg";
import formatRelativeDate from "../utils/formatRelativeDate";
import { baseUrl, politics } from "../lib/constants";
import parseContent from "../lib/parseContent";
import useFeedData from "../hooks/useFeedData";

// Function to get a random politics image
const getRandomImage = () => {
  const images = [politicsImage, politicsImage1, politicsImage2];
  const randomIndex = Math.floor(Math.random() * images.length);
  return images[randomIndex];
};

const Politics = () => {
  const { data, loading, error } = useFeedData(politics);
  const politicalStories = [
    {
      title: "GLOBAL LEADERS CONVENE FOR ANNUAL SUMMIT",
      description:
        "World leaders gather for the annual global summit, focusing on international cooperation, climate change, and economic stability. Key discussions include trade agreements and diplomatic relations.",
      category: "International Relations",
      timestamp: "5 hours ago",
      author: "James Wilson",
    },
    {
      title: "NEW LEGISLATION PROPOSED FOR DIGITAL PRIVACY",
      description:
        "Government introduces comprehensive digital privacy legislation aimed at protecting citizens' online data and regulating tech companies' data collection practices.",
      category: "Domestic Policy",
      timestamp: "6 hours ago",
      author: "Maria Garcia",
    },
    {
      title: "ELECTION REFORM BILL PASSES SENATE",
      description:
        "Historic election reform bill passes Senate with bipartisan support, introducing new measures for voter accessibility and election security.",
      category: "Elections",
      timestamp: "7 hours ago",
      author: "David Kumar",
    },
  ];

  return (
    <Layout>
      <div className="min-h-screen pt-2 sm:pt-4 md:pt-6 bg-white">
        {/* Newspaper Header */}
        {/* Newspaper Header Start */}
        {data?.feed?.image && (
          <img
            src={data.feed.image}
            alt={data.feed.title || "Feed Logo"}
            className="w-12 h-12 sm:w-20 sm:h-20 object-contain border border-black rounded-full bg-white shadow-md mx-auto"
          />
        )}
        <div className="w-full border-b-4 border-black mb-4 sm:mb-6 md:mb-8">
          <div className="max-w-[1920px] mx-auto px-4 sm:px-6 md:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-8">
            {/* Logo/Image */}

            <div className="flex-1 text-center flex flex-col items-center">
              {/* Title/Description/Meta */}
              <h1
                className="text-4xl sm:text-6xl md:text-8xl font-serif font-bold py-4 sm:py-6 md:py-8 italic"
                style={{ fontFamily: "Playfair Display, serif" }}
              >
                {data?.feed?.title || "Politics News"}
              </h1>
              {data?.feed?.description && (
                <div className="font-serif text-base sm:text-lg md:text-xl text-gray-700 mb-2 italic">
                  {data.feed.description}
                </div>
              )}
              <div className="text-center font-serif text-sm sm:text-base md:text-lg mb-4 italic flex flex-wrap items-center justify-center gap-x-2">
                <span>
                  {new Date().toLocaleDateString("en-US", {
                    weekday: "long",
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </span>
                <span className="mx-2 sm:mx-4">|</span>
                <span>"Your Window to the World"</span>
                <span className="mx-2 sm:mx-4">|</span>
                <span>Digital Edition</span>
              </div>
              {data?.feed?.link && (
                <a
                  href={data.feed.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs sm:text-sm text-gray-500 underline hover:text-blue-900 font-serif"
                >
                  Source:{" "}
                  {data.feed.link
                    .replace(/^https?:\/\//, "")
                    .replace(/\/$/, "")}
                </a>
              )}
            </div>
          </div>
        </div>
        {/* Newspaper Header End */}

        {/* Error State */}
        {error && (
          <div className="max-w-[1920px] mx-auto px-4 py-12 text-center">
            <h2 className="text-2xl font-serif font-bold text-red-600 mb-4">
              Unable to load politics news
            </h2>
            <p className="text-gray-700">
              Please try again later or check your internet connection.
            </p>
          </div>
        )}

        {/* Politics Stories */}
        {!loading && !error && data?.items && (
          <section className="max-w-[1920px] mx-auto px-4 sm:px-6 md:px-8 mb-8 sm:mb-12 md:mb-16">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {data.items.map((story, index) => (
                <div
                  key={index}
                  className="bg-white min-w-[250px] border-2 sm:border-4 border-black p-4 sm:p-6 md:p-8 transform hover:-rotate-1 transition-transform duration-300"
                >
                  <div className="aspect-[16/9] relative overflow-hidden mb-4 sm:mb-6 md:mb-8 group hover:grayscale-0 grayscale transition-all duration-1000">
                    <ImageWithSkeleton
                      src={story.thumbnail || getRandomImage()}
                      alt={story.title}
                      aspectRatio="16/9"
                      className="transition-transform duration-1000 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors duration-500"></div>
                  </div>
                  {story.categories.map((category, index) => (
                    <span
                      key={index}
                      className="m-1 p-1 font-serif text-xs sm:text-sm uppercase tracking-[0.2em] sm:tracking-[0.3em] text-gray-800 border border-black sm:border-2 px-2 sm:px-4 py-1 inline-block transform -rotate-1"
                    >
                      {category}
                    </span>
                  ))}
                  <h2
                    className="text-xl sm:text-2xl md:text-3xl font-serif font-bold text-black mt-3 sm:mt-4 mb-3 sm:mb-4 md:mb-6 leading-tight"
                    style={{ fontFamily: "Playfair Display, serif" }}
                  >
                    {story.title}
                  </h2>
                  <p className="text-sm sm:text-base md:text-lg text-gray-800 mb-4 sm:mb-6 font-serif">
                    {story.description}
                  </p>
                  <div className="flex items-center text-gray-800 text-xs sm:text-sm font-serif italic">
                    <span>By {story.author || "Editorial Team"}</span>
                    <span className="mx-2">|</span>
                    <span>{formatRelativeDate(story.pubDate)}</span>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Fallback if no items */}
        {!loading &&
          !error &&
          (!data || !data.items || data.items.length === 0) && (
            <section className="max-w-[1920px] mx-auto px-4 sm:px-6 md:px-8 mb-8 sm:mb-12 md:mb-16">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                {politicalStories.map((story, index) => (
                  <div
                    key={index}
                    className="bg-white min-w-[250px] border-2 sm:border-4 border-black p-4 sm:p-6 md:p-8 transform hover:-rotate-1 transition-transform duration-300"
                  >
                    <div className="aspect-[16/9] relative overflow-hidden mb-4 sm:mb-6 md:mb-8 group hover:grayscale-0 grayscale transition-all duration-1000">
                      <ImageWithSkeleton
                        src={getRandomImage()}
                        alt={story.title}
                        aspectRatio="16/9"
                        className="transition-transform duration-1000 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors duration-500"></div>
                    </div>
                    <span className="m-1 p-1 font-serif text-xs sm:text-sm uppercase tracking-[0.2em] sm:tracking-[0.3em] text-gray-800 border border-black sm:border-2 px-2 sm:px-4 py-1 inline-block transform -rotate-1">
                      {story.category}
                    </span>
                    <h2
                      className="text-xl sm:text-2xl md:text-3xl font-serif font-bold text-black mt-3 sm:mt-4 mb-3 sm:mb-4 md:mb-6 leading-tight"
                      style={{ fontFamily: "Playfair Display, serif" }}
                    >
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
          )}
      </div>
    </Layout>
  );
};

export default Politics;
