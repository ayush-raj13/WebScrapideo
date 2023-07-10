export const Footer = () => {
  return (
    <div className="w-full flex items-center justify-center bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% py-12">
        <div className="md:w-2/3 w-full px-4 text-white flex flex-col">
            <div className="w-full text-5xl font-bold">
                <h1 className="w-full md:w-2/3">How can we help you. get
                    in touch</h1>
            </div>
            <div className="flex mt-8 flex-col md:flex-row md:justify-between">
                <p className="w-full md:w-2/3 text-gray-200">The website may stop working if Flipkart changes its website. To report the problem, open an issue by clicking on the button.</p>
                <div className="w-44 pt-6 md:pt-0">
                    <a href="https://github.com/ayush-raj13/WebScrapideo/issues" className="bg-red-500 justify-center text-center rounded-lg shadow px-10 py-3 flex items-center">Create issue.</a>
                </div>
            </div>
        </div>
    </div>
  );
};