import heroBanner from '../assets/banner-stack.png'

export default function Hero() {
  return (
    <>
    <section className="relative overflow-hidden bg-white py-16 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
       
          <div className="lg:col-span-7 space-y-6">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-gray-900 leading-[1.15]">
              Build Your Ideal <br />
              <span className="bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 bg-clip-text text-transparent">
                Development Stack
              </span>
            </h1>

            <p className="text-base sm:text-lg text-gray-600 max-w-xl leading-relaxed">
              Explore frontend, backend, database, and tooling options, compare them side by side, and build the perfect technology stack for your next project.
            </p>

          
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button className="rounded-xl bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-pink-500/25 hover:opacity-95 transition-all duration-350 hover:-translate-y-0.5 active:translate-y-0">
                Explore Technologies
              </button>
              
              <button className="rounded-xl border border-gray-300 bg-white px-6 py-3 text-sm font-semibold text-gray-700 hover:bg-gray-50 hover:border-gray-400 transition-all duration-350 hover:-translate-y-0.5 active:translate-y-0 shadow-sm">
                Learn More
              </button>
            </div>
          </div>

         
          <div className="lg:col-span-5 flex justify-center">
            <div className="max-w-md flex items-center justify-center">
              
                <img className='transition-all duration-500 hover:scale-105 active:translate-y-0' src={heroBanner} alt="" />
            </div>
          </div>

        </div>
      </div>
    </section>
    </>
  )
}
