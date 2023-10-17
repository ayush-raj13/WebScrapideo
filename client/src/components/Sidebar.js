import Link from './Link';
import { useState, useEffect } from 'react';


function Navbar() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
      //setTheme("dark");
    }
    else {
      document.documentElement.classList.remove("dark");
      //setTheme("light");
    }
  }, [theme])
  console.log(theme);

  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark")
  };

  const links = [
    { label: 'Home', path: '/' },
    { label: 'Summarizer', path: '/text-summarizer' },
    { label: 'Flipkart Scraper', path: '/flipkart-scraper' },
    { label: 'Video Downloader', path: '/video-downloader' },
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
    <nav className="bg-white shadow-lg p-4 text-gray-800 dark:bg-gray-800 dark:text-gray-200">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-[30px] font-semibold ">
          <span class="magic"><span class="magic-text">WebScrapideo</span></span>
        </div>
        <div className="flex space-x-4">
          {renderedLinks}
          <div>
            <button style={{}} className='p-2   rounded-full text-gray-800 dark-bg-green-500 dark:text-gray-200' onClick={handleThemeSwitch}>
              <i class="fa-solid fa-circle-half-stroke text-4xl dark:text-gray-200"></i>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
