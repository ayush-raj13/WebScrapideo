function Hero({title, desc}) {
  return (
    <div className="bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% py-12">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl 2xl:text-5xl font-bold text-white mb-6">{title}</h1>
          <p className="text-base md:text-lg text-white">{desc}</p>
        </div>
      </div>
    </div>
  )
}

export default Hero