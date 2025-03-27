import React, { useState } from 'react';

const Subscription = () => {
  const [subscriptionData, setSubscriptionData] = useState({
    name: '',
    email: '',
    address: '',
    subscriptionType: 'daily'
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle subscription submission here
    console.log('Subscription submitted:', subscriptionData);
  };

  const handleChange = (e) => {
    setSubscriptionData({
      ...subscriptionData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="pt-32 pb-16 px-8 max-w-[1920px] mx-auto">
      <h1 className="text-4xl font-serif font-bold text-black italic mb-8">Subscribe to Evening Edition</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-2xl font-serif font-bold text-black italic mb-4">Subscription Options</h2>
          <div className="space-y-6">
            <div className="border border-gray-200 p-6 rounded-lg">
              <h3 className="text-xl font-serif font-bold text-black italic mb-2">Daily Edition</h3>
              <p className="text-gray-700 font-serif italic mb-4">
                Get the Evening Edition delivered to your doorstep every day by owl post.
              </p>
              <p className="text-2xl font-serif font-bold text-black italic">5 Sickles/week</p>
            </div>
            <div className="border border-gray-200 p-6 rounded-lg">
              <h3 className="text-xl font-serif font-bold text-black italic mb-2">Weekly Edition</h3>
              <p className="text-gray-700 font-serif italic mb-4">
                Receive a weekly digest of the most important magical news.
              </p>
              <p className="text-2xl font-serif font-bold text-black italic">15 Sickles/month</p>
            </div>
            <div className="border border-gray-200 p-6 rounded-lg">
              <h3 className="text-xl font-serif font-bold text-black italic mb-2">Digital Edition</h3>
              <p className="text-gray-700 font-serif italic mb-4">
                Access the Evening Edition through your magical device.
              </p>
              <p className="text-2xl font-serif font-bold text-black italic">3 Sickles/week</p>
            </div>
          </div>
        </div>
        <div>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-gray-700 font-serif italic mb-2">Full Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={subscriptionData.name}
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
                value={subscriptionData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
                required
              />
            </div>
            <div>
              <label htmlFor="address" className="block text-gray-700 font-serif italic mb-2">Delivery Address</label>
              <textarea
                id="address"
                name="address"
                value={subscriptionData.address}
                onChange={handleChange}
                rows="3"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
                required
              ></textarea>
            </div>
            <div>
              <label htmlFor="subscriptionType" className="block text-gray-700 font-serif italic mb-2">Subscription Type</label>
              <select
                id="subscriptionType"
                name="subscriptionType"
                value={subscriptionData.subscriptionType}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
              >
                <option value="daily">Daily Edition</option>
                <option value="weekly">Weekly Edition</option>
                <option value="digital">Digital Edition</option>
              </select>
            </div>
            <button
              type="submit"
              className="w-full bg-black text-white font-serif italic py-2 px-4 rounded-md hover:bg-gray-800 transition-colors"
            >
              Subscribe Now
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Subscription; 