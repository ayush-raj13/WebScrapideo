import React from 'react';
import Sidebar from './components/Sidebar';
import Route from './components/Route';
import HomePage from './pages/homePage';
import TextSummarizerPage from './pages/textSummarizerPage';
import FlipkartScraperPage from './pages/flipkartScraperPage';
import VideoDownloaderPage from './pages/videoDownloaderPage';
import './index.css'

function App() {
  return (
    <div className='dark:bg-gray-800 pt-4'>
      <div className="container mx-auto mt-4">
        {/* Sidebar */}
        <Sidebar />
        {/* Content */}
        <div className="mx-2"> {/* Adjust the margin-left to match your Sidebar width */}
          <Route path="/">
            <HomePage />
          </Route>
          <Route path="/text-summarizer">
            <TextSummarizerPage />
          </Route>
          <Route path="/flipkart-scraper">
            <FlipkartScraperPage />
          </Route>
          <Route path="/video-downloader">
            <VideoDownloaderPage />
          </Route>
        </div>
      </div>
    </div>
  );
}

export default App;
