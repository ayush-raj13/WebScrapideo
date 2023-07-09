import Link from './Link';

function Sidebar() {
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
        className="mb-3"
        activeClassName="font-bold border-l-4 border-blue-500 pl-2"
      >
        {link.label}
      </Link>
    );
  });

  return (
    <div className="sticky top-0 overflow-y-scroll flex flex-col items-start">
      {renderedLinks}
    </div>
  );
}

export default Sidebar;
