import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="pt-32 pb-16 px-8 max-w-[1920px] mx-auto">
      <h1 className="text-4xl font-serif font-bold text-black italic mb-8">Contact Us</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-2xl font-serif font-bold text-black italic mb-4">Get in Touch</h2>
          <p className="text-gray-700 font-serif italic mb-6">
            Have a story tip? Want to submit a letter to the editor? Or just want to share your thoughts? We'd love to hear from you.
          </p>
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-serif font-bold text-black italic mb-2">Office Location</h3>
              <p className="text-gray-700 font-serif italic">
                The Daily Prophet Building<br />
                Diagon Alley<br />
                London, England
              </p>
            </div>
            <div>
              <h3 className="text-lg font-serif font-bold text-black italic mb-2">Contact Information</h3>
              <p className="text-gray-700 font-serif italic">
                Owl Post: evening.edition@dailyprophet.com<br />
                Floo Network: Evening Edition Office
              </p>
            </div>
          </div>
        </div>
        <div>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-gray-700 font-serif italic mb-2">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-gray-700 font-serif italic mb-2">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
                required
              />
            </div>
            <div>
              <label htmlFor="subject" className="block text-gray-700 font-serif italic mb-2">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-gray-700 font-serif italic mb-2">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="4"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-black text-white font-serif italic py-2 px-4 rounded-md hover:bg-gray-800 transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact; 