# WebScrapideo

WebScrapideo is a React-based web application that provides various web scraping and data extraction features. It simplifies the process of extracting information from HTML pages, summarizing text, scraping data from Flipkart, and downloading online videos. The application utilizes popular libraries such as Tailwind CSS for styling, Framer Motion for animations, Sumy for text summarization, BeautifulSoup for web scraping, and yt-dlp for video downloading.

## Demo Link

<a href="https://web-scrapideo.vercel.app/">Click here</a>

## Features

The WebScrapideo website offers the following key features:

1. Text Summarizer: Summarizes text and HTML pages using various methods such as LSA, TextRank, LexRank, Edmundson, Luhn, KL-Sum, and Reduction. The feature condenses lengthy documents and articles into concise summaries.

2. Flipkart Web Scraping: Scrapes data from Flipkart based on user-defined selections. Users can choose specific data to scrape, preview the result, and download it in CSV format. The feature supports competitive pricing analysis, product research, market trends analysis, and more.

3. Online Video Downloader: Allows users to download online videos from supported websites. The feature utilizes the yt-dlp library to retrieve download links for videos from platforms like YouTube, Vimeo, Twitter, Twitch, Udemy, and more.

## Installation

To run the client locally, follow these steps:

1. Clone the repository: `git clone https://github.com/ayush-raj13/WebScrapideo.git`
2. Navigate to the project directory: `cd client`
3. Install dependencies: `npm install`
4. Start the development server: `npm start`
5. Open the website in your browser: `http://localhost:3000`

To run the flask server locally, follow these steps:

1. Clone the repository: `git clone https://github.com/ayush-raj13/WebScrapideo.git`
2. Navigate to the project directory: `cd flipkart-scraper` (Same for text-summarizer and online-video-downloader)
3. Install dependencies:
     1. `pip install virtualenv`
     2. `virtualenv env` (If you get error running `virtualenv env`, then run `Set-ExecutionPolicy unrestricted` in cmd with admin privileges.)
     3. `.\env\Scripts\activate.bat`
     4. `pip install -r requirements.txt`
5. Create .flaskenv with following contents.<br>
FLASK_APP=app<br>
FLASK_ENV=development<br>
FLASK_RUN_PORT=3001<br>
FLASK_DEBUG=on<br>
6. Start the development server: `flask run`
7. Open the website in your browser: `http://localhost:3001`


## Technologies Used

The WebScrapideo website is built using the following technologies and libraries:

- React: A JavaScript library for building user interfaces.
- Tailwind CSS: A utility-first CSS framework for rapid UI development.
- Framer Motion: A library for creating smooth animations and transitions.
- Sumy: A library for text summarization using various methods.
- BeautifulSoup: A Python library for web scraping and extracting data from HTML pages.
- yt-dlp: A command-line program and library for downloading videos from various websites.

## Contributing

Contributions to the WebScrapideo project are welcome! If you have any suggestions, bug reports, or feature requests, please open an issue or submit a pull request.

## License

The WebScrapideo project is licensed under the MIT License. You can find more details in the [LICENSE](LICENSE) file.

## Contact

For any inquiries or questions, please contact the project maintainer at ayushraj.iiitbh@gmail.com.

