import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import SubscribeModal from "./SubscribeModal";
import Toast from "./Toast";
import logo from "../assets/logo.png";
import NewsTicker from "./NewsTicker";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [toast, setToast] = useState({
    show: false,
    message: "",
    type: "success",
  });
  const location = useLocation();

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/politics", label: "Politics" },

    { path: "/technology", label: "Technology" },

    { path: "/sports", label: "Sports" },
    { path: "/cryptocurrencies", label: "Cryptocurrencies" },
    { path: "/finance", label: "Finance" },
    { path: "/stocks", label: "Stocks" },
    { path: "/healthcare", label: "Healthcare" },
  ];

  const handleSubscribe = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const handleSubscribeSubmit = () => {
    setIsModalOpen(false);
    setToast({
      show: true,
      message: "Thank you for subscribing to The Global Times!",
      type: "success",
    });
  };

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b-4 border-black">
        <div className="max-w-[1920px] mx-auto">
          {/* Top Bar with Date */}
          <div className="bg-black text-white py-2">
            <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex justify-between items-center">
                <div className="text-sm font-serif italic">
                  {new Date().toLocaleDateString("en-US", {
                    weekday: "long",
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </div>
                <div className="text-sm font-serif italic">
                  "Your Window to the World"
                </div>
              </div>
            </div>
          </div>

          {/* Main Navigation */}
          <div className="max-w-[1920px] mx-auto px-2 sm:px-4 md:px-6 uppercase lg:px-8">
            <div className="flex justify-between h-20">
              <div className="flex items-center">
                <Link
                  to="/"
                  className="xl:text-4xl lg:text-2xl md:text-xl text-4xl font-serif font-bold italic text-black transform hover:scale-105 transition-transform duration-300"
                  style={{ fontFamily: "Playfair Display, serif" }}
                >
                  <img
                    className="h-24 w-24 min-w-24 object-contain"
                    src={logo}
                    alt="logo"
                  ></img>
                </Link>
              </div>
              <div className="hidden  overflow-x-scroll scrollbar-hide md:flex md:items-center md:space-x-6">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`inline-flex items-center px-2 py-2 text-sm font-serif uppercase tracking-wide transform hover:-rotate-1 transition-all duration-300 ${
                      location.pathname === link.path
                        ? "text-black border-b-2 border-black"
                        : "text-gray-600 hover:text-black hover:border-b-2 hover:border-black"
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
              <div className="hidden md:flex md:items-center">
                <button
                  onClick={handleSubscribe}
                  className="bg-black text-white px-4 ml-6 py-2 text-sm font-serif uppercase tracking-wide transform hover:-rotate-1 transition-all duration-300 hover:bg-gray-800"
                >
                  Subscribe
                </button>
              </div>
              <div className="flex items-center md:hidden">
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-black hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-black"
                >
                  <span className="sr-only">Open main menu</span>
                  {!isOpen ? (
                    <svg
                      className="block h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>
                  ) : (
                    <svg
                      className="block h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* News Ticker - Now below nav links */}
          <div className="border-t border-black">
            <NewsTicker />
          </div>
        </div>

        {/* Mobile menu */}
        <div
          className={`md:hidden ${
            isOpen ? "block" : "hidden"
          } bg-white border-b-4 border-black`}
        >
          <div className="pt-2 pb-3 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`block pl-3 pr-4 py-3 text-base font-serif uppercase tracking-wide transform hover:-rotate-1 transition-all duration-300 ${
                  location.pathname === link.path
                    ? "bg-black text-white"
                    : "text-gray-600 hover:text-black hover:bg-gray-50"
                }`}
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
          <div className="pt-4 pb-3 border-t border-gray-200">
            <div className="px-4">
              <button
                onClick={() => {
                  setIsOpen(false);
                  handleSubscribe();
                }}
                className="w-full bg-black text-white px-6 py-3 text-sm font-serif uppercase tracking-wide transform hover:-rotate-1 transition-all duration-300 hover:bg-gray-800"
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Subscribe Modal */}
      <SubscribeModal
        isOpen={isModalOpen}
        onClose={handleModalClose}
        onSubscribe={handleSubscribeSubmit}
      />

      {/* Toast Notification */}
      {toast.show && (
        <Toast
          message={toast.message}
          type={toast.type}
          onClose={() => setToast({ ...toast, show: false })}
        />
      )}
    </>
  );
};

export default Navbar;
