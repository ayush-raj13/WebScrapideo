import Sidebar from './components/Sidebar';
import Route from './components/Route';
import HomePage from './pages/homePage';
import TextSummarizerPage from './pages/textSummarizerPage';
import FlipkartScraperPage from './pages/flipkartScraperPage';
import VideoDownloaderPage from './pages/videoDownloaderPage';

function App() {
  return(
    <div className="container mx-auto grid grid-cols-6 gap-4 mt-4">
      <Sidebar />
      <div className="col-span-5">
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
  )
}

export default App;
