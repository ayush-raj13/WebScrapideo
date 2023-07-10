import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Hero from '../components/Hero';

const HomePage = () => {
  const [showAllWebsites, setShowAllWebsites] = useState(false);

  const handleReadMore = () => {
    setShowAllWebsites((prev) => !prev);
  };
  return (
    <>
    <div className="bg-gray-100">
      <Hero title="WebScrapideo" desc="Data extraction from HTML made easy"/>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center justify-center">
          <motion.div
            className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-12 w-12 text-indigo-500"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M9 4a1 1 0 0 0-1 1v6H5a1 1 0 1 0 0 2h3v2a1 1 0 1 0 2 0v-2h3a1 1 0 1 0 0-2h-3V5a1 1 0 0 0-1-1z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <h2 className="text-xl lg:text-2xl font-semibold mb-2 text-gray-800">
                Text Summarizer
              </h2>
              <p className="text-gray-600">
                Summarize text and HTML pages with ease using our Text Summarizer feature. It leverages the power of the Sumy library, which supports various summarization methods including:
              </p>
              <ul className="list-disc pl-6 mt-4">
                <li className="text-gray-600">LSA (Latent Semantic Analysis)</li>
                <li className="text-gray-600">TextRank</li>
                <li className="text-gray-600">LexRank</li>
                <li className="text-gray-600">Edmundson's method</li>
                <li className="text-gray-600">Luhn's algorithm</li>
                <li className="text-gray-600">KL-Sum</li>
                <li className="text-gray-600">Reduction</li>
              </ul>
              <p className="text-gray-600 mt-4">
                Each method offers unique approaches to extract important information and create concise summaries. With WebScrapideo, you can access these summarization methods in one place, making text summarization a breeze.
              </p>
            </div>
          </motion.div>

            <motion.div
              className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="bg-white rounded-lg shadow-lg p-6">
                <div className="flex items-center justify-center mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-12 w-12 text-indigo-500"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4 5a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v2H4V5zm0 6h6v2H4v-2zm0 4h6v2H4v-2zm10-6h2v8h-2v-8zm2-4a1 1 0 0 0-1-1h-2v2h2V5zm0 4h-2v2h2V9zm0 4h-2v2h2v-2zm2-6a1 1 0 0 0-1-1h-2v2h2V7z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <h2 className="text-xl lg:text-2xl font-semibold mb-2 text-gray-800">
                  Flipkart Web Scraping
                </h2>
                <p className="text-gray-600">
                  Extract data from Flipkart effortlessly with our Flipkart Web Scraping feature. Powered by the BeautifulSoup library, it allows you to select the specific data you want to scrape and preview the result before downloading it in CSV format. Use cases for the scraped data from Flipkart include:
                </p>
                <ul className="list-disc pl-6 mt-4">
                  <li className="text-gray-600">Market research and analysis</li>
                  <li className="text-gray-600">Competitor price tracking</li>
                  <li className="text-gray-600">Product comparison and reviews analysis</li>
                  <li className="text-gray-600">Inventory management</li>
                  <li className="text-gray-600">Data-driven decision making</li>
                  <li className="text-gray-600">Brand Monitoring</li>
                </ul>
                <p className="text-gray-600 mt-4">
                  With WebScrapideo, you can easily scrape and leverage data from Flipkart for various business and analytical purposes, empowering you to make informed decisions.
                </p>
              </div>
            </motion.div>

            <motion.div
              className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="bg-white rounded-lg shadow-lg p-6">
                <div className="flex items-center justify-center mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-12 w-12 text-indigo-500"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M7 4a1 1 0 0 1 2 0v1h2V4a1 1 0 0 1 2 0v3h-1v6a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V7H1V4a1 1 0 0 1 2 0v1h2V4zm11 3v9a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V7c0-1.1.9-2 2-2h4V4a4 4 0 0 1 4-4h2a4 4 0 0 1 4 4v1h4a2 2 0 0 1 2 2zm-2 0H4v9h12V7zm-2-3h-2V4h2v1z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <h2 className="text-xl lg:text-2xl font-semibold mb-2 text-gray-800">
                  Online Video Downloader
                </h2>
                <p className="text-gray-600">
                  Download online videos hassle-free with our Online Video Downloader feature. Utilizing the yt-dlp library, you can retrieve download links for videos from various websites, including:
                </p>
                {!showAllWebsites ? (
                  <ul className="list-disc pl-6 mt-4">
                    <li className="text-gray-600">YouTube</li>
                    <li className="text-gray-600">Vimeo</li>
                    <li className="text-gray-600">Twitter</li>
                    <li className="text-gray-600">Twitch</li>
                    <li className="text-gray-600">Udemy</li>
                    <li className="text-gray-600">Flipkart</li>
                    <li className="text-gray-600">WWE</li>
                  </ul>
                ) : (
                  <>
                    <ul className="list-disc pl-6 mt-4">
                      <li className="text-gray-600">FiveTV</li>
                      <li className="text-gray-600">PopcornTV</li>
                      <li className="text-gray-600">PornCom</li>
                      <li className="text-gray-600">PornerBros</li>
                      <li className="text-gray-600">Pornez</li>
                      <li className="text-gray-600">WrestleUniversePPV</li>
                      <li className="text-gray-600">WrestleUniverseVOD</li>
                      <li className="text-gray-600">XFileShare</li>
                      <li className="text-gray-600">YourUpload</li>
                      <li className="text-gray-600">Zoom</li>
                    </ul>
                    <p className="text-gray-600 mt-4">
                      Note: This is not an exhaustive list. WebScrapideo supports many more websites for video downloading.
                    </p>
                  </>
                )}
                <button
                  className="text-indigo-500 font-semibold mt-4 hover:underline focus:outline-none"
                  onClick={handleReadMore}
                >
                  {showAllWebsites ? 'Read Less' : 'Read More'}
                </button>
                <p className="text-gray-600 mt-4">
                  WebScrapideo provides a unique service by offering an extensive range of supported websites for video downloading, setting it apart from other platforms in the market. Enjoy the freedom to download videos hassle-free.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
    </>    
  );
};

export default HomePage;
