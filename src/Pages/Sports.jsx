import React from "react";
import Layout from "../components/Layout";
import ImageWithSkeleton from "../components/ImageWithSkeleton";
import { baseUrl, sports } from "../lib/constants";
import parseContent from "../lib/parseContent";
import formatRelativeDate from "../utils/formatRelativeDate";

const Sports = () => {
  const [data, setData] = React.useState(null);
  const fetchData = async () => {
    const maal = await fetch(`${baseUrl}${sports}`);
    const feed = await maal.json();
    if (feed?.status !== "ok") {
      console.error("Failed to fetch feed", feed);
      return;
    }

    feed.items = feed?.items?.map((item) => {
      return {
        ...item,
        description: parseContent(item.description),
      };
    });
    setData(feed);
  };

  React.useEffect(() => {
    fetchData();
  }, []);
  // const sportsStories = [
  //   {
  //     title: "WORLD CUP FINAL SET FOR HISTORIC MATCHUP",
  //     description: "An unprecedented final match is set to take place in the World Cup, featuring two teams that have never before reached this stage. The historic matchup promises to be a thrilling encounter for football fans worldwide.",
  //     category: "Football",
  //     timestamp: "2 hours ago",
  //     author: "John Smith",
  //     image: "https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExdzBwcjJkZDEydDQyOTJ5aXU4dnA1NWxtdmNsMjBtamUxc28wcGhmOSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/1BfPP1taCof3s61x71/giphy.gif"
  //   },
  //   {
  //     title: "OLYMPICS 2024 PREPARATIONS UNDERWAY IN PARIS",
  //     description: "Paris is making final preparations for the 2024 Olympic Games, with state-of-the-art venues and infrastructure being completed. The city promises to deliver an unforgettable sporting spectacle.",
  //     category: "Olympics",
  //     timestamp: "3 hours ago",
  //     author: "Maria Garcia",
  //     image: "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExNmJtdnhxOTlqc2Jrd2kwOXNsejB4bnpvbnEybXV4M3E3bzBvbDdmZiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/wofUBtNDIGwYJ0FaPL/giphy.gif"
  //   },
  //   {
  //     title: "TENNIS GRAND SLAM BREAKS ATTENDANCE RECORDS",
  //     description: "This year's tennis Grand Slam tournament has broken all previous attendance records, with fans from around the world flocking to witness the world's best players compete for the prestigious title.",
  //     category: "Tennis",
  //     timestamp: "4 hours ago",
  //     author: "David Wilson",
  //     image: "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExYWYxdTR3Mm1icDYxYnh3MG0wMTZ1ZG14Z2h5ZHE1c2RjYzNkZHc0aCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/F9dqhm6iQroSEFomi8/giphy.gif"
  //   },
  //   {
  //     title: "NBA PLAYOFFS: HISTORIC COMEBACK IN GAME 7",
  //     description: "In an unprecedented turn of events, the underdog team completed a historic comeback in Game 7 of the NBA playoffs, overcoming a 25-point deficit to secure their spot in the finals.",
  //     category: "Basketball",
  //     timestamp: "5 hours ago",
  //     author: "Michael Johnson",
  //     image: "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExdjkwNGplZXk2ZnM5ajZ5ZGN0N2FibHhqaWlxYWx1Z3owbG9ydHY0biZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3oEdv5e5Zd2gsczAhG/giphy.gif"
  //   },
  //   {
  //     title: "F1 RACE WEEKEND: DRAMATIC FINISH IN MONACO",
  //     description: "The Monaco Grand Prix delivered yet another thrilling race with a dramatic last-lap overtake securing victory. The narrow streets of Monte Carlo provided the perfect backdrop for this spectacular finish.",
  //     category: "Formula 1",
  //     timestamp: "6 hours ago",
  //     author: "Sarah Chen",
  //     image: "https://media.giphy.com/media/IgFjAgQ3Vf75mrLJYW/giphy.gif?cid=790b7611n413hb8w6yoxe3v4h3t6rv2ee6cusioohl35ehkc&ep=v1_gifs_search&rid=giphy.gif&ct=g"
  //   },
  //   {
  //     title: "CRICKET WORLD CUP: RECORD-BREAKING PARTNERSHIP",
  //     description: "A record-breaking partnership in the Cricket World Cup has set new standards for excellence, with both batsmen scoring centuries in a match that will be remembered for generations.",
  //     category: "Cricket",
  //     timestamp: "7 hours ago",
  //     author: "Raj Patel",
  //     image: "https://media.giphy.com/media/NitUKhyVlDseQ/giphy.gif?cid=790b76112bdoc4ve64gwshfxn0to5pf8vhv898y7hi765m9r&ep=v1_gifs_search&rid=giphy.gif&ct=g"
  //   }
  // ];

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
                {data?.feed?.title || "Sports News"}
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

        {/* Technology Stories */}
        <section className="max-w-[1920px] mx-auto px-4 sm:px-6 md:px-8 mb-8 sm:mb-12 md:mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {data?.items?.map((story) => (
              <div
                key={story?.guid}
                className="bg-white min-w-[250px] border-2 sm:border-4 border-black p-4 sm:p-6 md:p-8 transform hover:-rotate-1 transition-transform duration-300"
              >
                <div className="aspect-[16/9] relative overflow-hidden mb-4 sm:mb-6 md:mb-8 group hover:grayscale-0 grayscale transition-all duration-1000">
                  <ImageWithSkeleton
                    src={story?.enclosure?.link || getRandomImage()}
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
                  <span>By {story.author || data?.feed?.title}</span>
                  <span className="mx-2">|</span>
                  <span>{formatRelativeDate(story.pubDate)}</span>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Sports;
