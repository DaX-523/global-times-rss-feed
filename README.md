# FeedCraft AI - RSS Content Creator

FeedCraft AI is a modern news aggregation platform built with React and Vite that provides users with a streamlined way to consume news across multiple categories. The application features a beautiful, newspaper-inspired interface that makes browsing news content engaging and intuitive.

## Features

- **Multi-category News Aggregation**: Access news from Politics, Technology, Sports, Finance, Healthcare, Cryptocurrencies, and Stocks from RSS Feeds
- **Elegant UI**: Clean, newspaper-inspired design with responsive layout
- **Interactive Elements**: Smooth transitions and engaging user interactions
- **Detailed News Articles**: In-depth coverage with rich media support
- **AI Powered Content Creation**: The powerful llama-3.3 model helps you create social media posts in a single click, along with support of emojis and hashtags for various social platforms
- **Weather Widget**: Current weather conditions for your location and major cities

## Technology Stack

- **Frontend**: React with React Router for navigation
- **Styling**: Tailwind CSS for responsive design
- **Animations**: Framer Motion for smooth transitions
- **Build Tool**: Vite for fast development and optimized production builds
- **Deployment**: Vercel for hosting and serverless functions
- **AI**: Groq provider for llama-3.3 model

## Getting Started

### Prerequisites

- Node.js (v14.0.0 or higher)
- npm or yarn

### Installation

1. Clone the repository

   ```
   git clone https://github.com/yourusername/rss-content-creator-v2.git
   cd rss-content-creator-v2
   ```

2. Install dependencies

   ```
   npm install
   ```

3. Start the development server

   ```
   npm run vercel-dev
   ```

4. Open your browser and navigate to `http://localhost:3000`

### Vercel Serverless Functions Configuration

To work with Vercel serverless functions locally, you need to use the Vercel dev server instead of the Vite development server. The Vite development server doesn't support Vercel serverless functions.

1. Make sure your `vercel.json` has the following configuration:

   ```json
   {
     "version": 2,
     "builds": [
       { "src": "api/**/*.js", "use": "@vercel/node" },
       { "src": "dist/**", "use": "@vercel/static" }
     ],
     "routes": [
       { "src": "/api/(.*)", "dest": "/api/$1.js" },
       { "handle": "filesystem" },
       { "src": "/(.*)", "dest": "/dist/index.html" }
     ]
   }
   ```

2. Run the Vercel dev server:

   ```
   npm run vercel-dev
   ```

This will build your application and start the Vercel dev server, which properly handles the serverless functions.

## Building for Production

```
npm run build
```

## Deployment

The application is configured for easy deployment to Vercel. Simply connect your GitHub repository to Vercel and deploy.

## License

This project is licensed under the MIT License - see the LICENSE file for details.
