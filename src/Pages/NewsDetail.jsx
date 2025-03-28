import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Layout from '../components/Layout';
import { articles } from '../data/articles';

const NewsDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const article = articles[id];
  
  if (!article) {
    return (
      <Layout>
        <div className="min-h-screen pt-20 sm:pt-10 bg-white w-full">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8">
            <button
              onClick={() => navigate(-1)}
              className="mb-8 text-gray-600 hover:text-gray-900 flex items-center group transition-colors duration-200"
            >
              <svg className="w-5 h-5 mr-2 transform group-hover:-translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to News
            </button>
            <div className="text-center py-12">
              <h1 className="text-4xl font-serif font-bold mb-4">Article Not Found</h1>
              <p className="text-xl text-gray-600">The article you're looking for doesn't exist or has been removed.</p>
            </div>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="min-h-screen pt-20 sm:pt-10 bg-white w-full">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8">
          <button
            onClick={() => navigate(-1)}
            className="mb-8 text-gray-600 hover:text-gray-900 flex items-center group transition-colors duration-200"
          >
            <svg className="w-5 h-5 mr-2 transform group-hover:-translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to News
          </button>

          <article className="prose prose-lg max-w-none">
            <div className="mb-8">
              <span className="font-serif text-sm uppercase tracking-[0.3em] text-gray-800 border-2 border-black px-4 py-2 inline-block transform -rotate-1">
                {article.category}
              </span>
            </div>

            <h1 className="text-5xl sm:text-6xl font-serif font-black mb-6 leading-tight"
                style={{ fontFamily: 'Playfair Display, serif' }}>
              {article.title}
            </h1>

            <div className="flex items-center text-gray-600 mb-12 space-x-4">
              <div className="flex items-center">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                <span>By {article.author}</span>
              </div>
              <div className="flex items-center">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>{article.timestamp}</span>
              </div>
            </div>

            {article.media && (
              <div className="mb-12">
                <div className="relative aspect-[16/9] rounded-lg overflow-hidden shadow-xl">
                  {article.media.type === 'video' ? (
                    <video
                      className="w-full h-full object-cover"
                      autoPlay
                      loop
                      muted
                      playsInline
                    >
                      <source src={article.media.url} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  ) : (
                    <img
                      src={article.media.url}
                      alt={article.title}
                      className="w-full h-full object-cover"
                    />
                  )}
                  <div className="absolute inset-0 bg-black/5"></div>
                </div>
              </div>
            )}

            <div 
              className="text-gray-800 leading-relaxed"
              dangerouslySetInnerHTML={{ __html: article.content }}
            />

            {/* Related Articles */}
            <div className="mt-16 pt-12 border-t-4 border-black">
              <h2 className="text-3xl font-serif font-bold mb-8"
                  style={{ fontFamily: 'Playfair Display, serif' }}>
                Related Articles
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {article.relatedArticles.map((related) => (
                  <div 
                    key={related.id}
                    className="group cursor-pointer"
                    onClick={() => navigate(`/news/${related.id}`)}
                  >
                    <div className="bg-gray-100 aspect-[4/3] mb-4 rounded-lg overflow-hidden">
                      <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 group-hover:from-gray-300 group-hover:to-gray-400 transition-colors duration-300"></div>
                    </div>
                    <span className="font-serif text-xs uppercase tracking-wider text-gray-600 border border-gray-300 px-2 py-1 inline-block mb-2">
                      {related.category}
                    </span>
                    <h3 className="text-xl font-serif font-bold mb-2 group-hover:text-gray-600 transition-colors duration-200">
                      {related.title}
                    </h3>
                    <p className="text-sm text-gray-500">{related.timestamp}</p>
                  </div>
                ))}
              </div>
            </div>
          </article>
        </div>
      </div>
    </Layout>
  );
};

export default NewsDetail; 