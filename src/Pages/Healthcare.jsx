import React, { useState } from "react";
import Layout from "../components/Layout";
import ImageWithSkeleton from "../components/ImageWithSkeleton";
import healthcare4 from "../assets/healthcare.jpg";
import healthcare1 from "../assets/healthcare1.jpg";
import healthcare2 from "../assets/healthcare2.jpg";
import healthcare3 from "../assets/gene-therapy-success-in-cancer-treatment.jpg";
import { healthcare } from "../lib/constants";
import ContentModal from "../components/ContentModal";

import formatRelativeDate from "../utils/formatRelativeDate";
import useFeedData from "../hooks/useFeedData";
import { summarizeContent } from "../lib/GroqApiCall";
import { BookOpenText, Sparkles, Share } from "lucide-react";
import ShareButtons from "../components/ShareButtons";
import { useContentContext } from "../context/ContentContext";

const getRandomImage = () => {
  const images = [healthcare3, healthcare1, healthcare2, healthcare4];
  const randomIndex = Math.floor(Math.random() * images.length);
  return images[randomIndex];
};

// Function to truncate text
const truncateText = (text, maxLength = 150) => {
  if (!text || text.length <= maxLength) return text;
  return text.substring(0, maxLength) + "...";
};

const Healthcare = () => {
  const { data, loading, error } = useFeedData(healthcare);
  const [selectedStory, setSelectedStory] = useState(null);
  const [modalContent, setModalContent] = useState("");
  const [modalTitle, setModalTitle] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isShareModalOpen, setIsShareModalOpen] = useState(false);
  const [summarizedContent, setSummarizedContent] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [modalType, setModalType] = useState("");
  const [copied, setCopied] = useState(false);

  const { state, dispatch } = useContentContext();

  const handleViewFull = (story) => {
    setSelectedStory(story);
    setModalTitle(story.title);
    setModalContent(story.description);
    setModalType("full");
    setIsModalOpen(true);
  };

  const handleSummarize = async (story) => {
    setSelectedStory(story);
    setModalTitle(`Summary: ${story.title}`);
    setIsLoading(true);
    setModalType("summary");
    setIsModalOpen(true);

    try {
      const summary = await summarizeContent(story.description);
      setSummarizedContent(summary);
    } catch (err) {
      console.error(err);
      setSummarizedContent("Error generating summary. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleShare = (story) => {
    setSelectedStory(story);
    setIsShareModalOpen(true);
  };

  const handleShareOption = (option) => {
    setIsShareModalOpen(false);
    setModalTitle(`Share via ${option}: ${selectedStory.title}`);
    setModalContent("");
    setModalType(`share-${option}`);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedStory(null);
    setModalContent("");
    setModalTitle("");
    setModalType("");
    dispatch({ type: "REMOVE_DATA" });
  };

  const closeShareModal = () => {
    setIsShareModalOpen(false);
  };

  const renderModalContent = () => {
    const handleCopy = () => {
      navigator.clipboard.writeText(state.content).then(
        () => {
          setCopied(true);
          setTimeout(() => {
            setCopied(false);
          }, 3000);
        },
        (err) => {
          console.error("Failed to copy text: ", err);
        }
      );
    };

    if (modalType === "full") {
      return <div className="prose max-w-none">{modalContent}</div>;
    }

    if (modalType === "summary") {
      return (
        <div>
          {isLoading ? (
            <div className="flex justify-center my-8">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-black"></div>
            </div>
          ) : (
            <div className="prose max-w-none">
              <h3 className="font-serif mb-4">AI Summary</h3>
              <div className="p-4 bg-gray-100">{summarizedContent}</div>
            </div>
          )}
        </div>
      );
    }

    if (modalType.startsWith("share-")) {
      return (
        <div>
          <textarea
            value={state.content}
            onChange={(e) =>
              dispatch({ type: "SET_DATA", payload: e.target.value })
            }
            className="w-full h-64 p-4 border-2 border-black font-serif"
            placeholder={`Create your ${modalType.replace(
              "share-",
              ""
            )} post here...`}
            autoFocus
          ></textarea>
          <button
            onClick={handleCopy}
            className={`py-1 px-2 mr-1 rounded bg-green-500 hover:bg-green-600 transition-colors transform duration-300`}
          >
            {copied ? "Copied! ✅" : "Copy"}
          </button>
          <button
            onClick={() => dispatch({ type: "REMOVE_DATA" })}
            className="py-1 px-2 ml-1 rounded bg-red-500 hover:bg-red-700 transition-colors transform duration-300"
          >
            Clear
          </button>
        </div>
      );
    }

    return null;
  };

  return (
    <Layout>
      <div className="min-h-screen pt-2 sm:pt-4 md:pt-6">
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
                {data?.feed?.title || "Healthcare News"}
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
              Unable to load healthcare news
            </h2>
            <p className="text-gray-700">
              Please try again later or check your internet connection.
            </p>
          </div>
        )}

        {/* Healthcare Stories */}
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
                  {story.categories &&
                    story.categories.map((category, index) => (
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
                    {truncateText(story.description, 200)}
                  </p>
                  <div className="flex flex-col space-y-4">
                    <div className="flex items-center text-gray-800 text-xs sm:text-sm font-serif italic">
                      <span>By {story.author || "Editorial Team"}</span>
                      <span className="mx-2">|</span>
                      <span>{formatRelativeDate(story.pubDate)}</span>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      <button
                        onClick={() => handleViewFull(story)}
                        className="px-3 flex py-1 text-xs text-white font-serif border border-black/10 shadow-sm hover:text-black hover:border-black bg-black hover:bg-white transition-all duration-300 items-center"
                      >
                        Full Article <BookOpenText className="w-3 h-3 ml-1" />
                      </button>
                      <button
                        onClick={() => handleSummarize(story)}
                        className="px-3 flex py-1 text-xs text-white font-serif border border-black/10 shadow-sm hover:text-black hover:border-black bg-black/75 hover:bg-white transition-all duration-300 items-center"
                      >
                        Summary <Sparkles className="w-3 h-3 ml-1" />
                      </button>
                      <button
                        onClick={() => handleShare(story)}
                        className="px-3 flex py-1 text-xs text-white font-serif border border-black/10 shadow-sm hover:text-black hover:border-black bg-black/50 hover:bg-white transition-all duration-300 items-center"
                      >
                        Share <Share className="w-3 h-3 ml-1" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}
      </div>

      {/* Content Modal */}
      <ContentModal
        isOpen={isModalOpen}
        onClose={closeModal}
        title={modalTitle}
      >
        {renderModalContent()}
      </ContentModal>

      {/* Share Options Modal */}
      <ContentModal
        isOpen={isShareModalOpen}
        onClose={closeShareModal}
        title="Share Options"
      >
        <ShareButtons
          content={selectedStory?.description}
          onShareClick={handleShareOption}
        />
      </ContentModal>
    </Layout>
  );
};

export default Healthcare;
