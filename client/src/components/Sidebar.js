import Link from './Link';

function Navbar() {
  const links = [
    { label: 'Home', path: '/' },
    { label: 'Summarizer', path: '/text-summarizer' },
    { label: 'Flipkart Scraper', path: '/flipkart-scraper'},
    { label: 'Video Downloader', path: '/video-downloader'},
  ];

  const renderedLinks = links.map((link) => {
    return (
      <Link
        key={link.label}
        to={link.path}
        className="mr-4 text-gray-600 hover:text-gray-900 transition duration-300 ease-in-out"
        activeClassName="font-bold text-blue-500"
      >
        {link.label}
      </Link>
    );
  });

  return (
    <nav className="bg-white shadow-lg p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-[30px] font-semibold ">
        <span class="magic"><span class="magic-text">WebScrapideo</span></span>
        </div>
        <div className="flex space-x-4">
          {renderedLinks}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
