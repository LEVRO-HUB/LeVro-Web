import heroImg from "../assets/Images/Banner.jpg"
const Home = () => {
  return (
    <section className="min-h-screen bg-linear-to-br from-slate-950 via-slate-900 to-slate-800 text-white flex items-center">
      <div className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

        {/* LEFT CONTENT */}
        <div>
          <h1 className="text-4xl md:text-5xl xl:text-6xl font-bold leading-tight">
            Building Scalable <br />
            <span className="text-blue-500">Digital Solutions</span> <br />
            for Modern Businesses
          </h1>

          <p className="mt-6 text-slate-300 max-w-xl">
            Levro Technologies helps businesses grow through custom websites,
            ERP software, and mobile applications engineered for performance,
            security, and scalability.
          </p>

          <div className="mt-8 flex gap-4">
            <button className="bg-amber-500 hover:bg-amber-600 text-black font-semibold px-6 py-3 rounded-lg transition">
              Get Started
            </button>

            <button className="border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-black px-6 py-3 rounded-lg transition">
              View Services
            </button>
          </div>
        </div>

        {/* RIGHT VISUAL */}
        <div className="relative flex justify-center md:justify-end">
  <img
    src={heroImg}
    alt="Technology Illustration"
    className="w-full max-w-md rounded-2xl shadow-2xl ring-1 ring-white/10"
  />

  {/* Soft glow */}
  <div className="absolute w-80 h-80 bg-blue-500/20 rounded-full blur-[120px] -z-10"></div>
</div>




      </div>
    </section>
  );
};

export default Home;
