import React, { useEffect } from "react";

const ContentModal = ({ isOpen, onClose, title, children }) => {
  // Close modal when Escape key is pressed
  useEffect(() => {
    const handleEsc = (event) => {
      if (event.keyCode === 27) onClose();
    };
    window.addEventListener("keydown", handleEsc);

    // Prevent scrolling when modal is open
    if (isOpen) {
      document.body.style.overflow = "hidden";
    }

    return () => {
      window.removeEventListener("keydown", handleEsc);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black bg-opacity-50 transition-opacity"
        onClick={onClose}
      ></div>

      {/* Modal */}
      <div className="relative z-10 w-full max-w-3xl bg-white border-4 border-black p-6 mx-4 max-h-[90vh] overflow-y-auto transform">
        <div className="flex justify-between items-center mb-6 border-b-2 border-black pb-4">
          <h2
            className="text-2xl font-serif font-bold"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            {title}
          </h2>
          <button
            onClick={onClose}
            className="text-black hover:text-gray-600 focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </button>
        </div>

        <div className="font-serif">{children}</div>

        <div className="mt-6 text-right">
          <button
            onClick={onClose}
            className="bg-black text-white px-4 py-2 text-sm font-serif uppercase tracking-wider transform hover:-rotate-1 transition-all duration-300"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContentModal;
