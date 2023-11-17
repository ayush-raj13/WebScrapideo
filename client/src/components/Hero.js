function Hero({title, desc}) {
  return (
    <header className="bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% py-6">
        <div className="container mx-auto px-4">
          <h1 className="text-lg sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white">
            {title}
          </h1>
          <p className="text-base sm:text-lg text-slate-200 mt-2">
            {desc}
          </p>
        </div>
      </header>
  )
}

export default Hero