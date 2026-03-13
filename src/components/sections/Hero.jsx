export default function Hero({
  title ,
  subtitle,
  primaryText,
  secondaryText,
  backgroundImage,
}) {
  return (
    <section
      id="hero"
      className="relative flex items-center justify-center h-screen bg-cover bg-center text-white p-6"
      style={{ backgroundImage: `url('${backgroundImage}')` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-60"></div>

      {/* Konten Hero */}
      <div className="relative z-10 text-center max-w-2xl mx-auto">
        <h1 className="text-4xl sm:text-6xl font-extrabold leading-tight tracking-tight mb-4">
          {title}
        </h1>

        <p className="text-lg sm:text-xl mb-8">
          {subtitle}
        </p>

        <div className="flex justify-center gap-4">
          <button className="px-8 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-full shadow-lg transition-colors duration-300">
            {primaryText}
          </button>

          <button className="px-8 py-3 bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold rounded-full shadow-lg transition-colors duration-300">
            {secondaryText}
          </button>
        </div>
      </div>
    </section>
  );
}
