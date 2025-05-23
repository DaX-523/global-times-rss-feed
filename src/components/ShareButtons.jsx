import { FilePenLine } from "lucide-react";
import React from "react";
import { useContentContext } from "../context/ContentContext";
import { BlogPrompt, LinkedInPrompt, TweetPrompt } from "../lib/prompts";
import { call } from "../lib/GroqApiCall";

const ShareButtons = ({ content, onShareClick }) => {
  const { state, dispatch } = useContentContext();
  const createBlog = async () => {
    try {
      const data = await call(BlogPrompt, content);
      dispatch({ type: "SET_BLOG", payload: data });
    } catch (error) {
      console.log(error);
    }
  };
  const createTweet = async () => {
    try {
      const data = await call(TweetPrompt, content);
      dispatch({ type: "SET_TWEET", payload: data });
    } catch (error) {
      console.log(error);
    }
  };
  const createLinkedinPost = async () => {
    try {
      const data = await call(LinkedInPrompt, content);

      dispatch({ type: "SET_LINKEDIN_POST", payload: data });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="flex flex-col space-y-4">
      <button
        onClick={() => {
          createBlog();
          onShareClick("Blog");
        }}
        className="px-4 flex justify-center gap-2 items-center py-2 text-sm font-serif border-2 border-black/20 shadow-sm bg-white hover:bg-black hover:text-white transition-all duration-300 w-full"
      >
        Create Blog Post
        <FilePenLine className="w-6 h-6" />
      </button>
      <button
        onClick={() => {
          createLinkedinPost();
          onShareClick("LinkedIn");
        }}
        className="px-4 flex justify-center gap-2 items-center py-2 text-sm font-serif border-2 border-black/20 shadow-sm bg-white hover:bg-black hover:text-white transition-all duration-300 w-full"
      >
        Post on LinkedIn
        <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 26 26">
          <path
            fillRule="evenodd"
            d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.868v-2.001z"
            clipRule="evenodd"
          />
        </svg>
      </button>
      <button
        onClick={() => {
          createTweet();
          onShareClick("Twitter");
        }}
        className="px-4 flex justify-center gap-2 items-center py-2 text-sm font-serif border-2 border-black/20 shadow-sm bg-white hover:bg-black hover:text-white transition-all duration-300 w-full"
      >
        Post on Twitter
        <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
        </svg>
      </button>
    </div>
  );
};

export default ShareButtons;
